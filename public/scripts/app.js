'use strict';

/* App Module */

var app = angular.module('docent', ['idxCtrls'])


app.factory('countUtil',function(){
  var util = {}
  // Backbone's logic
  util.CountModel = Backbone.Model.extend({
    defaults:{
      count:0,
    }
  });
  util.validateCount = function(count){
    count = parseInt(count)
    if(isNaN(count)) return 0;
    else return count;
  }
  return util;
});

app.directive('genericCount',['countUtil',function(util){
  return {
    restrict: 'A',
    link: function (scope, element) {
      var initCount = util.validateCount(scope.item.count);
      var countModel = new util.CountModel();
      countModel.set('count',initCount)
      var view = new Barista.Views.GenericCountView({
        el: element,
        label: scope.item.name,
        model: countModel,
        fg_color: '#0B609A',
        top_bar_color: 'blue',
        plot_height: 70,
        png: false
      });
      scope.$watch('item.count',function(newVal){
        countModel.set('count',util.validateCount(newVal));
      });
    }
  };
}]);
