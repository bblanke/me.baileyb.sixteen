angular.module("blankenship")
  .config(function($mdThemingProvider) {
    var themes = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey"];
    themes.sort( function() { return 0.5 - Math.random() } );
    $mdThemingProvider.theme('default')
      .primaryPalette(themes[0])
      .accentPalette(themes[1]);
    });
