const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNUll} = require('graphql');

// Hardcoded Data
const customers = [
    {id: '1', name: 'John Doe', email: 'jdoe@email.com', age: 35},
    {id: '2', name: 'Steve Smith', email: 'ssmith@email.com', age: 25},
    {id: '3', name: 'Sara Manning', email: 'smanning@email.com', age: 27},
    {id: '4', name: 'Jonas Done', email: 'jdone@email.com', age: 34},
    {id: '4', name: 'Jonny Pappas', email: 'jpappas@email.com', age: 19},
];

// Customer Type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})

// Root query
const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        customer: {
            type: CustomerType,
            args: {
                id: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                return customers.find(customer => customer.id === args.id)
            }
        },
        customers: {
            type: new GraphQLList(CustomerType),
            args: {
                name: {type: GraphQLString}
            },
            resolve(parentValue, args) {
                return customers.filter(customer => customer.name.toLowerCase().includes(args.name.toLowerCase()));
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: rootQuery
});