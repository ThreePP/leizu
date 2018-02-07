var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  // $urlRouterProvider.when('/huizong', ['$state', function ($state) {
  //   $state.go('huizong.all');
  // }]);
  $urlRouterProvider.when('/huizong','/huizong/all');
  $urlRouterProvider.otherwise("/index");    

  $stateProvider.state('myinfo', {
    url: '/myinfo',
    templateUrl: 'templates/myinfo.html'
  });

  $stateProvider.state('safety', {
    url: '/safety',
    templateUrl: 'templates/safety.html'
  });

  $stateProvider.state('realname', {
    url: '/realname',
    templateUrl: 'templates/realname.html'
  });

  $stateProvider.state('address', {
    url: '/address',
    templateUrl: 'templates/address.html'
  });

  $stateProvider.state('memberinfo', {
    url: '/memberinfo',
    templateUrl: 'templates/memberinfo.html'
  });

  $stateProvider.state('wallet', {
    url: '/wallet',
    templateUrl: 'templates/wallet.html'
  });

  $stateProvider.state('cashcoupon', {
    url: '/cashcoupon',
    templateUrl: 'templates/cashcoupon.html'
  });

  $stateProvider.state('bill-list', {
    url: '/bill-list',
    templateUrl: 'templates/bill-list.html'
  });

  $stateProvider.state('bill-manage', {
    url: '/bill-manage',
    templateUrl: 'templates/bill-manage.html'
  });

  $stateProvider.state('orders-list', {
    url: '/orders-list',
    templateUrl: 'templates/orders-list.html'
  });

  $stateProvider.state('chouduan', {
    url: '/chouduan',
    templateUrl: 'templates/chouduan.html'
  });

  $stateProvider.state('goodslist', {
    url: '/goodslist',
    templateUrl: 'templates/goodslist.html'
  });

  $stateProvider.state('kucun', {
    url: '/kucun',
    templateUrl: 'templates/kucun.html'
  });

  $stateProvider.state('yangpin', {
    url: '/yangpin',
    templateUrl: 'templates/yangpin.html'
  });

  $stateProvider.state('pattern', {
    url: '/pattern',
    templateUrl: 'templates/pattern.html'
  });

  $stateProvider.state('color', {
    url: '/color',
    templateUrl: 'templates/color.html'
  });

  $stateProvider.state('djlist-chuku', {
    url: '/djlist-chuku',
    templateUrl: 'templates/djlist-chuku.html'
  });

  $stateProvider.state('djlist-ruku', {
    url: '/djlist-ruku',
    templateUrl: 'templates/djlist-ruku.html'
  });

  $stateProvider.state('djlist-fapiao', {
    url: '/djlist-fapiao',
    templateUrl: 'templates/djlist-fapiao.html'
  });

  $stateProvider.state('djcon-fapiao', {
    url: '/djcon-fapiao',
    templateUrl: 'templates/djcon-fapiao.html'
  });

  $stateProvider.state('djcon-fapiao-txt', {
    url: '/djcon-fapiao-txt',
    templateUrl: 'templates/djcon-fapiao-txt.html'
  });

  $stateProvider.state('djlist-lingsun', {
    url: '/djlist-lingsun',
    templateUrl: 'templates/djlist-lingsun.html'
  });


  $stateProvider.state('invoice', {
        url: "/invoice/:type",
        templateUrl: 'templates/djlist-yingshou.html',
        controller: function ($stateParams) {
            // If we got here from a url of /contacts/42
            // expect($stateParams).toBe({type: "yingshou"});
        }
  });

  $stateProvider.state('duizhang', {
      url: "/duizhang/:id",
      templateUrl: 'templates/duizhang.html',
      controller: function ($stateParams) {
          // If we got here from a url of /contacts/42
          //expect($stateParams).toBe({id: "123456789"});
      }
  });

  $stateProvider.state('yinhua', {
    url: "/yinhua",
    templateUrl: 'templates/djlist-paichan.html',
    controller: function ($stateParams) {
        // If we got here from a url of /contacts/42
        //expect($stateParams).toBe({id: "123456789"});
    }
  });

  $stateProvider.state('addyinhua', {
    url: "/addyinhua",
    templateUrl: 'templates/addyinhua.html',
    controller: 'yinhuaController'
  });
  $stateProvider.state('ylyinhua', {
    url: "/ylyinhua",
    templateUrl: 'templates/ylyinhua.html',
    controller: 'yinhuaPreviewController'
  });

  $stateProvider.state('ranse', {
    url: "/ranse",
    templateUrl: 'templates/djlist-paichan2.html',
    controller: function ($stateParams) {
        // If we got here from a url of /contacts/42
        //expect($stateParams).toBe({id: "123456789"});
    }
  });

  $stateProvider.state('addranse', {
    url: "/addranse",
    templateUrl: 'templates/addranse.html',
    controller: function ($stateParams) {
        // If we got here from a url of /contacts/42
        //expect($stateParams).toBe({id: "123456789"});
    }
  });

  $stateProvider.state('ylranse', {
    url: "/ylranse",
    templateUrl: 'templates/ylranse.html',
    controller: function ($stateParams) {
        // If we got here from a url of /contacts/42
        //expect($stateParams).toBe({id: "123456789"});
    }
  });

  $stateProvider.state('collection', {
    url: "/collection",
    templateUrl: 'templates/collection.html',
    controller: function ($stateParams) {
        // If we got here from a url of /contacts/42
        //expect($stateParams).toBe({id: "123456789"});
    }
  });

  

  $stateProvider.state('addnewchuku', {
    url: '/addnewchuku',
    templateUrl: 'templates/addnewchuku.html',
    controller: 'chukuController'
  });

  $stateProvider.state('addchukumingxi', {
    url: '/addchukumingxi',
    templateUrl: 'templates/addchukumingxi.html',
    controller: 'chukuMingxiController'
  });

  $stateProvider.state('addnewtuihuo', {
    url: '/addnewtuihuo',
    templateUrl: 'templates/addnewtuihuo.html',
    controller: 'chukuController'

  });

  $stateProvider.state('addnewkousun', {
    url: '/addnewkousun',
    templateUrl: 'templates/addnewkousun.html',
    controller: 'chukuController'

  });

  $stateProvider.state('addnewruku', {
    url: '/addnewruku',
    templateUrl: 'templates/addnewruku.html'

  });

  $stateProvider.state('addnewlingliao', {
    url: '/addnewlingliao',
    templateUrl: 'templates/addnewlingliao.html'

  });

  $stateProvider.state('addnewtiaozheng', {
    url: '/addnewtiaozheng',
    templateUrl: 'templates/addnewtiaozheng.html'

  });
  

  $stateProvider.state('huizong', {
    url: '/huizong',
    templateUrl: 'templates/huizonglist.html'
  })
  .state('huizong.all', {
    url: '/all',
    templateUrl: 'templates/huizonglist-all.html',
    controller: 'huizongController'
  })
  .state('huizong.chuku', {
    url: '/chuku',
    templateUrl: 'templates/huizonglist-chuku.html'
  })
  .state('huizong.tuihuo', {
    url: '/tuihuo',
    templateUrl: 'templates/huizonglist-tuihuo.html'
  })
  .state('huizong.kousun', {
    url: '/kousun',
    templateUrl: 'templates/huizonglist-kousun.html'
  })
  .state('huizong.ruku', {
    url: '/ruku',
    templateUrl: 'templates/huizonglist-ruku.html'
  })
  .state('huizong.lingliao', {
    url: '/lingliao',
    templateUrl: 'templates/huizonglist-lingliao.html'
  })
  .state('huizong.tiaozheng', {
    url: '/lingliao',
    templateUrl: 'templates/huizonglist-tiaozheng.html'
  });
  
  $stateProvider.state('djconchuku', {
    url: '/djconchuku/:receiptId',
    templateUrl: 'templates/djcon-chuku.html',
    controller: 'djconChukuController'
  });

  
  
  $stateProvider.state('djconruku', {
    url: '/djconruku',
    templateUrl: 'templates/djcon-ruku.html'
  });
  

  //------合同---------
  $stateProvider.state('contract', {
    url: '/contract/:type',
    templateUrl: 'templates/contract-list.html',
    controller: function ($stateParams) {
      // If we got here from a url of /contacts/42
      //expect($stateParams).toBe({id: "123456789"});
    }
  })
  .state('contract.list', {
    url: '/list/:type/:state',
    templateUrl: 'templates/contract-list.html',
    // controller: function ($stateParams) {
    //   // If we got here from a url of /contacts/42
    //   //expect($stateParams).toBe({id: "123456789"});
    // }
  })
  .state('contract.detail', {
    url: '/detail/:id',
    templateUrl: 'templates/contract-txt.html',
    // controller: function ($stateParams) {
    //   // If we got here from a url of /contacts/42
    //   //expect($stateParams).toBe({id: "123456789"});
    // }
  });
  $stateProvider.state('contract-new', {
    url: '/contract-new',
    templateUrl: 'templates/contract-new.html',
    // controller: function ($stateParams) {
    //   // If we got here from a url of /contacts/42
    //   //expect($stateParams).toBe({id: "123456789"});
    // }
  });
  $stateProvider.state('contract-add', {
    url: '/contract-add',
    templateUrl: 'templates/contract-add.html',
    // controller: function ($stateParams) {
    //   // If we got here from a url of /contacts/42
    //   //expect($stateParams).toBe({id: "123456789"});
    // }
  });

  

  // $urlRouterProvider.when('/huizong', '/huizong/all');
  
                      
});
/*
angular.module('hellogalaxy').component('hello', {
  template:  '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
             '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',
           
  controller: function() {
    this.greeting = 'hello';
  
    this.toggleGreeting = function() {
      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
    }
  }
});

angular.module('hellogalaxy').component('people', {
  bindings: { people: '<' },

  template: '<h3>Some people:</h3>' +
            '<ul>' +
            '  <li ng-repeat="person in $ctrl.people">' +
            '    <a ui-sref="person({ personId: person.id })">' +
            '      {{person.name}}' +
            '    </a>' +
            '  </li>' +
            '</ul>'
});
*/