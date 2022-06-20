import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const users = [];
const tweets = [];

server.post("/sign-up", (req, res) => {
    const {username, avatar } = req.body

    if(!username || !avatar) {
        res.status(400).send("Todos os campos são obrigatórios");
    }

    users.push({ username, avatar});
    res.sendStatus(201);
});

server.post("/tweets", (req, res) => {
    const userTweet = req.body
    const infoTweet = {username: userTweet.username, avatar: users.avatar, tweet: userTweet.tweet}
    tweets.push(infoTweet);
    res.send("OK");
});

server.get("/tweets", (req, res) => {
    const lastTweets = tweets.reverse();
    res.send(lastTweets.slice(0,10));
});

server.get("/tweets/:user", (req, res) => {
    const { username } = req.params;
    const tweetsUser = tweets.filter((tweet) => tweet.username === username);
    res.send(tweetsUser);
});

server.listen(5000);
