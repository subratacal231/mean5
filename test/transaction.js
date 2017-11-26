var sequelize = require("sequelize");
var Transaction = require('../app/models');

//Dev-dependencies for automated test
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();
var expect = chai.expect;

chai.use(chaiHttp);

describe('Transactions', function(){
    beforeEach(function(done){ //Before each test we empty the database
        Transaction.models.transaction.destroy({where : {}}).then(function(rowDeleted){ 
           done();         
        });     
    });
/*
  * Test the /GET route
  */
  describe('/GET transaction', function(){
      it('it should GET all the transactions', function(done){
        chai.request(server)
            .get('/')
            .end(function(err, res){
                res.should.have.status(200);
                expect(res.body).to.deep.equal({});
	            done();
            });
      });
  });

});