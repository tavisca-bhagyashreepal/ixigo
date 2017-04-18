class HomeCtrl {

    constructor($rootScope, $scope, $stateParams, communication, $localStorage, $uibModal) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.$localStorage = $localStorage;
        this.$uibModal = $uibModal;
        this.communication = communication;
        this.lists =[];
    }

    $onInit() {
      this.lists = this.$localStorage.lists ? this.$localStorage.lists:[] ;
      this.showTitleInput = false;
      this.list =[];
      this.id=0;
      this.list[0]={
        title: '',
        id: this.id,
        cards:[]
      };
      this.communication.registerCallbackFunc(["elementMoved", "listDeleted"], this.refreshModuleBlock());
    }

    refreshModuleBlock(){
      let self = this;
      return(eventName, value)=>{
        if(eventName == "elementMoved"){
          self.lists = self.lists.map(( obj )=>{
               if(obj.id == value.toListId){
                 obj.cards.push(value.item);
               }
               return obj;
          });
          console.log(self.lists);
        }
        else if(eventName == "listDeleted"){
          self.deleteList(value);
        }
      }
    }

    AddList(){
      // this.$uibModal.open({
      //     animation: true,
      //     component: 'addListComponent',
      //     size: 'small',
      //     //backdrop: 'static',
      //     resolve: {
      //         callback: function () {
      //             return () => {
      //
      //             }
      //         }
      //     }
      // });
      this.list[this.id].id = this.id+1;
      this.lists.push(this.list[this.id++]);
      this.$localStorage.lists = this.lists;
      this.showTitleInput =false;
    }

    cancelList(){
      this.list[this.id].title='';
      this.showTitleInput = false;
    }

    deleteList(item){
      this.lists = this.lists.filter(( obj )=>{
          return obj.id !== item.id;
      });
      this.$localStorage.lists = this.lists;
    }
}


let homeObj = {
    bindings: {},
    templateUrl: './scripts/home/home.html',
    controller: HomeCtrl,
    controllerAs: 'home'
}

export default homeObj;
