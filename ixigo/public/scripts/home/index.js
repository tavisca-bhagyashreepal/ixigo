let homeModule = angular.module('app.home', []);

// Include our UI-Router config settings
import homeConfig from './home.config';
homeModule.config(homeConfig);

// Controllers
import HomeComponent from './home.component';
homeModule.component('homeComponent',HomeComponent);

export default homeModule;
