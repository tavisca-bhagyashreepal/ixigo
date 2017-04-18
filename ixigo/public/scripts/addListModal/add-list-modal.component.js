class HomeCtrl {

    constructor($rootScope, $scope, $stateParams, communication, $localStorage, $uibModal) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.$localStorage = $localStorage;
        this.$uibModal = $uibModal;
        this.lists =[];
    }

    $onInit() {
      let self = this;
      this.lists = this.$localStorage.lists ? this.$localStorage.lists:[] ;
      this.$rootScope.$on('$stateChangeStart', () => {
        self.close({});
      });
    }

    createList(){
      this.lists.push({title: this.title, cards:[]});
      this.$localStorage.lists = this.lists;
    }

    closeModal() {
      this.close();
    }
}


let homeObj = {
    bindings: {
      close:'&',
      resolve: '<'
    },
    templateUrl: './scripts/home/home.html',
    controller: HomeCtrl,
    controllerAs: 'home'
}

export default homeObj;
