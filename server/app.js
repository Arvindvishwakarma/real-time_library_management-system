const express = require("express");


const graphqlHTTP = require('express-graphql').graphqlHTTP;

const schema = require("./schema/schema")

const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());


mongoose.connect('mongodb+srv://arvind2588:12345@cluster0.maocg.mongodb.net/gql?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connection.once('open',()=>{
    console.log("connected to datbse");
});
0
app.use("/graphql",graphqlHTTP({
     schema,
     graphiql:true
}));


app.listen(4000,()=>{
    console.log("server is runnning ");
});