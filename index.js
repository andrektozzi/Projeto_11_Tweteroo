import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

const users = [
    {
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }    
];

const tweets = [
    {
        username: "bobesponja",
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
        tweet: "eu amo o hub"
    }
];

server.post("/sign-up", (req, res) => {
    const user = req.body
    users.push(user);
    res.send("OK");
});

server.post("/tweets", (req, res) => {
    const user = {};
    user.username = req.body.username;
    user.avatar = users.find(user => user.username === req.body.username).avatar;
    user.tweet = req.body.tweet;
    tweets.push(user);
    res.send("OK");
});

server.get("/tweets", (req, res) => {
    let lastTweets;
    if(tweets.length > 10) {
        lastTweets = tweets.slice(tweets.length - 10);
    } else {
        lastTweets = tweets;
    }
    res.send(lastTweets);
});

server.listen(5000);
