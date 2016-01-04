#!/usr/bin/env node

var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var processAndWrite = function(error, response, html){
	console.log(html,error)
	if(!error){
		var $ = cheerio.load(html);

		var title, release, rating;
		var json = { title : "", release : "", rating : ""};

		$('.header').filter(function(){
	        var data = $(this);
	        title = data.children().first().text();
	        release = data.children().last().children().text();

	        json.title = title;
	        json.release = release;
        })

        $('.star-box-giga-star').filter(function(){
        	var data = $(this);
        	rating = data.text();

        	json.rating = rating;
        })
        console.log(json)
	
		fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
	    	console.log('File successfully written! - Check your project directory for the output.json file');
	    })
	}
}
request('http://www.imdb.com/title/tt1229340/',processAndWrite)

var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'movieUrls';

    ch.assertQueue(q, {durable: false});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
    	request(er,msg,processAndWrite)
      console.log(" [x] Received %s", msg.content.toString());
    }, {noAck: true});
  });
});