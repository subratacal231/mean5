chartApp.controller('ChartController', function($scope, $rootScope){

	$scope.itemSelected = 'Select One';
	$scope.chartDescription = '';
	$scope.pieChartOption = '';

	$scope.onPieChartCategoryChange = function(pieChartOption){
		$scope.key = [];
	    $scope.y = [];
	    $scope.data = [];
	    if(pieChartOption === 'TotalAmount'){
	    	$scope.onCategoryChange($scope.itemSelected);
	    }
	    else if(pieChartOption === 'TotalQuatity' && $scope.itemSelected === 'PieChart'){
	    	$scope.chartDescription = "PIE CHART DEMO: It shows the users with the total quantity of purcharse.";
		    for(var i=0; i < $rootScope.transactionData.length; i++){
		    	if($scope.key.indexOf($rootScope.transactionData[i].u_name) < 0){
		    		$scope.key[$scope.key.length] = $rootScope.transactionData[i].u_name;
		    		$scope.y[$scope.y.length] = $rootScope.transactionData[i].qty;
		    	}
		    	else{
		    		$scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] = 
		    			$scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] + $rootScope.transactionData[i].qty;
		    	}
		    }
		    for(i=0; i < $scope.key.length; i++){
		    	$scope.data[i] = {"key": $scope.key[i], "y": $scope.y[i]};      
		    }
		}
		else if(pieChartOption === 'MaxQuantity' && $scope.itemSelected === 'PieChart'){
			$scope.chartDescription = "PIE CHART DEMO: It shows the users with maximum item purcharse.";
		    for(var i=0; i < $rootScope.transactionData.length; i++){
		    	if($scope.key.indexOf($rootScope.transactionData[i].u_name) < 0){
		    		$scope.key[$scope.key.length] = $rootScope.transactionData[i].u_name;
		    		$scope.y[$scope.y.length] = $rootScope.transactionData[i].qty;
		    	}
		    	else{
		    		if($scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] < $rootScope.transactionData[i].qty){
		    			$scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] = $rootScope.transactionData[i].qty;
		    		}
		    	}
		    }
		    for(i=0; i < $scope.key.length; i++){
		    	$scope.data[i] = {"key": $scope.key[i], "y": $scope.y[i]};      
		    }
		}
		else if(pieChartOption === 'TotalQuatity' && $scope.itemSelected === 'BarGraph'){
	    	$scope.chartDescription = "HORIZONTAL BAR GRAPH: It shows the users with the total quantity of purcharse.";
	    	$scope.options.chart.yAxis.axisLabel = 'Purchased Quantity';
		    for(var i=0; i < $rootScope.transactionData.length; i++){
		    	if($scope.key.indexOf($rootScope.transactionData[i].u_name) < 0){
		    		$scope.key[$scope.key.length] = $rootScope.transactionData[i].u_name;
		    		$scope.y[$scope.y.length] = $rootScope.transactionData[i].qty;
		    	}
		    	else{
		    		$scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] = 
		    			$scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] + $rootScope.transactionData[i].qty;
		    	}
		    }
		    var tempData = [];
		    for(i=0; i < $scope.key.length; i++){
		    	tempData[i] = {"label": $scope.key[i], "value": $scope.y[i]};      
		    }
		    $scope.data = [
            {
                "key" : "Amount" ,
                "color": "#1f77b4",
                "values" : tempData
            }];
		}
		else if(pieChartOption === 'MaxQuantity' && $scope.itemSelected === 'BarGraph'){
			$scope.chartDescription = "HORIZONTAL BAR GRAPH: It shows the users with maximum item purcharse.";
			$scope.options.chart.yAxis.axisLabel = 'Maximum Purchased Quantity';
		    for(var i=0; i < $rootScope.transactionData.length; i++){
		    	if($scope.key.indexOf($rootScope.transactionData[i].u_name) < 0){
		    		$scope.key[$scope.key.length] = $rootScope.transactionData[i].u_name;
		    		$scope.y[$scope.y.length] = $rootScope.transactionData[i].qty;
		    	}
		    	else{
		    		if($scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] < $rootScope.transactionData[i].qty){
		    			$scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] = $rootScope.transactionData[i].qty;
		    		}
		    	}
		    }
		    var tempData = [];
		    for(i=0; i < $scope.key.length; i++){
		    	tempData[i] = {"label": $scope.key[i], "value": $scope.y[i]};      
		    }
		    $scope.data = [
            {
                "key" : "Amount" ,
                "color": "#1f77b4",
                "values" : tempData
            }];
		}
	};
	$scope.onCategoryChange = function(itemSelected) {
		//console.log(itemSelected);
		if(itemSelected === 'PieChart'){
			$scope.chartDescription = "PIE CHART DEMO: It shows the users with the total amount of purcharse.";
			$scope.pieChartOption = 'TotalAmount'; //Setting the default
			$scope.options = {
		        chart: {
		            type: 'pieChart',
		            height: 500,
		            x: function(d){return d.key;},
		            y: function(d){return d.y;},
		            showLabels: true,
		            duration: 500,
		            labelThreshold: 0.01,
		            labelSunbeamLayout: true,
		            legend: {
		                margin: {
		                    top: 5,
		                    right: 35,
		                    bottom: 5,
		                    left: 0
		                }
		            }
		        }
		    };
		    $scope.key = [];
		    $scope.y = [];
		    $scope.data = [];

		    for(var i=0; i < $rootScope.transactionData.length; i++){
		    	if($scope.key.indexOf($rootScope.transactionData[i].u_name) < 0){
		    		$scope.key[$scope.key.length] = $rootScope.transactionData[i].u_name;
		    		$scope.y[$scope.y.length] = $rootScope.transactionData[i].amt;
		    	}
		    	else{
		    		$scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] = 
		    			$scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] + $rootScope.transactionData[i].amt;
		    	}
		    }
		    for(i=0; i < $scope.key.length; i++){
		    	$scope.data[i] = {"key": $scope.key[i], "y": $scope.y[i]};      
		    }

		    /*$scope.data = [
		        {
		            key: "One",
		            y: 5
		        },
		        {
		            key: "Two",
		            y: 2
		        },
		        {
		            key: "Three",
		            y: 9
		        }
		    ];*/
		}
		else if(itemSelected === 'BarGraph'){
			 $scope.chartDescription = "HORIZONTAL BAR GRAPH: It shows the users with the total amount of purcharse.";
			 $scope.pieChartOption = 'TotalAmount'; //Setting the default
			 $scope.options = {
	            chart: {
	                type: 'multiBarHorizontalChart',
	                height: 450,
	                x: function(d){return d.label;},
	                y: function(d){return d.value;},
	                showControls: true,
	                showValues: true,
	                duration: 500,
	                xAxis: {
	                    showMaxMin: false
	                },
	                yAxis: {
	                    axisLabel: 'Purchase Amount',
	                    tickFormat: function(d){
	                        return d3.format(',.2f')(d);
	                    }
	                }
	            }
	        };
	        $scope.key = [];
		    $scope.y = [];
		    $scope.data = [];
		    var tempData = [];

		    for(var i=0; i < $rootScope.transactionData.length; i++){
		    	if($scope.key.indexOf($rootScope.transactionData[i].u_name) < 0){
		    		$scope.key[$scope.key.length] = $rootScope.transactionData[i].u_name;
		    		$scope.y[$scope.y.length] = $rootScope.transactionData[i].amt;
		    	}
		    	else{
		    		$scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] = 
		    			$scope.y[$scope.key.indexOf($rootScope.transactionData[i].u_name)] + $rootScope.transactionData[i].amt;
		    	}
		    }

		    for(i=0; i < $scope.key.length; i++){
		    	tempData[i] = {"label": $scope.key[i], "value": $scope.y[i]};      
		    }//console.log(tempData);
	        

	        $scope.data = [
            {
                "key" : "Amount" ,
                "color": "#1f77b4",
                "values" : tempData
            }];
            console.log($scope.data);
		}
	};
    //console.log($rootScope.transactionData);
});
