import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IGraphqlContext } from '../apollo/index.ts';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  addressLn1?: Maybe<Scalars['String']>;
  addressLn2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type BaseError = {
  message: Scalars['String'];
};

export enum Category {
  All = 'ALL',
  Bath = 'BATH',
  Bed = 'BED',
  Chair = 'CHAIR',
  Kitchen = 'KITCHEN',
  Sofa = 'SOFA',
  Table = 'TABLE'
}

export type FilterPrice = {
  __typename?: 'FilterPrice';
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export type HomePage = {
  __typename?: 'HomePage';
  library?: Maybe<Library>;
  user?: Maybe<User>;
};


export type HomePageLibraryArgs = {
  filterCategory?: InputMaybe<Category>;
  filterPrice?: InputMaybe<FilterPrice>;
  sort?: InputMaybe<Sort>;
};

export type InvalidCredentialsError = BaseError & {
  __typename?: 'InvalidCredentialsError';
  message: Scalars['String'];
};

export type InvalidFieldError = BaseError & {
  __typename?: 'InvalidFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type InvalidInputError = BaseError & {
  __typename?: 'InvalidInputError';
  invalidFields: Array<Maybe<InvalidFieldError>>;
  message: Scalars['String'];
};

export type Library = {
  __typename?: 'Library';
  filterCategory?: Maybe<Category>;
  filterPrice?: Maybe<FilterPrice>;
  products?: Maybe<Array<Maybe<Product>>>;
  sort?: Maybe<Sort>;
};

export type LibraryPage = {
  __typename?: 'LibraryPage';
  Library?: Maybe<Library>;
};


export type LibraryPageLibraryArgs = {
  filterCategory?: InputMaybe<Category>;
  filterPrice?: InputMaybe<FilterPrice>;
  sort?: InputMaybe<Sort>;
};

export type LoginResult = InvalidCredentialsError | InvalidInputError | User;

export type Mutation = {
  __typename?: 'Mutation';
  signup?: Maybe<User>;
};


export type MutationSignupArgs = {
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  billingAddress?: Maybe<Address>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isPaid?: Maybe<Scalars['String']>;
  isShipped?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<OrderItem>>>;
  orderStatus?: Maybe<OrderStatus>;
  paymentMethod?: Maybe<PaymentMethod>;
  shippingAddress?: Maybe<Address>;
  shippingType?: Maybe<ShippingType>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['ID'];
  product: Product;
  quantity: Scalars['Int'];
  variation: ProductVariation;
};

export enum OrderStatus {
  AwaitingFullfilment = 'AWAITING_FULLFILMENT',
  AwaitingPayment = 'AWAITING_PAYMENT',
  AwaitingPickup = 'AWAITING_PICKUP',
  AwaitingShipping = 'AWAITING_SHIPPING',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Declined = 'DECLINED',
  Disputed = 'DISPUTED',
  ManualVerificationRequired = 'MANUAL_VERIFICATION_REQUIRED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  PartiallyShipped = 'PARTIALLY_SHIPPED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  Shipped = 'SHIPPED'
}

export enum PaymentMethod {
  Card = 'CARD',
  Cash = 'CASH'
}

export type Product = {
  __typename?: 'Product';
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  description: Scalars['String'];
  id: Scalars['ID'];
  isFavorited?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  prductType: Scalars['String'];
  price: Scalars['Int'];
  rating?: Maybe<Scalars['Int']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  variations?: Maybe<Array<Maybe<ProductVariation>>>;
};

export type ProductPage = {
  __typename?: 'ProductPage';
  product?: Maybe<Product>;
};


export type ProductPageProductArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ProductVariation = {
  __typename?: 'ProductVariation';
  color?: Maybe<Scalars['String']>;
  colorHex?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  size?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  homePage?: Maybe<HomePage>;
  libraryPage?: Maybe<LibraryPage>;
  login?: Maybe<LoginResult>;
  productPage?: Maybe<ProductPage>;
};


export type QueryLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  rating: Scalars['Int'];
  user?: Maybe<User>;
};

export enum ShippingType {
  Express = 'EXPRESS',
  Standard = 'STANDARD'
}

export enum Sort {
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDec = 'RATING_DEC',
  RecentAsc = 'RECENT_ASC',
  RecentDec = 'RECENT_DEC'
}

