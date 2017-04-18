let listModalModule = angular.module('component.listModal', []);

// Controllers
import addListModalComponent from './add-list-modal.component';
listModalModule.component('addListModalComponent',addListModalComponent);

export default listModalModule;
