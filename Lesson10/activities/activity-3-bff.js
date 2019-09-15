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

// Mutation with:
// mutation {
//  cost1: LineItemCost(id: "1")
//  cost2: LineItemCost(id: "2")
// }

const LineItemCost = {
  type: GraphQLInt,
  args: {id: {type: GraphQLString}},
  resolve(root, args, context) {
    const item = basketItems.find(i => i.id === args.id);
    return item ? item.quantity * item.price : null;
  }
};

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields() {
    return {LineItemCost};
  }
});

const cors = fn => (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    return 'ok';
  }

  return fn(req, res);
};

const handler = cors(
  graphqlServer({
    schema: new GraphQLSchema({query, mutation}),
    graphiql: true
  })
);

const server = micro(handler);

server.listen(3000, () => {
  console.log('listening on port 3000');
});
