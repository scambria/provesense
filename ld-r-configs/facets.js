export default {
    facets: {
        'generic': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {
            }
        },
        'http://provesense.org/vocabulary': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'http://purl.oclc.org/NET/ssnx/ssn#observedBy',
                'http://www.w3.org/ns/prov#wasAttributedTo',
                'http://www.w3.org/ns/prov#wasAssociatedWith', 'http://www.w3.org/ns/prov#generated',
                'http://www.w3.org/ns/prov#used', 'http://www.w3.org/ns/prov#qualifiedGeneration',
                'http://www.w3.org/ns/prov#activity', 'http://www.w3.org/ns/prov#wasInfluencedBy',
                'http://www.w3.org/ns/prov#wasGeneratedBy', 'http://www.w3.org/ns/prov#actedOnBehalfOf',
                'http://purl.oclc.org/NET/ssnx/ssn#observes', 'http://provo.ssn.org/provesense#taskType',
                'http://www.w3.org/ns/prov#entityInfluence'
            ],
            config: {
               'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': 
                {
                    label: ['Data Type']
                },
               'http://purl.oclc.org/NET/ssnx/ssn#observedBy': {
                    label: ['Observation by Sensor']
                },
               'http://www.w3.org/ns/prov#wasAttributedTo': {
                    label: ['Observation by Task']
                },
               'http://www.w3.org/ns/prov#wasAssociatedWith': {
                    label: ['Task by Agent']
                },
               'http://purl.oclc.org/NET/ssnx/ssn#wasInfluencedBy': {
                    label: ['Task Generation']
                },
               'http://www.w3.org/ns/prov#actedOnBehalfOf': {
                    label: ['Sensors by Task']
                },
               'http://purl.oclc.org/NET/ssnx/ssn#observes': {
                    label: ['Modality by Sensor']
                },
               'http://www.w3.org/ns/prov#activity': {
                    label: ['Activity']
                }
            }
        },
        //Configuration Manager: change the graph name if you use another name in your general.js config
        'http://ld-r.org/configurations': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType'
            ],
            config: {
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset': {
                    shortenURI: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope': {
                    objectIViewer: ['BasicOptionView'],
                    options: [
                        {label: 'Dataset', value: 'D'},
                        {label: 'Resource', value: 'R'},
                        {label: 'Property', value: 'P'},
                        {label: 'Dataset-Resource', value: 'DR'},
                        {label: 'Dataset-Property', value: 'DP'},
                        {label: 'Resource-Property', value: 'RP'},
                        {label: 'Dataset-Resource-Property', value: 'DRP'},
                    ]
                }
            }
        },
        //Example Faceted Browser for DBpedia universities
        'http://live.dbpedia.org/sparql': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'http://dbpedia.org/ontology/country', 'http://dbpedia.org/property/established'
            ],
            config: {
                'http://dbpedia.org/property/established': {
                    label: ['Established Year']
                }
            }
        }
    }
};
