myApp.controller('chukuController', [ '$scope', function($scope) {

    $scope.rows = [{index:1,subtotal:""}];
    $scope.user = {name:'ABC'};
    $scope.chukuNumber = 42563584;
    $scope.counter = 1;
    //$scope.subtotals = []
    $scope.total = function (){
        console.log('getTotal');
        var sum = 0;
        for(i=0;i<$scope.rows.length-1;i++){
          console.log(i+'='+$scope.rows[i].subtotal);
          sum = sum + $scope.rows[i].subtotal;
        }
        console.log(sum);
        return sum;
    };
    
    
    var init = function () {
        getChukuNumber();
    };

    init();

    function getChukuNumber(){
        $scope.counter++;
        $scope.chukuNumber = $scope.chukuNumber+$scope.counter;
    };

    
    $scope.addRow = function() {
        
        //$scope.rows.push($scope.rows.length+1);
        $scope.rows.push({index:$scope.rows.length+1,subtotal:""});
        //$scope.subtotals.push(0);
    };
    
    $scope.remove = function(index){
        $scope.rows.splice(index,1);
        //resetSum(index,subtotals);
    };
    
    
    

}]);