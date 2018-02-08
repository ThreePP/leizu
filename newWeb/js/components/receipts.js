myApp.component('receipts', {
    templateUrl:'../templates/addnewchuku.html',
             
    controller: function() {
      this.rows = [{index:1,subtotal:""}];
      this.user = {name:'ABC'};
      this.chukuNumber = 42563584;
      this.counter = 1;
      
      var init = function () {
          getChukuNumber();
      };

      init();

      function getChukuNumber(){
          this.counter++;
          this.chukuNumber = this.chukuNumber+this.counter;
      };

      
      this.addRow = function() {
          this.rows.push({index:this.rows.length+1,subtotal:""});
      };
      
      this.remove = function(index){
          this.rows.splice(index,1);
      };
      
    }
});