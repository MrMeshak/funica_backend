import {
  Resolvers,
  ProductPageUiResult,
  ProductGallery,
  ProductHeader,
  ProductPrice,
  ProductInfo,
  VariationOption,
  ProductForm
} from '../graphqlTypes';

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
    productGallery: (parent, { input }, context): ProductGallery => {
      let variationId: string;
      const variations = parent.productPageData.product.variations;

      if (variations.length === 0) {
        return {
          images: []
        };
      }

      if (input) {
        variationId = input.variationId;
      } else {
        variationId = parent.productPageData.product.variations[0].id;
      }

      const match = variations.find((variation) => variation.id === variationId);
      if (!match) {
        return {
          images: []
        };
      }

      return {
        images: match.images
      };
    },

    productHeader: (parent, _, context): ProductHeader => {
      return {
        title: parent.productPageData.product.name,
        subtitle: parent.productPageData.product.productType
      };
    },

    productInfo: (parent, _, context): ProductInfo => {
      const variationOptions: VariationOption[] = parent.productPageData.product.variations.map(
        (variation) => {
          return {
            variationId: variation.id,
            color: variation.color,
            colorHex: variation.colorHex
          };
        }
      );

      return {
        productDescription: {
          label: 'Description',
          description: parent.productPageData.product.description
        },
        productVariationDisplay: {
          label: 'Variants',
          variationOptions: variationOptions
        }
      };
    },

    productForm: (parent, _, context): ProductForm => {
      return {
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
