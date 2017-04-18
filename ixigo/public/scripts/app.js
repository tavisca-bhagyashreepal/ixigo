import ngStorage from  'ngstorage';
import 'angular-ui-bootstrap';
import angular from 'angular';
import 'angular-ui-router';


import appConfig from './config/app.config';
import appRun from './config/app.run';
import appConst from './config/app.constant';

import './home';
// import './config/app.templates';
import './common';
//Components
import './list';

let required = [
  'ngStorage',
  'ui.bootstrap',
  'ui.router',
  'app.home',
  'app.common',
  'component.list'
]

window.app = angular.module('app', required);

angular.module('app').constant('AppConstants', appConst);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);
angular.bootstrap(document, ['app'], {
  strictDi: true
});
