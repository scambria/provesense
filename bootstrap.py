#import sparql
import os
import time
import sparql as SQ
import requests
import json
from pymantic import sparql
from SPARQLWrapper import SPARQLWrapper, JSON

if __name__ == "__main__":
    q = 'ASK { ?s ?p ?o }'
    print 'bootstrapping provesense... - ', q
    endpoint = os.getenv('SPARQL_ENDPOINT', 'http://blazegraph:9999/blazegraph/sparql')
    while True:   
        try: 
            bootstrapped = SQ.query(endpoint, q)     
            server = sparql.SPARQLServer(endpoint) 
            if not bootstrapped.hasresult():
                server.update('load <file:///tmp/bootstrap/prov-o.ttl>')                         
                server.update('load <file:///tmp/bootstrap/ssn.ttl>')         
                server.update('load <file:///tmp/bootstrap/time.ttl>')                         
                server.update('load <file:///tmp/bootstrap/provesense-bootstrap.ttl>')                                         
#                server.update('load <file:///tmp/blazegraph/sao.ttl>')                
            break
         
        except: 
            pass
 
        time.sleep(2)
