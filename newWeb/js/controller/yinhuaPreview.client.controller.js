myApp.controller('yinhuaPreviewController', function($scope, yinhuaService) {
    $scope.map;
    $scope.getYinhua = function (){
        $scope.map = console.log(yinhuaService.getYinhua());
        //return yinhuaService.getYinhua();
    }
});