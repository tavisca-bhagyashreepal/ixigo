class ListElementCtrl {

    constructor($rootScope, $scope, $stateParams, communication, $localStorage) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.communication = communication;
        this.$localStorage = $localStorage;
    }

    $onInit() {
        console.log(this.item);
        this.isEditable = false;
        this.selectedItem = this.$localStorage.lists.length>1 && this.listId!=this.$localStorage.lists[0].id ? this.$localStorage.lists[0].id :this.$localStorage.lists[1].id;
    }

    editCard(){
      this.isEditable = !this.isEditable;
    }

    deleteCard(){
      this.communication.notifyChange("elementDeleted", this.item);
    }

    moveCard(){
      this.communication.notifyChange("elementMoved", {item: this.item, toListId: this.selectedItem, fromListId: this.listId})
    }
}


let listElementObj = {
    bindings: {
      item:'<',
      listId:'<'
    },
    templateUrl: './scripts/list/list-element.html',
    controller: ListElementCtrl,
    controllerAs: 'listElement'
}

export default listElementObj;
