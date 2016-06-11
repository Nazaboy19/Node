var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret,
});

console.log('this is loaded');
exports.twitterKeys = {
  consumer_key: 'oK4OBPKRpDpcBL6yKD8jYj0pa ',
  consumer_secret: 'YX2VI9Ak9YLjGjdLxWDjxTWbeSj6iDHGsfH22OfDgaga7I3AN9',
  access_token_key: '<input here>',
  access_token_secret: '<input here>',
}

