
import Angular from "mangular/annotate";
import {Config} from "mangular/annotate";
import {Run} from "mangular/annotate";
import {Inject} from "mangular/annotate";
import {Value} from "mangular/annotate";

import "mangular/angular/material";
import "mangular/angular/ui-router";
import "mangular/angular/table";


import "./components/phonesys";

class MyApp {
    @Value
    static config = {
        api : {
            url : 'ws://localhost:3001/'
        }
    };

    @Config
    static setup (
        @Inject('$urlRouterProvider')   $urlRouterProvider,
        @Inject('$stateProvider')       $stateProvider,
        @Inject('$mdThemingProvider')   $mdThemingProvider
    ){

        $urlRouterProvider.otherwise('/phonesys');
        $stateProvider
            .state('phoneSys',{
                url         : '/phonesys',
                template    : `<ci-phonesys></ci-phonesys>`,
                data        : {
                    title   : 'phonesys'
                }
            })

        this.config.api.url = `ws://${window.location.host}/admin`;
    }

    @Run
    static run(
        @Inject('$rootScope') rootScope,
        @Inject('$state') $state
        //@Inject api:ApiService
    ){
        console.log('index');
        rootScope.title = "None";
        rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            rootScope.title = toState.data.title||"No Title";
            //if(toState.data.access == 'AUTHORIZED' &&  !rootScope.globals.currentUser){
            //    $state.go('/login');
            //}
            //if(toState.data.access =='UNAUTHORIZED' &&  rootScope.globals.currentUser){
            //    $state.go(fromState.name);
            //}
        });
    }

}


Angular.start('client/index');

