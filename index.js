import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
    const user = req.body
    users.push(user);
    res.send("OK");
});

server.post("/tweets", (req, res) => {
    const user = req.body
    const tweet = {
        username: user.username,
        tweet: user.tweet
    }
    tweets.push(tweet);
    res.send("OK");
})

server.listen(5000);
