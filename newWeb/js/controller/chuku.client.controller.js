myApp.controller('chukuController', [ '$scope', function($scope) {

    $scope.rows = [1, 2];
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
        
        $scope.rows.push($scope.rows.length+1);
        // $scope.counter++;
    };
    
    $scope.remove = function(index){
        $scope.rows.splice(index,1);
    };

}]);