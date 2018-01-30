myApp.controller('huizongController', function($scope) {
  /**查看回单功能 */
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

  /**所有单据数据 */
  $scope.receipts = [
    {type:'出库',
     receiptId:'123456789',
     customerName:'深圳市嫘祖丝绸有限公司',
     amount:1800,
     signIn:'Leon',
     signInDate:'2017-1-18'
    },
    {type:'退货',
     receiptId:'123456789',
     customerName:'深圳市嫘祖丝绸有限公司',
     amount:1800,
     signIn:'Leon',
     signInDate:'2017-1-18'
    },
    {type:'口损',
     receiptId:'123456789',
     customerName:'深圳市嫘祖丝绸有限公司',
     amount:1800,
     signIn:'Leon',
     signInDate:'2017-1-18'
    }
  ];


});