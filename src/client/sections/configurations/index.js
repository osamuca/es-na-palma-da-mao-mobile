import 'angular-ui-router';
import angular from 'angular';

import './configurations.css!';
import ConfigurationsController from './configurations.controller';
import configurationsRoutes from './configurations.routes';

const dependencies = [
    'ui.router'
];

export default angular.module( 'configurations-state', dependencies )
                      .controller( 'configurationsController', ConfigurationsController )
                      .config( configurationsRoutes );




