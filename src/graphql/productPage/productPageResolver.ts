import { Resolvers } from '../graphqlTypes';
import {
  ProductPageUiResult,
  ProductGallery,
  ProductHeader,
  ProductForm,
  ProductInfo
} from '../graphqlTypes';

export const productPageResolver: Resolvers = {
  Query: {
    productPageUi: async (_, { input }, context): Promise<ProductPageUiResult> => {
      const prisma = context.prisma;
      const productVariation = await prisma.productVariation.findUnique({
        where: {
          id: input.productVariationId
        },
        include: {
          images: true
        }
      });

      if (!productVariation) {
        return {
          __typename: 'NotFoundError',
          message: 'Product not found'
        };
      }

      const productSummary = await prisma.product.findUnique({
        where: {
          id: productVariation.productId
        },
        select: {
          id: true,
          name: true,
          productType: true,
          categories: true,
          searchTags: true,
          description: true,
          rating: true,
          variations: {
            select: {
              id: true,
              variationName: true,
              color: true,
              colorHex: true,
              size: true
            }
          }
        }
      });

      if (!productSummary) {
        return {
          __typename: 'NotFoundError',
          message: 'Product not found'
        };
      }

      return {
        __typename: 'ProductPageUi',
        productData: {
          productVariation: productVariation,
          product: productSummary
        }
      };
    }
  },

  ProductPageUi: {
    productGallery: (parent, _, context): ProductGallery => {
      const images = parent.productData.productVariation.images;
      return {
        images: images
      };
    },
    productInfo: (parent, _, context): ProductInfo => {
      const description = parent.productData.product.description;
      const variations = parent.productData.product.variations;
      return {
        description: description,
        variations: variations
      };
    },
    productHeader: (parent, _, context): ProductHeader => {
      const { variationName, size, price } = parent.productData.productVariation;
      const { name, rating } = parent.productData.product;
      return {
        title: name,
        variationName: variationName,
        size: size,
        price: price,
        rating: rating || 0
      };
    },
    productForm: (parent, _, context): ProductForm => {
      return {
        quantityField: {
          label: 'Quantity',
          min: 1,
          max: 10
        },
        submit: {
          label: 'Add to Cart'
        }
      };
    }
  }
};

/*
export const productPageResolver: Resolvers = {
  Query: {
    productPageUi: async (_, { input }, context): Promise<ProductPageUiResult> => {
      const product = await context.prisma.product.findUnique({
        where: {
          id: input.productId
        },
        include: {
          variations: true
        }
      });

      if (!product) {
        return {
          __typename: 'NotFoundError',
          message: 'Product not found'
        };
      }

      return {
        __typename: 'ProductPageUi',
        productPageData: {
          product: product
        }
      };
    }
  },

  ProductPageUi: {
    productGallery: (parent, _, context): ProductGallery => {
      const variations = parent.productPageData.product.variations;
      const gallery = variations.map((variation) => {
        return {
          variationId: variation.id,
          images: variation.images
        };
      });

      return {
        gallery: gallery
      };
    },

    productHeader: (parent, _, context): ProductHeader => {
      return {
        title: parent.productPageData.product.name,
        subtitle: parent.productPageData.product.productType
      };
    },

    productInfo: (parent, _, context): ProductInfo => {
      return {
        productDescription: {
          label: 'Description',
          description: parent.productPageData.product.description
        }
      };
    },

    productForm: (parent, _, context): ProductForm => {
      const variations = parent.productPageData.product.variations;
      const varaiationOptions = variations.map((variation) => {
        return {
          variationId: variation.id,
          color: variation.color,
          colorHex: variation.colorHex
        };
      });

      return {
        productVariationField: {
          label: 'Color',
          variations: varaiationOptions
        },
        productQuantityField: {
          label: 'Quantity',
          min: 1,
          max: 10
        },
        productAddToCartBtn: {
          label: 'Add to Cart'
        }
      };
    },

    productPrice: (parent, _, context): ProductPrice => {
      return {
        label: 'Total Price',
        price: parent.productPageData.product.price
      };
    }
  }
};
*/
