myApp.controller('chukuMingxiController', [ '$scope', function($scope) {

    $scope.rows = [{
        box:'',
        color:'',
        n1:'',
        n2:'',
        n3:'',
        n4:'',
        n5:'',
        n6:'',
        n7:'',
        n8:'',
        n9:'',
        n10:'',
        subTotal:''
    }];

    $scope.amount = 0;

    $scope.user = {name:'ABC'}; //这里调用session 
    $scope.chukuNumber = 42563584;
    $scope.counter = 1;

    $scope.getSubTotal = function (row,index){
        $scope.rows[index].subTotal = Number($scope.rows[index].n1) 
                            + Number($scope.rows[index].n2) 
                            + Number($scope.rows[index].n3) 
                            + Number($scope.rows[index].n4) 
                            + Number($scope.rows[index].n5)
                            + Number($scope.rows[index].n6) 
                            + Number($scope.rows[index].n7) 
                            + Number($scope.rows[index].n8) 
                            + Number($scope.rows[index].n9) 
                            + Number($scope.rows[index].n10);
        $scope.amount = getAmount();
    }
    
    function getAmount(){
       var amount = 0;
       $scope.rows.forEach(element => {
           amount = amount + element.subTotal;
       });
       return amount;
    }

    var init = function () {
        //$scope.amount = getAmount();
        getChukuNumber();
    };

    init();

    function getChukuNumber(){
        $scope.counter++;
        $scope.chukuNumber = $scope.chukuNumber+$scope.counter;//这里调用后端得到出库单号
    };

    
    $scope.addRow = function() {
        var row = {
            box:'',
            color:'',
            n1:'',
            n2:'',
            n3:'',
            n4:'',
            n5:'',
            n6:'',
            n7:'',
            n8:'',
            n9:'',
            n10:'',
            subTotal:''
        };
        $scope.rows.push(row);
        // $scope.counter++;
    };
    
    $scope.remove = function(index){
        $scope.rows.splice(index,1);
    };



}]);