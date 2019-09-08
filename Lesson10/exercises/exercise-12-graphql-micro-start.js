const micro = require('micro');
const graphqlServer = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt
} = require('graphql');

const basketItems = [
  {
    quantity: 1,
    price: 199,
    name: 'Soda bottle',
    id: '2'
  },
  {
    quantity: 2,
    price: 2499,
    name: 'Kitchenware kits',
    id: '1'
  }
];

const basketItem = new GraphQLObjectType({
  name: 'basketItem',
  description: 'BasketItem',
  fields() {
    return {
      name: {
        type: GraphQLString
      },
      price: {
        type: GraphQLInt
      },
      quantity: {
        type: GraphQLInt
      },
      id: {
        type: GraphQLString
      }
    };
  }
});

const BasketType = new GraphQLObjectType({
  name: 'basket',
  fields() {
    return {
      items: {
        type: new GraphQLList(basketItem)
      }
    };
  }
});

// Query:
// {
//   basket {
//     items {
//       name
//       price
//       quantity
//     }
//   }
// }

const basket = {
  type: BasketType,
  resolve() {
    return {
      items: basketItems
    };
  }
};

const query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields() {
    return {
      basket
    };
  }
});

const handler = graphqlServer({
  schema: new GraphQLSchema({query}),
  graphiql: true
});

const server = micro(handler);

server.listen(3000, () => {
  console.log('listening on port 3000');
});
