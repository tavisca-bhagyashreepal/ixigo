class ListCtrl {

    constructor($rootScope, $scope, $stateParams, communication) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.communication = communication;
    }

    $onInit() {
        console.log(this.item);
        this.card=[];
        this.id = 0;
        this.card[this.id] ={
          id:'',
          title:'',
          description:'',
          username:'',
          status:''
        };
        this.showTitleInput =false;
        this.isEditable= false;
        this.communication.registerCallbackFunc(["elementDeleted","elementMoved"],this.refreshModuleBlock());
    }

    refreshModuleBlock(){
      let self = this;
      return(eventName, value)=>{
        if(eventName == "elementDeleted"){
          self.item.cards = self.item.cards.filter(( obj )=>{
              return obj.id !== value.id;
          });
        }
        else if(eventName =="elementMoved"){
          if(self.item.id == value.fromListId){
            self.item.cards = self.item.cards.filter(( obj )=>{
                return obj.id !== value.item.id;
            });
          }
        }
      }
    }

    clickAddCard(){
      this.showTitleInput=! this.showTitleInput;
      this.id++;
    }

    AddCard(){
      this.card[this.id].id = this.item.id+""+this.id;
      this.item.cards.push(this.card[this.id]);
      this.showTitleInput =false;
    }

    cancelCard(){
      this.item[this.id]= {
        id:'',
        title:'',
        description:'',
        username:'',
        status:''
      };
      this.showTitleInput = false;
    }

    deleteList(){
      this.communication.notifyChange("listDeleted", this.item);
    }
}


let listObj = {
    bindings: {
      item:'<'
    },
    templateUrl: './scripts/list/list.html',
    controller: ListCtrl,
    controllerAs: 'list'
}

export default listObj;
