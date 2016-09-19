
import angular from 'angular'
import uirouter from 'angular-ui-router/release/angular-ui-router.js'

import routing from 'home.routes.js'
import HomeCtrl from 'home.controller.js'

export default
angular.module('havendale.home', [uirouter])
    .config(routing)
    .controller('HomeCtrl', HomeCtrl)
    .name;
