import express from 'express';
import schema  from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
    res.send("GraphQL is amazing");
});

const root = { friend: () => {
    return {
        "id" : 21423424,
        "firstName" : "Sedrick",
        "lastName" : "Strozier",
        "gender" : "Male",
        "email" : [
             {email: "slstrozier@gmail.com"}, 
             {email: "sstrozier@riskalyze.com"}
        ]
    }
}};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));