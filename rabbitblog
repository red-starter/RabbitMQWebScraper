Web scraping with work queues (using the amqp.node client)

RabbitMQ is a message broker. It accepts messages from producers and gives them to consumers. In between we can buffer, persist and even route the messages as we please. 

The queue is insde RabbitMQ. Messages flow throough and can only be stored inside a queue, which is a infinite buffer. Many producers can send data to a queue and many consumers can recieve datat from one queue. 

The consumer, the broker and producer work in distrubuted systems. They do not have to necessarily live on the same machine.

Work queues are usefule to avoid doin resource intensice taks sychrnously. We can enapsulate a task and send it to the queue,  a worker process running seperately from our main appplicaiton can grab the taks off the queue and execute it. Mroeover, we can run many workers at the same time and share the tasks between them. 

The amqp.node client library

RabbitMQ speaks multiple protocols and has clients for many languages. This tutorial uses AMQP 0-9-1 protocol and the amqp.node client.

Install amqp.node using npm:

$ npm install amqplib

-gave a producer that adds strings - wikipedia entries to a queue
- workers send off an http request to the host and write down info to a file
