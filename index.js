import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    const user = req.body
    users.push(user);
    res.send('OK');
});

server.post('/tweets', (req, res) => {
    const user = req.body
    const tweet = {
        username: user.username,
        tweet: user.tweet
    }
    tweets.push(tweet);
    res.send('OK');
});

server.get('/tweets', (req, res) => {
    if(tweets.length < 10) {
        res.send(tweets);
    } else {
        const lastTweets = tweets.slice(-10)
        res.send(lastTweets);
    }
});

server.listen(5000);