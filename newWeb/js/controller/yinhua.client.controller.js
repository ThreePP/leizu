//yinhuaController
myApp.controller('yinhuaController', function($scope, yinhuaService) {
    $scope.map;
    $scope.addYinhua = function (map){
        yinhuaService.addYinhua(map);
    }
    $scope.preview = function (){
        $scope.previewPage = true;
    }
});