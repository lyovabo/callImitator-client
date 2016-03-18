export default `
        <md-toolbar layout="row" layout-align="center center" class="sub-toolbar" >
            Call Imitation system
        </md-toolbar>

    <md-content layout="row" layout-wrap layout-align="left" >
        <div flex="40" layout-padding>
            <md-toolbar layout="row" layout-align="center center" class="sub-toolbar">
                     Agents
            </md-toolbar>
            <md-grid-list   md-cols="1" md-cols-sm="2" md-cols-md="3" md-cols-gt-md="6"
        md-row-height-gt-md="1:1" md-row-height="4:3"
        md-gutter="8px" md-gutter-gt-sm="4px">
                <md-grid-tile ng-repeat="agent in $ctrl.scope.users track by $index" ng-class="'offline agent'"  layout-align="center center">
                       <md-icon>person</md-icon>
                </md-grid-tile>
            </md-grid-list>
        </div>
        <div flex="40" layout-padding>
          <md-toolbar layout="row" layout-align="center center" class="sub-toolbar">
                     Clients
            </md-toolbar>
            <md-grid-list   md-cols="1" md-cols-sm="2" md-cols-md="3" md-cols-gt-md="6"
        md-row-height-gt-md="1:1" md-row-height="4:3"
        md-gutter="8px" md-gutter-gt-sm="4px">
                <md-grid-tile ng-repeat="agent in $ctrl.scope.users track by $index" ng-class="'offline agent'"  layout-align="center center">
                       <md-icon>person</md-icon>
                </md-grid-tile>
            </md-grid-list>
        </div>
        <div flex="20" layout-padding>
            <md-toolbar layout="row" layout-align="center center" class="sub-toolbar" >
                    Call information
            </md-toolbar>
        </div>

    </md-content>
`;

