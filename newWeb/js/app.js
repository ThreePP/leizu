var myApp = angular.module('myApp', ['ui.router','ngAnimate']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  // $urlRouterProvider.when('/huizong', ['$state', function ($state) {
  //   $state.go('huizong.all');
  // }]);
  $urlRouterProvider.when('/huizong','/huizong/all');
  $urlRouterProvider.otherwise("/index");    

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

  $stateProvider.state('djlist-lingsun', {
    url: '/djlist-lingsun',
    templateUrl: 'templates/djlist-lingsun.html'
  });

  $stateProvider.state('addnewchuku', {
    url: '/addnewchuku',
    templateUrl: 'templates/addnewchuku.html',
    controller: 'chukuController'
  });
  
  // stateHelperProvider.setNestedState({
  //   name: 'huizong',
  //   templateUrl: 'templates/huizonglist.html',
  //   children: [
  //     {
  //       name: 'chuku',
  //       templateUrl: 'templates/huizong-chuku.html'
  //     }]
  // });

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
    url: '/djconchuku',
    templateUrl: 'templates/djcon-chuku.html'
  });

  
  
  $stateProvider.state('djconruku', {
    url: '/djconruku',
    templateUrl: 'templates/djcon-ruku.html'
  });
  
  

  // $urlRouterProvider.when('/huizong', '/huizong/all');
  
                      
})
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