services.factory('mapProvider',[function(){
  // countName is generic for both center view and assay view
  return {
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
  	'centers':{
  		'nameKey':'centerName',
  		'meta':{
  			"Arizona State Universtity, Cellarium":{color:"#990033"},
  			"Broad Institute, Center for the Science of Therapeutics":{color:"#0B609A"},
  			"Broad Institute, LINCS Center Proteomic Characterization Center for Signaling and Epigenetics":
  			{color:"#0B609A"},
  			"Broad Institute, LINCS Center for Transcriptomics":{color:"#0B609A"},
  			"Columbia University Health Sciences":{color:"#c4d8e2"},
  			"Harvard Medical School, HMS LINCS":{color:"#C90016"},
  			"Icahn School of Medicine at Mount Sinai, Drug Toxicity Signature Generation Center":
  			{color:"#D80B8C"},
  			"Oregon Health and Science University, MEP LINCS":{color:"#66cc33"},
  			"University of California, Irvine  NeuroLINCS":{color:"#ffd200"},
  			"Yale University":{color:"#0F4D92"}
  		}
  	},
    'assays':{
      'nameKey':'assayName',
      'meta':{
        "Apoptosis assay":{center:"Harvard Medical School, HMS LINCS"},
        "Cell cycle state assay":{},
        "Cell growth inhibition assay":{},
        "Cell signal response assay":{},
        "Cell viability assay":{},
        "Cellarium single cell metabolic profiling assay":{center:"Arizona State Universtity, Cellarium"},
        "Cue signal response assay":{},
        "Drug synergy assay":{},
        "Dynamic ERK signaling single cell imaging assay":{},
        "KINOMEscan assay":{},
        "KiNativ assay":{},
        "L1000 gene expression profiling assay":{center:"Broad Institute, LINCS Center for Transcriptomics"},
        "Multiplex cytological profiling assay":{},
        "P100 phosphoprotein profiling assay":{center:"Broad Institute, LINCS Center Proteomic Characterization Center for Signaling and Epigenetics"},
        "Proteomics cell state profiling assay":{},
        "Single cell protein secretion profiling assay":{}
      }// end of assays.meta
    } // end of assays
  } // end of return
}])