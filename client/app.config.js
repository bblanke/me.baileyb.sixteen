angular.module("blankenship")
  .config(function($mdThemingProvider) {
    var themes = [["teal", "amber"], ["blue", "pink"], ["pink", "blue"], ["brown", "lime"], ["indigo", "deep-orange"], ["indigo", "red"], ["red", "blue"], ["blue-grey", "amber"], ["cyan", "yellow"]];
    var index = Math.floor(Math.random() * (themes.length));
    $mdThemingProvider.theme('default')
      .primaryPalette(themes[index][0])
      .accentPalette(themes[index][1]);
    });
