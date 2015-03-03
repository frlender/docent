angular.module('idxCtrls', ["services"])
.controller('main',['$scope',function($scope) {
	var altData =  [
		{name:"InstA",
			counts:[{name:'a',count:98998},{name:'b',count:6665}]},
		{name:"InstB",
			counts:[{name:'de',count:77},{name:'ff',count:17}]}
		];
	$scope.groups = [
		{name:"InstA",
			counts:[{name:'a',count:98997},{name:'b',count:6}]},
		{name:"InstB",
			counts:[{name:'de',count:5},{name:'ff',count:7}]}
		];
	$scope.switchData = function(){
		$scope.groups = altData;
	}
	$scope.updateData = function(){
		for(i in _.range($scope.groups.length)){
			for(j in _.range($scope.groups[i].counts.length)){
				$scope.groups[i].counts[j].count = altData[i].counts[j].count;
			}
		}
	}
	$scope.removeItem = function(){
		$scope.groups[0].counts.shift();
	}
}]);
