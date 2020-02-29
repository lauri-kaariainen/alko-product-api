import Product from '../../models/Product';
import {getSingleUrl, getToplevelLinks} from './util';

const PAGE_SIZE = 100;

/**
 * The handler for listing products
 * @param ctx
 * @returns {Promise.<void>}
 */
export default async (ctx) => {
  try {
    const {query} = ctx;
    const {docs, page, pages} = await Product.paginate({}, {page: query.page || 1, limit: PAGE_SIZE});

    ctx.body = ctx.serializer('products', {
      topLevelLinks: getToplevelLinks(ctx, {page, pages}),
      keyForAttribute: 'camelCase',
      dataLinks: {
        self: getSingleUrl(ctx),
      },
      attributes: ['productId', 'name', 'type'],
    })
      .serialize(docs);
  } catch (e) {
    ctx.throw(404, e);
  }
};
/**
 * The handler for listing red wine products
 * @param ctx
 * @returns {Promise.<void>}
 */
export const listRedwines = async (ctx) => {
  const {query} = ctx;
  try {
    const docs = await Product.getRedwines(query.search);
    ctx.body = ctx.serializer('products', {
      attributes: ['productId', 'name', 'type'],
    })
      .serialize(docs);
  } catch (e) {
    ctx.throw(404, e);
  }
};

/**
 * The handler for listing beer products
 * @param ctx
 * @returns {Promise.<void>}
 */
export const listBeers = async (ctx) => {
  const {query} = ctx;
  try {
    const docs = await Product.getBeers(query.search);
    ctx.body = ctx.serializer('products', {
      attributes: ['productId', 'name', 'type'],
    })
      .serialize(docs);
  } catch (e) {
    ctx.throw(404, e);
  }
};

/**
 * The handler for listing whiskey products
 * @param ctx
 * @returns {Promise.<void>}
 */
export const listWhiskeys = async (ctx) => {
  const {query} = ctx;
  try {
    const docs = await Product.getWhiskeys(query.search);
    ctx.body = ctx.serializer('products', {
      attributes: ['productId', 'name', 'type'],
    })
      .serialize(docs);
  } catch (e) {
    ctx.throw(404, e);
  }
};
