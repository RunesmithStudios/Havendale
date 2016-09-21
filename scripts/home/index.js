
import angular from 'angular'
import uirouter from 'angular-ui-router/release/angular-ui-router.js'

import routing from 'home.routes.js'
import HomeCtrl from 'home.controller.js'

import { altBrackets } from 'app.config'

export default
angular.module('havendale.home', [uirouter])
    .config(routing)
    .config(altBrackets)
    .controller('HomeCtrl', HomeCtrl)
    .name;
