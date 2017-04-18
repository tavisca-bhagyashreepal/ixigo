function AppConfig($stateProvider, $urlRouterProvider, $qProvider) {
    'ngInject';
    $qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.otherwise('/home');
    /**
     * Ui router states
     */
};
export default AppConfig;
