Overview
========

**Provesense** is a streamlined means to ingest, interpret, persist, and evolve import artifacts from sensor networks that produce significant volumes of data.  

An open standards-based, turn-key solution that maintains sensor data provenance with real-time persistence and retrieval of sensor stimuli, observations, timelines, and the intelligent generation/maintenance of rules, facts, and inferences.

It's a foundational framework providing the following high-level features:

- Highly configurable and capable of processing massive volumes of data out-of-the-box
- Mid/upper level standard vocabularies for representing all sensor-related data
- Extensible models to enable domain-specific customizations
- Simple and extensible API to obtain provenance-type data across all sensor networks
- Massive graph database scale-out

Technology Stack / Features
---------------------------
------------

Linked Data Standards
^^^^^^^^^^^^^^^^^^^^^
- **Semantic Sensor Network (SSN)**: https://www.w3.org/TR/vocab-ssn/, http://w3c.github.io/sdw/ssn/ 

    `"The Semantic Sensor Network Ontology (commonly known as "SSN" or sometimes "SSNO") is an OWL-2 DL ontology for describing sensors and the observations they make of the physical world. SSN is published in a modular architecture that supports the judicious use of "just enough" ontology for diverse applications, including satellite imagery, large scale scientific monitoring, industrial and household infrastructure, citizen observers, and Web of Things. SSN is described and examples of its use are given."`
   
- **W3C PROVenance Interchange Ontology (PROV-O)**: http://www.w3.org/TR/prov-o/

    `"The PROV Ontology (PROV-O) expresses the PROV Data Model [PROV-DM] using the OWL2 Web Ontology Language (OWL2) [OWL2-OVERVIEW]. It provides a set of classes, properties, and restrictions that can be used to represent and interchange provenance information generated in different systems and under different contexts. It can also be specialized to create new classes and properties to model provenance information for different applications and domains. The PROV Document Overview describes the overall state of PROV, and should be read before other PROV documents. "`

- **Time: An OWL ontology of Time**: http://www.w3.org/TR/owl-time

   `"The OWL-Time ontology is an OWL-2 DL ontology [owl2-direct-semantics] of temporal concepts, for describing the temporal properties of resources in the world or described in Web pages. The ontology provides a vocabulary for expressing facts about topological relations among instants and intervals, together with information about durations, and about temporal position including date-time information. "`

API
^^^
RESTful Web Service (built on http://sparkjava.com/ framework) with back-end integration via standard SPARQL interfaces using Jena ARQ - an RDF database agnostic approach. 

 - Provides API to obtain rules, sensor tasking, and reasoning data (ie. Ask about generation depth, ancestral roots, etc)

Ingestion
^^^^^^^^^
Commonly used tools for importing large volumes of data, coupled w/ the ELK stack to provide Kibana visualizations of important ingestion statistics.

 - Kafka: https://kafka.apache.org/
 - Spark Streaming: http://spark.apache.org/streaming/

Persistence
^^^^^^^^^^^
Currently configured to use the highly-scalable **Blazegraph** RDF database - https://www.blazegraph.com/

    `"Blazegraph has discovered a way to exploit the main-memory bandwidth advantages of GPUs to provide extreme scaling that is 100s of times faster and 40X more affordable, 10,000X faster than disk-based, and 100s of times faster CPU main memory-based approaches."` 

Visualization
^^^^^^^^^^^^^
   - LODmilla (Linked Open Data)milla – https://github.com/scambria/LODmilla-frontend
    - http://localhost:9999
   - Kibana Graphs – Using ELK 5.0 to persist and visualize logs: https://www.elastic.co/
    - http://localhost:5601
   - Spark Master/Workers/Apps  
    - http://localhost:8080/
   - Spark Provesense Ingestion Jobs
    - http://localhost:4040/jobs/
   - Blazegraph UI 
    - http://localhost:9090/blazegraph

Logging
^^^^^^^
ELK stack leveraged to capture, store, and visualize important system and application-level logs, including the spark ingestion framework, the provesense web service, the rules and alerting framework, and the blazegraph database.

 - Visualizations include graphs providing insight into:
   - Sensor types
   - Observed events
   - Entity/Activity/Sensor timelines

Deployment
^^^^^^^^^^
- All components dockerized and orchestrated using docker-compose

Support
^^^^^^^
- Examples provided are based on the open source application Traptor - a distributed scraper for twitter

TODO
----

Validation
^^^^^^^^^^
Implementation in API and Ingestion

VIZ
^^^
Update LODmilla to use provesense API and/or the blazegraph sparql endpoint directly

Rule-based Reasoning/Alerting
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Rules stored in redis and periodically (http://redis.io/topics/notifications) executed against blazegraph
   - incremental stream reasoning - http://www.larkc.org/wp-content/uploads/2008/01/2010-Incremental-Reasoning-on-Streams-and-Rich-Background-Knowledge.pdf
   - periodic dbpedia/gdelt lookup for event, etc data (https://dbpedia.org/sparql)
   - notifications to provided endpoint (ie. slack channel)
   