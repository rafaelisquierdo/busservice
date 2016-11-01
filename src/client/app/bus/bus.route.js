(function() {
  'use strict';

  angular
    .module('app.bus')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'bus',
        config: {
          url: '/bus',
          templateUrl: 'app/bus/busview.html',
          controller: 'BusController',
          controllerAs: 'busvm',
          title: 'BUS',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Bus Search'
          }
        }
      }
    ];
  }
})();
