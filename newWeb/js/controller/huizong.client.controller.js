myApp.controller('huizongController', [ '$scope', function($scope) {
   $scope.formState = true;
   $scope.imgUrl;
   $scope.showForm = function(id){
     $scope.imgUrl = '/images/'+id+'.jpg';
     $scope.formState = false;
   }
   $scope.closeForm = function(){
    //$scope.imgUrl = '/images/'+id+'.jpg';
    $scope.formState = true;
  }

}]);