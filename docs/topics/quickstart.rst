Quickstart
==========

Dependencies
------------
To run provesense, you will need 

 - Docker and Docker Compose - https://docs.docker.com/compose/install/
 - Git client - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

Download, Install, and Run
--------------------------

- Download the code from github: 

::

   git clone https://github.com/scambria/provesense.git

- Build and run the code w/ docker compose:

::

   docker-compose up --build -d

- Confirm all of the services have started. Note - `provesense_provesense_1` will exit in a few seconds - this is normal and expected. It is only used to bootstrap blazegraph. 

::

   docker-compose ps

- Expected results:

::

      provesense_blazegraph_1             /home/blazegraph/scripts/s ...      Up                                  0.0.0.0:9999->9999/tcp            
      provesense_elasticsearch_1          /docker-entrypoint.sh elas ...      Up                                  0.0.0.0:9200->9200/tcp,           
                                                                                                                  0.0.0.0:9300->9300/tcp            
      provesense_kafka_1                  supervisord -n                      Up                                  0.0.0.0:2181->2181/tcp,           
                                                                                                                  0.0.0.0:9092->9092/tcp            
      provesense_kibana_1                 /docker-entrypoint.sh kibana        Up                                  0.0.0.0:5601->5601/tcp            
      provesense_lodmilla_1               httpd-foreground                    Up                                  0.0.0.0:9998->80/tcp              
      provesense_logstash_1               /docker-entrypoint.sh logs ...      Up                                  0.0.0.0:5000->5000/tcp            
      provesense_master_1                 bin/spark-class org.apache ...      Up                                  0.0.0.0:4040->4040/tcp,           
                                                                                                                  0.0.0.0:6066->6066/tcp, 7001/tcp, 
                                                                                                                  7002/tcp, 7003/tcp, 7004/tcp,     
                                                                                                                  7005/tcp, 7006/tcp,               
                                                                                                                  0.0.0.0:7077->7077/tcp,           
                                                                                                                  0.0.0.0:8080->8080/tcp            
      provesense_provesense-api_1         /usr/local/bin/mvn-entrypo ...      Up                                  0.0.0.0:4567->4567/tcp            
      provesense_provesense_1             /bin/sh -c python bootstrap.py      Up                                                                    
      provesense_worker1_1                bin/spark-class org.apache ...      Up                                  7012/tcp, 7013/tcp, 7014/tcp,     
                                                                                                                  7015/tcp, 7016/tcp,               
                                                                                                                  0.0.0.0:8081->8081/tcp, 8881/tcp  
      provesense_worker2_1                bin/spark-class org.apache ...      Up                                  7012/tcp, 7013/tcp, 7014/tcp,     
                                                                                                                  7015/tcp, 7016/tcp,               
                                                                                                                  0.0.0.0:8082->8081/tcp, 8881/tcp  
      provesense_worker3_1                bin/spark-class org.apache ...      Up                                  7012/tcp, 7013/tcp, 7014/tcp,     
                                                                                                            0.0.0.0:8083->8081/tcp, 8881/tcp  

- Submit the spark streaming job on the master node: 

::

   docker-compose exec master ./bin/spark-submit --jars ./jars/spark-streaming-kafka-0-8-assembly_2.11-2.1.0-SNAPSHOT.jar python/direct_stream.py kafka:9092 provesense.inbound &

- Wait ~30 seconds to ensure the spark job startup has completed. Then, if desired, start the `kafka_producer` to begin generating mock sensor and tasking data. 

::

   docker-compose exec master python python/kafka_producer.py &

- Data is streaming into blazegraph when executing the following curl request several times yields a higher count value: 

::

   curl http://localhost:4567/provesense

- Result should look like: 

::

   {
     "head": {
       "vars": [ "count" ]
     } ,
     "results": {
       "bindings": [
         {
           "count": { "type": "literal" , "datatype": "http://www.w3.org/2001/XMLSchema#integer" , "value": "12763" }
         }
       ]
     }
   }
   
