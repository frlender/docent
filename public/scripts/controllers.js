angular.module('idxCtrls', ["services"])
.controller('main',['$scope','initialize',function($scope,initialize) {
	var altData =  [
		{name:"Oregon Health and Science University",
			counts:[{name:'a',count:98998},{name:'b',count:6665}]},
		{name:"Broad Institute Transcriptomics",
			counts:[{name:'de',count:77},{name:'ff',count:17}]}
		];
	initialize.then(function(groups){
		$scope.groups = groups;
	});
	// $scope.groups = [
	// 	{name:"Oregon Health and Science University",
	// 		counts:[{name:'a',count:98997},{name:'b',count:6}]},
	// 	{name:"Broad Institute Transcriptomics",
	// 		counts:[{name:'de',count:5},{name:'ff',count:7}]}
	// 	];
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
