myApp.controller('djconChukuController', function($scope,$stateParams) {
  $scope.receiptDetail = {
    records:[{
      number:'18063',
      category:'弹力缎',
      norm:'',
      price:'10.00',
      quantity:'10',
      amount:'100.00',
    },
    {
      number:'18063',
      category:'弹力缎',
      norm:'',
      price:'10.00',
      quantity:'10',
      amount:'100.00',
    },
    {
      number:'18063',
      category:'弹力缎',
      norm:'',
      price:'10.00',
      quantity:'10',
      amount:'100.00',
    }],
    subTotal:'300.00'
  };
  

  /**打印预览 */
  $scope.printToCart = function(printSectionId) {
    var printContents = document.getElementById(printSectionId).innerHTML;
    var originalContents = document.body.innerHTML;        
    document.body.innerHTML = printContents;
    //window.document.open();
    window.print();
    document.body.innerHTML = originalContents;
  }

});