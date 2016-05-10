angular.module('blankenship')
  .config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "/app/views/home/home.view.html"
      })
      .state('blog', {
        url: "/blog",
        templateUrl: "/app/views/blog/blog.view.html"
      })
      .state('portfolio', {
        url: "/portfolio",
        templateUrl: "/app/views/portfolio/portfolio.view.html"
      })
      .state('resume', {
        url: "/resume",
        templateUrl: "/app/views/resume/resume.view.html"
      });
  });
