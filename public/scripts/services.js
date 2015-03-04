var services = angular.module('services', [])
.factory('mapProvider',[function(){
  return {
  	'centers':{
  		'nameKey':'centerName',
  		'countName':{
			antibodyCount: "Antibodies",
			celllineCount: "Cell Lines",
			differentiatedcellCount: "Differentiated Cell Lines",
			geneCount: "Genes",
			ipscCount: "iPSCs",
			kinaseCount: "Kinases",
			phosphoproteinCount: "Phosphoprotein ",
			primarycellCount: "Primary Cell Lines",
			proteinCount: "Proteins",
			rnaiCount: "RNAis",
			smallmoleculeCount: "Small Molecules",
			assayCount: "Assays",
			cdnaCount: "cDNAs",
			shrnaCount: "shRNAs"
  		},
  		'meta':{
  			"Arizona State Universtity, Cellarium":{color:"#990033"},
  			"Broad Institute, Center for the Science of Therapeutics":{color:"#0B609A"},
  			"Broad Institute, LINCS Center Proteomic Characterization Center for Signaling and Epigenetics":
  			{color:"#0B609A"},
  			"Broad Institute, LINCS Center for Transcriptomics":{color:"#0B609A"},
  			"Columbia University Health Sciences":{color:"#c4d8e2"},
  			"Harvard Medical School, HMS LINCS":{color:"#C90016"},
  			"Icahn School of Medicine at Mount Sinai, Drug Toxicity Signature Generation Center":
  			{color:"#00AAED"},
  			"Oregon Health and Science University, MEP LINCS":{color:"#66cc33"},
  			"University of California, Irvine  NeuroLINCS":{color:"#ffd200"},
  			"Yale University":{color:"#0F4D92"}
  		}
  	}
  }
}])
.factory('transform',['mapProvider',function(mapProvider){
	return function(inputGroups,mapKey){
		var map = mapProvider[mapKey];
		var nameKey = map.nameKey;
		var groups = _.map(inputGroups,function(inputGroup){
			var group = {};
			var groupName = inputGroup[nameKey]
			group.name = groupName;
			group.color = map.meta[groupName].color;
			group.counts = [];
			for(var key in inputGroup){
				if(key!=nameKey){
					var count = {};
					count.name = map.countName[key];
					count.count = inputGroup[key];
					group.counts.push(count);
				}
			}
			return group;
		});
		return groups;
	}
}])
.factory('initialize',['transform','$q','$http',
	function(transform,$q,$http){

	var deferred = $q.defer();
	var url = "http://life.ccs.miami.edu/life/api/centerview?searchTerm=*:*&minCount=1"
	$http.get(url)
		.success(function(inputGroups){
			var key = 'centers';
			var groups = transform(inputGroups[key],key);
			deferred.resolve(groups);
	});

	return deferred.promise;
}]);
