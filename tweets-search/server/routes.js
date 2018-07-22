const TwitterClient  = require('./TwitterClient');
const twitter_client = new TwitterClient();

module.exports = (app) =>{
    app.get('/twitter/search', function (req, res) {
        console.log(req.query)
        twitter_client.search(req.query)
            .then((tweets) =>{
                tweets = tweets.statuses.map((tweet) => {
                    return {user_name:tweet.user.name ,
                      text:tweet.text ,
                      created_at:tweet.created_at,
                      retweet_count:tweet.retweet_count,
                      profile_image_url: tweet.user.profile_image_url? tweet.user.profile_image_url: ""}

                });
                res.send(tweets)
            })
            .catch((error) =>{
                res.status(500).send(error)
            })

    })
    app.get('/twitter/get_languages', function (req, res) {
        const ISO6391 = require('iso-639-1');
        res.send(ISO6391.getLanguages(ISO6391.getAllCodes()));
    })
}