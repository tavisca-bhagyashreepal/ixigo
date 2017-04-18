let listModule = angular.module('component.list', []);

// Controllers
import listComponent from './list.component';
listModule.component('listComponent',listComponent);

import listElementComponent from './list-element.component';
listModule.component('listElementComponent', listElementComponent);

export default listModule;
