myApp.controller('tuihuoController', [ '$scope', function($scope) {

    $scope.rows = [{index:1,subtotal:""}];
    $scope.user = {name:'ABC'};
    $scope.chukuNumber = 42563584;
    $scope.counter = 1;
    
    
    var init = function () {
        getChukuNumber();
    };

    init();

    function getChukuNumber(){
        $scope.counter++;
        $scope.chukuNumber = $scope.chukuNumber+$scope.counter;
    };

    
    $scope.addRow = function() {
        $scope.rows.push({index:$scope.rows.length+1,subtotal:""});
    };
    
    $scope.remove = function(index){
        $scope.rows.splice(index,1);
    };
    
    

}]);