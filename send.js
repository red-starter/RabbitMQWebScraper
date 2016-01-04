#!/usr/bin/env node

var amqp = require('amqplib/callback_api');


function getMovieByIndes(index){
	index = 350000+index
	return 'http://www.imdb.com/title/tt0'+index
}

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'movieUrls';

    ch.assertQueue(q, {durable: false});

    for (var i = 0; i < 100; i++) {
    	var urlString = getMovieByIndes(i);
    	ch.sendToQueue(q, new Buffer(urlString));
	    console.log("Sent "+urlString);
    };
  });
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});