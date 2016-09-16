/*
    Main App file.
*/

import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from 'config'

angular.module('app', [uirouter])
    .config(routing)
