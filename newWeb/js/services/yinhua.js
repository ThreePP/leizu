myApp.service('yinhuaService', function() {
    var yinhuaObject = {};
  
    var addYinhua = function(newObj) {
        yinhuaObject = newObj;
    };
  
    var getYinhua = function(){
        return yinhuaObject;
    };
  
    return {
        addYinhua: addYinhua,
        getYinhua: getYinhua
    };
  
});

myApp.directive('yinhuaDirective', function () {
    return {
        template: '',
        controller: function ($scope) {
            console.log($scope);
        }
    }
});