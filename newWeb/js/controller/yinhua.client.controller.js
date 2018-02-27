//yinhuaController
myApp.controller('yinhuaController', function($scope) {
    $scope.map;
    $scope.formData = {formDate:new Date()};
    /**预览功能 */
    $scope.preview =true;
    $scope.bttnPreview = false;
    $scope.bttnClose = true;
    $scope.showPreview = function(){

      $scope.bttnPreview = true;
      $scope.bttnClose = false;
      $scope.preview = false;

    }
    $scope.closePreview = function(){
      $scope.bttnPreview = false;
      $scope.bttnClose = true;
      $scope.preview = true;
    }
});