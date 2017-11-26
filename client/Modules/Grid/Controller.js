configApp.controller('ConfigController',  function($scope, $rootScope, CallRestAPI, $interval, uiGridGroupingConstants, $timeout){

	function updatePagination(rowsDifference) {
	  //updating pagination will trigger singleFilter where the height is being reset
	  //$scope.gridOptions.paginationPageSizes = [$scope.gridOptions.paginationPageSize + rowsDifference, 25, 50, 100, 500];
	  $scope.gridOptions.paginationPageSize = $scope.gridOptions.paginationPageSize + rowsDifference;
	}
	$scope.singleFilter = function(renderableRows) {
    	$timeout(function() {
      		var newHeight = ($scope.gridApi.grid.getVisibleRowCount() * 30);
      		angular.element(document.getElementsByClassName('grid')[0]).css('height', newHeight + 'px');
    	}, 10);
    	return renderableRows;
  	};

	$scope.gridOptions = {
	    enableFiltering: true,
	    treeRowHeaderAlwaysVisible: false,
      	//minRowsToShow:6,
	    //excessRows:200, //This value is default 4. Lost couple min figuring it out
	    //paginationPageSizes: [5, 10, 15],
	    enablePaginationControls: false,
    	paginationPageSize: 5,
	    columnDefs: [
			{ name: 'model', width: '12%' }, //model
			{ name: 'brand', grouping: { groupPriority: 1 }, sort: { priority: 1, direction: 'asc' }, 
			  width: '10%'}, //  brand 
 			{ name: 'qty', treeAggregationType: uiGridGroupingConstants.aggregation.MAX, width: '10%' },//qty
			{ name: 'p_zone', width: '20%' }, //p_zone
			{ name: 'trns_date', width: '15%', cellFilter: 'date', type: 'date' },//trns_date
			{ name: 'u_name', grouping: { groupPriority: 0 }, sort: { priority: 0, direction: 'desc' }, width: '15%', //u_name
			  cellTemplate: '<div><div ng-if="!col.grouping || col.grouping.groupPriority === undefined || col.grouping.groupPriority === null || ( row.groupHeader && col.grouping.groupPriority === row.treeLevel )" class="ui-grid-cell-contents" title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div></div>' },
			
			{ name: 'amt', width: '12%', cellFilter: 'currency', treeAggregationType: uiGridGroupingConstants.aggregation.AVG, customTreeAggregationFinalizerFn: function( aggregation ) {
			aggregation.rendered = aggregation.value; //amt
			} }
	    ],
	    onRegisterApi: function( gridApi ) {
	      $scope.gridApi = gridApi;

	       $scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);
		   $scope.gridApi.treeBase.on.rowExpanded(null, function(row) {
		     updatePagination(row.treeNode.children.length);
		   });
		   $scope.gridApi.treeBase.on.rowCollapsed(null, function(row) {
		     updatePagination(-row.treeNode.children.length);
		   });
	    }
	};

	CallRestAPI.callRest("GET").then(function (response){
		var data = response.data;
		$rootScope.transactionData = response.data;   //This transaction data will be used in charting
		var uniqueUserName = [];
		for ( var i = 0; i < data.length; i++ ){
			var registeredDate = new Date( data[i].trns_date );
			data[i].trns_date = new Date( registeredDate.getFullYear(), registeredDate.getMonth(), 1 );
			if( uniqueUserName.indexOf(data[i].u_name) < 0){
				uniqueUserName[uniqueUserName.length] = data[i].u_name;
			}
		}
		$scope.gridOptions.data = data;
		$scope.lastPage = Math.ceil(uniqueUserName.length/5);    //Get the last page number
		
	}, function(error) {
		$scope.testflag="failure";
	});

  $scope.expandAll = function(){
    $scope.gridApi.treeBase.expandAllRows();
  };

  $scope.toggleRow = function( rowNum ){
    $scope.gridApi.treeBase.toggleRowTreeState($scope.gridApi.grid.renderContainers.body.visibleRowCache[rowNum]);
  };

  $scope.changeGrouping = function() {
    $scope.gridApi.grouping.clearGrouping();
    $scope.gridApi.grouping.groupColumn('qty');
    $scope.gridApi.grouping.aggregateColumn('u_name', uiGridGroupingConstants.aggregation.COUNT);
  };

  $scope.getAggregates = function() {
    var aggregatesTree = [];
    //var gender;

    var recursiveExtract = function( treeChildren ) {
      return treeChildren.map( function( node ) {
        var newNode = {};
        angular.forEach(node.row.entity, function( attributeCol ) {
          if( typeof(attributeCol.groupVal) !== 'undefined' ) {
            newNode.groupVal = attributeCol.groupVal;
            newNode.aggVal = attributeCol.value;
          }
        });
        newNode.otherAggregations = node.aggregations.map( function( aggregation ) {
          return { colName: aggregation.col.name, value: aggregation.value, type: aggregation.type };
        });
        if( node.children ) {
          newNode.children = recursiveExtract( node.children );
        }
        return newNode;
      });
    };

    aggregatesTree = recursiveExtract( $scope.gridApi.grid.treeBase.tree );
  };
});