export type User = {
  __typename?: 'User';
  addresses?: Maybe<Array<Maybe<Address>>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  favoriteProducts?: Maybe<Array<Maybe<Product>>>;
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname: Scalars['String'];
  orders?: Maybe<Array<Maybe<Order>>>;
  profileImg: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  BaseError: ResolversTypes['InvalidCredentialsError'] | ResolversTypes['InvalidFieldError'] | ResolversTypes['InvalidInputError'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: Category;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  FilterPrice: ResolverTypeWrapper<FilterPrice>;
  HomePage: ResolverTypeWrapper<HomePage>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  InvalidCredentialsError: ResolverTypeWrapper<InvalidCredentialsError>;
  InvalidFieldError: ResolverTypeWrapper<InvalidFieldError>;
  InvalidInputError: ResolverTypeWrapper<InvalidInputError>;
  Library: ResolverTypeWrapper<Library>;
  LibraryPage: ResolverTypeWrapper<LibraryPage>;
  LoginResult: ResolversTypes['InvalidCredentialsError'] | ResolversTypes['InvalidInputError'] | ResolversTypes['User'];
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<Order>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderStatus: OrderStatus;
  PaymentMethod: PaymentMethod;
  Product: ResolverTypeWrapper<Product>;
  ProductPage: ResolverTypeWrapper<ProductPage>;
  ProductVariation: ResolverTypeWrapper<ProductVariation>;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  ShippingType: ShippingType;
  Sort: Sort;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  BaseError: ResolversParentTypes['InvalidCredentialsError'] | ResolversParentTypes['InvalidFieldError'] | ResolversParentTypes['InvalidInputError'];
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  FilterPrice: FilterPrice;
  HomePage: HomePage;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  InvalidCredentialsError: InvalidCredentialsError;
  InvalidFieldError: InvalidFieldError;
  InvalidInputError: InvalidInputError;
  Library: Library;
  LibraryPage: LibraryPage;
  LoginResult: ResolversParentTypes['InvalidCredentialsError'] | ResolversParentTypes['InvalidInputError'] | ResolversParentTypes['User'];
  Mutation: {};
  Order: Order;
  OrderItem: OrderItem;
  Product: Product;
  ProductPage: ProductPage;
  ProductVariation: ProductVariation;
  Query: {};
  Review: Review;
  String: Scalars['String'];
  User: User;
};

export type AddressResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  addressLn1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressLn2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  postCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseErrorResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['BaseError'] = ResolversParentTypes['BaseError']> = {
  __resolveType: TypeResolveFn<'InvalidCredentialsError' | 'InvalidFieldError' | 'InvalidInputError', ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type FilterPriceResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['FilterPrice'] = ResolversParentTypes['FilterPrice']> = {
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomePageResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['HomePage'] = ResolversParentTypes['HomePage']> = {
  library?: Resolver<Maybe<ResolversTypes['Library']>, ParentType, ContextType, Partial<HomePageLibraryArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvalidCredentialsErrorResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['InvalidCredentialsError'] = ResolversParentTypes['InvalidCredentialsError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvalidFieldErrorResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['InvalidFieldError'] = ResolversParentTypes['InvalidFieldError']> = {
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvalidInputErrorResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['InvalidInputError'] = ResolversParentTypes['InvalidInputError']> = {
  invalidFields?: Resolver<Array<Maybe<ResolversTypes['InvalidFieldError']>>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraryResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Library'] = ResolversParentTypes['Library']> = {
  filterCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  filterPrice?: Resolver<Maybe<ResolversTypes['FilterPrice']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  sort?: Resolver<Maybe<ResolversTypes['Sort']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LibraryPageResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['LibraryPage'] = ResolversParentTypes['LibraryPage']> = {
  Library?: Resolver<Maybe<ResolversTypes['Library']>, ParentType, ContextType, Partial<LibraryPageLibraryArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResultResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']> = {
  __resolveType: TypeResolveFn<'InvalidCredentialsError' | 'InvalidInputError' | 'User', ParentType, ContextType>;
};

export type MutationResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  signup?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<MutationSignupArgs>>;
};

export type OrderResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  billingAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPaid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isShipped?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItem']>>>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['OrderStatus']>, ParentType, ContextType>;
  paymentMethod?: Resolver<Maybe<ResolversTypes['PaymentMethod']>, ParentType, ContextType>;
  shippingAddress?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  shippingType?: Resolver<Maybe<ResolversTypes['ShippingType']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['OrderItem'] = ResolversParentTypes['OrderItem']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  variation?: Resolver<ResolversTypes['ProductVariation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isFavorited?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  prductType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
  variations?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductVariation']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPageResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductPage'] = ResolversParentTypes['ProductPage']> = {
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, Partial<ProductPageProductArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariationResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductVariation'] = ResolversParentTypes['ProductVariation']> = {
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  colorHex?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  homePage?: Resolver<Maybe<ResolversTypes['HomePage']>, ParentType, ContextType>;
  libraryPage?: Resolver<Maybe<ResolversTypes['LibraryPage']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['LoginResult']>, ParentType, ContextType, RequireFields<QueryLoginArgs, 'email' | 'password'>>;
  productPage?: Resolver<Maybe<ResolversTypes['ProductPage']>, ParentType, ContextType>;
};

export type ReviewResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address']>>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  favoriteProducts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  firstname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  profileImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = IGraphqlContext> = {
  Address?: AddressResolvers<ContextType>;
  BaseError?: BaseErrorResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  FilterPrice?: FilterPriceResolvers<ContextType>;
  HomePage?: HomePageResolvers<ContextType>;
  InvalidCredentialsError?: InvalidCredentialsErrorResolvers<ContextType>;
  InvalidFieldError?: InvalidFieldErrorResolvers<ContextType>;
  InvalidInputError?: InvalidInputErrorResolvers<ContextType>;
  Library?: LibraryResolvers<ContextType>;
  LibraryPage?: LibraryPageResolvers<ContextType>;
  LoginResult?: LoginResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductPage?: ProductPageResolvers<ContextType>;
  ProductVariation?: ProductVariationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

