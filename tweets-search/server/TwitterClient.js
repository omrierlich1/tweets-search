class TwitterClient {
    constructor() {
        const Twitter = require('twitter');
        this.client = new Twitter({
            consumer_key: "bK071bupMhwYDKctSc38cI4fL",
            consumer_secret: "hlgM5yQMDa02lOoKRw7vmRLuWXY644BQG37kSdX4ANrpNHt01J",
            access_token_key: "1016249613710516224-fig4PflPKi3ioJG6mywAfr9QrP4TJz",
            access_token_secret: "wClhlrI3pWLCKJ3a7O5s75siBMLeYPIOId2Dvod7IwKng"
        });
    }

    search(params) {
        return this.client.get('search/tweets', params)
    }
}

module.exports = TwitterClient