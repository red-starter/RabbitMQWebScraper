RabbitMQ is a message broker. It accepts messages from producers and gives them to consumers. In between we can buffer, persist and even route the messages as we please.

The queue is inside RabbitMQ. Messages flow thorough and can only be stored inside a queue, which is a infinite buffer. Many producers can send data to a queue and many consumers can receive data from one queue.

The consumer, the broker and producer work in distributed systems. They do not have to necessarily live on the same machine.

Work queues are useful to avoid doing resource intensive task synchronously. We can encapsulate a task and send it to the queue,  a worker process running separately from our main application can grab the tasks off the queue and execute it. Moreover, we can run many workers at the same time and share the tasks between them.

RabbitMQ can use multiple protocols and has clients for many languages. This tutorial uses AMQP 0-9-1 protocol and the amqp.node client.
