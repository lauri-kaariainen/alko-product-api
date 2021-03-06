import router from './config/router';
import {listProducts, listRedwines, listBeers, listWhiskeys} from './modules/product/listproducts';
import singleProduct from './modules/product/singleProduct';
import {name, version} from '../package.json'

/**
 * Configure routes
 */
export default {
  'GET /': {
    handler: (ctx) => {
      ctx.body = {
        name,
        version,
        routes: router().getRoutes(),
      };
    },
  },
  'GET /products': {
    handler: listProducts,
  },
  'GET /products/redwines': {
    handler: listRedwines,
  },
  'GET /products/beers': {
    handler: listBeers,
  },
  'GET /products/whiskeys': {
    handler: listWhiskeys,
  },

  'GET /products/:productId': {
    handler: singleProduct,
  },
};
