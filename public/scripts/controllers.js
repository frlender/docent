angular.module('idxCtrls', ["services"])
.controller('main',['$scope',function($scope) {
	$scope.groups = [
		{name:"InstA",
			counts:[{name:'a',count:5},{name:'b',count:6}]},
		{name:"InstB",
			counts:[{name:'de',count:5},{name:'ff',count:7}]}
		];
}]);
