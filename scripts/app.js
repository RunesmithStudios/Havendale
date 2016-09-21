/*
    Main App file.
*/

import angular from 'angular'
import uirouter from 'angular-ui-router/release/angular-ui-router.js'

import directives from 'directives'
import routing from 'app.routes'
import home from 'home'

angular.module('havendale', [uirouter, home, directives])
    .config(routing)
