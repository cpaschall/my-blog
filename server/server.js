const express = require("express");
// const { ApolloServer } = require("apollo-server-express");
// const path = require("path");
// const { authMiddleware } = require('./utils/auth');

// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');

// const PORT = process.env.PORT  || 3001;

// Using express-graphql
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

// Apollo server setup

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware,
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// if ( process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'))
// });

// const startApolloServer = async (typeDefs, resolvers) => {
//     await server.start();
//     server.applyMiddleware({ app });

//     db.once('open', () => {
//         app.listen(PORT, () => {
//             console.log(`API server running on port ${PORT}!`);
//             console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//         })
//     })
// };

// startApolloServer(typeDefs, resolvers);

// express-graphql setup

const users = [];
const posts = [];
const comments = [];

app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP ({
    schema: buildSchema(`
        type User {
            _id: ID!
            username: String!
            email: String!
            password: String!
        }

        type Post {
            _id: ID!
            title: String!
            postAuthor: String!
            content: String!
        }

        type Comment {
            _id: ID!
            commentText: String!
            commentAuthor: String!
            createdAt: String!
        }

        type Query {
            user(_id: ID!): User
            users: [User!]
            posts: [Post!]
            comments: [Comment!]
        }

        type Mutation {
            createUser(username: String!, email: String!, password: String!): User
            createPost(title: String!, postAuthor: String!, content: String!): Post
            createComment(commentText: String!, commentAuthor: String!, createdAt: String!): Comment
        }
    `),
    rootValue: {
        users: () => {
            return users;
        },
        posts: () => {
            return posts;
        },
        comments: () => {
            return comments;
        },
        createUser: (args) => {
            const user = {
                _id: Math.random().toString(),
                username: args.username,
                email: args.email,
                password: args.password
            }
            users.push(user);
            return user
        },
        createPost: (args) => {
            const post = {
                _id: Math.random().toString(),
                title: args.title,
                postAuthor: args.postAuthor,
                content: args.content
            }
            posts.push(post);
            return post;
        },
        createComment: (args) => {
            const comment = {
                _id: Math.random().toString(),
                commentText: args.commentText,
                commentAuthor: args.commentAuthor,
                createdAt: args.createdAt
            }
            comments.push(comment);
            return comment
        }
    },
    graphiql: true
}));

app.listen(3000);