import {Component,Inject} from "mangular/annotate";
import Template from "../template/phonesys";
import {Filter} from "mangular/annotate";
import {DataService} from "../services/data"


@Component('ciPhonesys',{
    template    : Template
})
class phonesysComponent {
    @Inject('$state')
    private state:any;
    @Inject('$scope')
    private scope:any;
    @Inject('$rootScope')
    private root:any;
    @Inject data:DataService;
    constructor(){
        this.scope.users = [{id:'aaa'},{id:'aa1'},{id:'aa2'},{id:'aa3'},
                            {id:'aaa'},{id:'aa1'},{id:'aa2'},{id:'aa3'},
                            {id:'aaa'},{id:'aa1'},{id:'aa2'},{id:'aa3'}];


    }
    refresh() {
        console.log('refresh was called');
        this.state.go(this.state.current, this.state.params);
    }

}

