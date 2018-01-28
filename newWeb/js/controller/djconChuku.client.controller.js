myApp.controller('djconChukuController', function($scope) {
    $scope.printToCart = function(printSectionId) {
    //   var innerContents = document.getElementById(printSectionId).innerHTML;
    //   var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    //   popupWinindow.document.open();
    //   popupWinindow.document.write('<html><head>'+
    //   '<link rel="stylesheet" type="text/css" href="css/page.css" />'+
    //   '<link rel="stylesheet" type="text/css" href="css/main.css" />'+
    //   '<link rel="stylesheet" type="text/css" href="css/photor.css" />'+
    //   '<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />'+
    //   '</head><body>' + innerContents + 
    //   '<a href="" class="button" onclick="window.print()">Print</a>' +
    //   '</body></html>');
    //   popupWinindow.document.close();

      var printContents = document.getElementById(printSectionId).innerHTML;
      var originalContents = document.body.innerHTML;        
      document.body.innerHTML = printContents;
      //window.document.open();
      window.print();
      document.body.innerHTML = originalContents;
    }
});