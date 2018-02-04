//yinhuaController
myApp.controller('yinhuaController', function($scope, $yinhuaService) {
    $scope.image;
    $scope.addYinhua = function (yinhuaImage){
        var yinhua = {
            imageUrl:yinhuaImage.src,
        }
        $yinhuaService.addYinhua();
    }
    


});