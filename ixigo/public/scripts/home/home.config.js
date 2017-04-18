function HomeConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/home',
            //abstract: true,
            views: {
                mainview: {
                    template: '<home-component class="fully-occupy initial-style-abs" ></home-component>'
                }
            }
        });
}
export default HomeConfig;
