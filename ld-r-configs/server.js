//important: first value in the array is considered as default value for the property
//this file is visible to the server-side
export default {
    serverPort: [4000],
    sparqlEndpoint: {
        'generic': {
            host: 'blazegraph', port: 9999, path: '/blazegraph/sparql', endpointType: 'blazegraph', graphName: 'default'
        },
        'http://provesense.org/vocabulary': {
            host: 'blazegraph', port: 9999, path: '/blazegraph/sparql', endpointType: 'blazegraph', graphName: 'default'
	},
        //Note: if graphName is not specified, the identifer used for configuration will be used as graphName
        //Example config for connecting to a Stardog triple store
        'http://localhost:5820/testDB/query': {
            host: 'localhost', port: 5820, path: '/testDB/query', graphName: 'default', endpointType: 'stardog', useReasoning: 1
        },
        //Example for connecting to a Virtuoso triple store
        'http://live.dbpedia.org/sparql': {
            host: 'live.dbpedia.org', port: 80, path: '/sparql', graphName: 'default', endpointType: 'virtuoso'
        },
        //Example for connecting to a ClioPatria triple store
        'http://localhost:3020/sparql/': {
            host: 'localhost', port: 3020, path: '/sparql/', endpointType: 'ClioPatria'
        }
    },
    dbpediaLookupService: [
        { host: 'lookup.dbpedia.org' }
    ],
    //it is used only if you enabled recaptcha feature for user authentication
    //get keys from https://www.google.com/recaptcha
    googleRecaptchaService: {
        siteKey: ['put your google recaptcha site key here...'],
        secretKey: ['put your google recaptcha secret key here...']
    }
};
