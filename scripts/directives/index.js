import angular from 'angular'

import navbar from 'directives/navbar'
import { altBrackets } from 'app.config'

export default
angular.module('havendale.directives', [])
    .config(altBrackets)
    .directive('navbar', navbar)
    .name
