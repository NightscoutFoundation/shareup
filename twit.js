const Twit = require('twit');

const T = new Twit({
  consumer_key:         process.env.BOT_CONSUMER_KEY,
  consumer_secret:      process.env.BOT_CONSUMER_SECRET,
  access_token:         access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret:  process.env.BOT_ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

// var phraseArray = [ "hey twitter",
//                     "im tweeting",
//                     "tweet tweet",
//                     "tweetstorm time... 1/22",
//                     "plz RT v important",
//                     "delete ur account",
//                     "it me",
//                     "same",
//                     "#dogpants go on 4 legs!!",
//                     "#thedress is blue and black" ];
// function chooseRandom(myArray) {
//   return myArray[Math.floor(Math.random() * myArray.length)];
// }
// var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);
// Bot.tweet(phrase);
//



//
//  tweet 'hello world!'
//

module.exports = {
  tweet: () => {
    T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
      console.log(data)
    })
  }
}
