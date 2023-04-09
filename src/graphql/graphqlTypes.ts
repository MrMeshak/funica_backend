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
  addressLn1: Scalars['String'];
  addressLn2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  postCode: Scalars['String'];
  state: Scalars['String'];
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

export type EmailField = {
  __typename?: 'EmailField';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type FilterPrice = {
  __typename?: 'FilterPrice';
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
};

export type FirstnameField = {
  __typename?: 'FirstnameField';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type ForgotPasswordLink = {
  __typename?: 'ForgotPasswordLink';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
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

export type Images = {
  __typename?: 'Images';
  alt: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  url: Scalars['String'];
  width: Scalars['Int'];
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

export type LastnameField = {
  __typename?: 'LastnameField';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
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

export type LoginForm = {
  __typename?: 'LoginForm';
  email: EmailField;
  password: PasswordField;
  submit: SubmitButton;
};

export type LoginHeader = {
  __typename?: 'LoginHeader';
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginLink = {
  __typename?: 'LoginLink';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkLabel?: Maybe<Scalars['String']>;
};

export type LoginPageUi = {
  __typename?: 'LoginPageUi';
  forgotPasswordLink: ForgotPasswordLink;
  form: LoginForm;
  header: LoginHeader;
  signupLink: SignupLink;
};

export type LoginResult = InvalidCredentialsError | InvalidInputError | User;

export type Mutation = {
  __typename?: 'Mutation';
  signup?: Maybe<SignupResult>;
};


export type MutationSignupArgs = {
  input: SignupInput;
};

export type NotFoundError = BaseError & {
  __typename?: 'NotFoundError';
  message: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  billingAddress: Address;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isPaid?: Maybe<Scalars['DateTime']>;
  isShipped: Scalars['String'];
  items?: Maybe<Array<Maybe<OrderItem>>>;
  orderStatus: OrderStatus;
  paymentMethod: PaymentMethod;
  shippingAddress: Address;
  shippingType: ShippingType;
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

export type PasswordField = {
  __typename?: 'PasswordField';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export enum PaymentMethod {
  Card = 'CARD',
  Cash = 'CASH'
}

export type Product = {
  __typename?: 'Product';
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  isFavorited?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  productType: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  variations: Array<ProductVariation>;
};

export type ProductData = {
  __typename?: 'ProductData';
  product: ProductSummary;
  productVariation: ProductVariation;
};

export type ProductForm = {
  __typename?: 'ProductForm';
  quantityField: QuantityField;
  submit: SubmitButton;
};

export type ProductGallery = {
  __typename?: 'ProductGallery';
  images: Array<Images>;
};

export type ProductHeader = {
  __typename?: 'ProductHeader';
  isLiked?: Maybe<Scalars['Boolean']>;
  price: Scalars['Int'];
  rating: Scalars['Float'];
  reviewCount?: Maybe<Scalars['Int']>;
  size: Scalars['String'];
  title: Scalars['String'];
  variationName: Scalars['String'];
};

export type ProductInfo = {
  __typename?: 'ProductInfo';
  description: Scalars['String'];
  variations: Array<ProductVariationSummary>;
};

export type ProductPageUi = {
  __typename?: 'ProductPageUi';
  productData: ProductData;
  productForm?: Maybe<ProductForm>;
  productGallery?: Maybe<ProductGallery>;
  productHeader?: Maybe<ProductHeader>;
  productInfo?: Maybe<ProductInfo>;
};

export type ProductPageUiInput = {
  __typename?: 'ProductPageUiInput';
  productVariationId: Scalars['ID'];
};

export type ProductPageUiResult = NotFoundError | ProductPageUi;

export type ProductVariation = {
  __typename?: 'ProductVariation';
  color: Scalars['String'];
  colorHex: Scalars['String'];
  id: Scalars['ID'];
  images: Array<Images>;
  price: Scalars['Int'];
  size: Scalars['String'];
  variationName: Scalars['String'];
};

export type ProductVariationSummary = {
  __typename?: 'ProductVariationSummary';
  color: Scalars['String'];
  colorHex: Scalars['String'];
  id: Scalars['ID'];
  size: Scalars['String'];
  variationName: Scalars['String'];
};

export type QuantityField = {
  __typename?: 'QuantityField';
  label: Scalars['String'];
  max: Scalars['Int'];
  min: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  homePage?: Maybe<HomePage>;
  libraryPage?: Maybe<LibraryPage>;
  login?: Maybe<LoginResult>;
  loginPageUi: LoginPageUi;
  productPageUi: ProductPageUiResult;
  signupPageUi: SignupPageUi;
};


export type QueryLoginArgs = {
  input: LoginInput;
};


export type QueryProductPageUiArgs = {
  input: ProductPageUiInput;
};

export type Review = {
  __typename?: 'Review';
  description: Scalars['String'];
  id: Scalars['ID'];
  rating: Scalars['Int'];
  user: User;
};

export enum ShippingType {
  Express = 'EXPRESS',
  Standard = 'STANDARD'
}

export type SignupForm = {
  __typename?: 'SignupForm';
  email: EmailField;
  firstname: FirstnameField;
  lastname: LastnameField;
  password: PasswordField;
  submit: SubmitButton;
};

export type SignupHeader = {
  __typename?: 'SignupHeader';
  subtitle: Scalars['String'];
  title: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
};

export type SignupLink = {
  __typename?: 'SignupLink';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkLabel?: Maybe<Scalars['String']>;
};

export type SignupPageUi = {
  __typename?: 'SignupPageUi';
  form: SignupForm;
  header: SignupHeader;
  loginLink: LoginLink;
};

export type SignupResult = InvalidInputError | User;

export enum Sort {
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDec = 'RATING_DEC',
  RecentAsc = 'RECENT_ASC',
  RecentDec = 'RECENT_DEC'
}

export type SubmitButton = {
  __typename?: 'SubmitButton';
  label?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  addresses: Array<Address>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  favoriteProducts: Array<Product>;
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  orders: Array<Order>;
  profileImg: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ProductSummary = {
  __typename?: 'productSummary';
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  productType: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  searchTags: Array<Scalars['String']>;
  variations: Array<ProductVariationSummary>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

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
  BaseError: ResolversTypes['InvalidCredentialsError'] | ResolversTypes['InvalidFieldError'] | ResolversTypes['InvalidInputError'] | ResolversTypes['NotFoundError'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: Category;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  EmailField: ResolverTypeWrapper<EmailField>;
  FilterPrice: ResolverTypeWrapper<FilterPrice>;
  FirstnameField: ResolverTypeWrapper<FirstnameField>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ForgotPasswordLink: ResolverTypeWrapper<ForgotPasswordLink>;
  HomePage: ResolverTypeWrapper<HomePage>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Images: ResolverTypeWrapper<Images>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  InvalidCredentialsError: ResolverTypeWrapper<InvalidCredentialsError>;
  InvalidFieldError: ResolverTypeWrapper<InvalidFieldError>;
  InvalidInputError: ResolverTypeWrapper<InvalidInputError>;
  LastnameField: ResolverTypeWrapper<LastnameField>;
  Library: ResolverTypeWrapper<Library>;
  LibraryPage: ResolverTypeWrapper<LibraryPage>;
  LoginForm: ResolverTypeWrapper<LoginForm>;
  LoginHeader: ResolverTypeWrapper<LoginHeader>;
  LoginInput: LoginInput;
  LoginLink: ResolverTypeWrapper<LoginLink>;
  LoginPageUi: ResolverTypeWrapper<LoginPageUi>;
  LoginResult: ResolversTypes['InvalidCredentialsError'] | ResolversTypes['InvalidInputError'] | ResolversTypes['User'];
  Mutation: ResolverTypeWrapper<{}>;
  NotFoundError: ResolverTypeWrapper<NotFoundError>;
  Order: ResolverTypeWrapper<Order>;
  OrderItem: ResolverTypeWrapper<OrderItem>;
  OrderStatus: OrderStatus;
  PasswordField: ResolverTypeWrapper<PasswordField>;
  PaymentMethod: PaymentMethod;
  Product: ResolverTypeWrapper<Product>;
  ProductData: ResolverTypeWrapper<ProductData>;
  ProductForm: ResolverTypeWrapper<ProductForm>;
  ProductGallery: ResolverTypeWrapper<ProductGallery>;
  ProductHeader: ResolverTypeWrapper<ProductHeader>;
  ProductInfo: ResolverTypeWrapper<ProductInfo>;
  ProductPageUi: ResolverTypeWrapper<ProductPageUi>;
  ProductPageUiInput: ResolverTypeWrapper<ProductPageUiInput>;
  ProductPageUiResult: ResolversTypes['NotFoundError'] | ResolversTypes['ProductPageUi'];
  ProductVariation: ResolverTypeWrapper<ProductVariation>;
  ProductVariationSummary: ResolverTypeWrapper<ProductVariationSummary>;
  QuantityField: ResolverTypeWrapper<QuantityField>;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  ShippingType: ShippingType;
  SignupForm: ResolverTypeWrapper<SignupForm>;
  SignupHeader: ResolverTypeWrapper<SignupHeader>;
  SignupInput: SignupInput;
  SignupLink: ResolverTypeWrapper<SignupLink>;
  SignupPageUi: ResolverTypeWrapper<SignupPageUi>;
  SignupResult: ResolversTypes['InvalidInputError'] | ResolversTypes['User'];
  Sort: Sort;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubmitButton: ResolverTypeWrapper<SubmitButton>;
  User: ResolverTypeWrapper<User>;
  productSummary: ResolverTypeWrapper<ProductSummary>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  BaseError: ResolversParentTypes['InvalidCredentialsError'] | ResolversParentTypes['InvalidFieldError'] | ResolversParentTypes['InvalidInputError'] | ResolversParentTypes['NotFoundError'];
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  EmailField: EmailField;
  FilterPrice: FilterPrice;
  FirstnameField: FirstnameField;
  Float: Scalars['Float'];
  ForgotPasswordLink: ForgotPasswordLink;
  HomePage: HomePage;
  ID: Scalars['ID'];
  Images: Images;
  Int: Scalars['Int'];
  InvalidCredentialsError: InvalidCredentialsError;
  InvalidFieldError: InvalidFieldError;
  InvalidInputError: InvalidInputError;
  LastnameField: LastnameField;
  Library: Library;
  LibraryPage: LibraryPage;
  LoginForm: LoginForm;
  LoginHeader: LoginHeader;
  LoginInput: LoginInput;
  LoginLink: LoginLink;
  LoginPageUi: LoginPageUi;
  LoginResult: ResolversParentTypes['InvalidCredentialsError'] | ResolversParentTypes['InvalidInputError'] | ResolversParentTypes['User'];
  Mutation: {};
  NotFoundError: NotFoundError;
  Order: Order;
  OrderItem: OrderItem;
  PasswordField: PasswordField;
  Product: Product;
  ProductData: ProductData;
  ProductForm: ProductForm;
  ProductGallery: ProductGallery;
  ProductHeader: ProductHeader;
  ProductInfo: ProductInfo;
  ProductPageUi: ProductPageUi;
  ProductPageUiInput: ProductPageUiInput;
  ProductPageUiResult: ResolversParentTypes['NotFoundError'] | ResolversParentTypes['ProductPageUi'];
  ProductVariation: ProductVariation;
  ProductVariationSummary: ProductVariationSummary;
  QuantityField: QuantityField;
  Query: {};
  Review: Review;
  SignupForm: SignupForm;
  SignupHeader: SignupHeader;
  SignupInput: SignupInput;
  SignupLink: SignupLink;
  SignupPageUi: SignupPageUi;
  SignupResult: ResolversParentTypes['InvalidInputError'] | ResolversParentTypes['User'];
  String: Scalars['String'];
  SubmitButton: SubmitButton;
  User: User;
  productSummary: ProductSummary;
};

export type AddressResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  addressLn1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressLn2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  postCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseErrorResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['BaseError'] = ResolversParentTypes['BaseError']> = {
  __resolveType: TypeResolveFn<'InvalidCredentialsError' | 'InvalidFieldError' | 'InvalidInputError' | 'NotFoundError', ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EmailFieldResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['EmailField'] = ResolversParentTypes['EmailField']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeholder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FilterPriceResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['FilterPrice'] = ResolversParentTypes['FilterPrice']> = {
  max?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FirstnameFieldResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['FirstnameField'] = ResolversParentTypes['FirstnameField']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeholder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ForgotPasswordLinkResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ForgotPasswordLink'] = ResolversParentTypes['ForgotPasswordLink']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomePageResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['HomePage'] = ResolversParentTypes['HomePage']> = {
  library?: Resolver<Maybe<ResolversTypes['Library']>, ParentType, ContextType, Partial<HomePageLibraryArgs>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImagesResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Images'] = ResolversParentTypes['Images']> = {
  alt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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

export type LastnameFieldResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['LastnameField'] = ResolversParentTypes['LastnameField']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeholder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type LoginFormResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['LoginForm'] = ResolversParentTypes['LoginForm']> = {
  email?: Resolver<ResolversTypes['EmailField'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['PasswordField'], ParentType, ContextType>;
  submit?: Resolver<ResolversTypes['SubmitButton'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginHeaderResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['LoginHeader'] = ResolversParentTypes['LoginHeader']> = {
  subtitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginLinkResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['LoginLink'] = ResolversParentTypes['LoginLink']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginPageUiResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['LoginPageUi'] = ResolversParentTypes['LoginPageUi']> = {
  forgotPasswordLink?: Resolver<ResolversTypes['ForgotPasswordLink'], ParentType, ContextType>;
  form?: Resolver<ResolversTypes['LoginForm'], ParentType, ContextType>;
  header?: Resolver<ResolversTypes['LoginHeader'], ParentType, ContextType>;
  signupLink?: Resolver<ResolversTypes['SignupLink'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResultResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['LoginResult'] = ResolversParentTypes['LoginResult']> = {
  __resolveType: TypeResolveFn<'InvalidCredentialsError' | 'InvalidInputError' | 'User', ParentType, ContextType>;
};

export type MutationResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  signup?: Resolver<Maybe<ResolversTypes['SignupResult']>, ParentType, ContextType, RequireFields<MutationSignupArgs, 'input'>>;
};

export type NotFoundErrorResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['NotFoundError'] = ResolversParentTypes['NotFoundError']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  billingAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPaid?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  isShipped?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderItem']>>>, ParentType, ContextType>;
  orderStatus?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  paymentMethod?: Resolver<ResolversTypes['PaymentMethod'], ParentType, ContextType>;
  shippingAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  shippingType?: Resolver<ResolversTypes['ShippingType'], ParentType, ContextType>;
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

export type PasswordFieldResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['PasswordField'] = ResolversParentTypes['PasswordField']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  placeholder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  categories?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isFavorited?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['Review']>>>, ParentType, ContextType>;
  variations?: Resolver<Array<ResolversTypes['ProductVariation']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDataResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductData'] = ResolversParentTypes['ProductData']> = {
  product?: Resolver<ResolversTypes['productSummary'], ParentType, ContextType>;
  productVariation?: Resolver<ResolversTypes['ProductVariation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductFormResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductForm'] = ResolversParentTypes['ProductForm']> = {
  quantityField?: Resolver<ResolversTypes['QuantityField'], ParentType, ContextType>;
  submit?: Resolver<ResolversTypes['SubmitButton'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductGalleryResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductGallery'] = ResolversParentTypes['ProductGallery']> = {
  images?: Resolver<Array<ResolversTypes['Images']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductHeaderResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductHeader'] = ResolversParentTypes['ProductHeader']> = {
  isLiked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  reviewCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variationName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductInfoResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductInfo'] = ResolversParentTypes['ProductInfo']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variations?: Resolver<Array<ResolversTypes['ProductVariationSummary']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPageUiResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductPageUi'] = ResolversParentTypes['ProductPageUi']> = {
  productData?: Resolver<ResolversTypes['ProductData'], ParentType, ContextType>;
  productForm?: Resolver<Maybe<ResolversTypes['ProductForm']>, ParentType, ContextType>;
  productGallery?: Resolver<Maybe<ResolversTypes['ProductGallery']>, ParentType, ContextType>;
  productHeader?: Resolver<Maybe<ResolversTypes['ProductHeader']>, ParentType, ContextType>;
  productInfo?: Resolver<Maybe<ResolversTypes['ProductInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPageUiInputResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductPageUiInput'] = ResolversParentTypes['ProductPageUiInput']> = {
  productVariationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPageUiResultResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductPageUiResult'] = ResolversParentTypes['ProductPageUiResult']> = {
  __resolveType: TypeResolveFn<'NotFoundError' | 'ProductPageUi', ParentType, ContextType>;
};

export type ProductVariationResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductVariation'] = ResolversParentTypes['ProductVariation']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colorHex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['Images']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variationName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariationSummaryResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['ProductVariationSummary'] = ResolversParentTypes['ProductVariationSummary']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  colorHex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  variationName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuantityFieldResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['QuantityField'] = ResolversParentTypes['QuantityField']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  homePage?: Resolver<Maybe<ResolversTypes['HomePage']>, ParentType, ContextType>;
  libraryPage?: Resolver<Maybe<ResolversTypes['LibraryPage']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['LoginResult']>, ParentType, ContextType, RequireFields<QueryLoginArgs, 'input'>>;
  loginPageUi?: Resolver<ResolversTypes['LoginPageUi'], ParentType, ContextType>;
  productPageUi?: Resolver<ResolversTypes['ProductPageUiResult'], ParentType, ContextType, RequireFields<QueryProductPageUiArgs, 'input'>>;
  signupPageUi?: Resolver<ResolversTypes['SignupPageUi'], ParentType, ContextType>;
};

export type ReviewResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rating?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignupFormResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['SignupForm'] = ResolversParentTypes['SignupForm']> = {
  email?: Resolver<ResolversTypes['EmailField'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['FirstnameField'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['LastnameField'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['PasswordField'], ParentType, ContextType>;
  submit?: Resolver<ResolversTypes['SubmitButton'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignupHeaderResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['SignupHeader'] = ResolversParentTypes['SignupHeader']> = {
  subtitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignupLinkResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['SignupLink'] = ResolversParentTypes['SignupLink']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  linkLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignupPageUiResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['SignupPageUi'] = ResolversParentTypes['SignupPageUi']> = {
  form?: Resolver<ResolversTypes['SignupForm'], ParentType, ContextType>;
  header?: Resolver<ResolversTypes['SignupHeader'], ParentType, ContextType>;
  loginLink?: Resolver<ResolversTypes['LoginLink'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SignupResultResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['SignupResult'] = ResolversParentTypes['SignupResult']> = {
  __resolveType: TypeResolveFn<'InvalidInputError' | 'User', ParentType, ContextType>;
};

export type SubmitButtonResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['SubmitButton'] = ResolversParentTypes['SubmitButton']> = {
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  addresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  favoriteProducts?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  profileImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductSummaryResolvers<ContextType = IGraphqlContext, ParentType extends ResolversParentTypes['productSummary'] = ResolversParentTypes['productSummary']> = {
  categories?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  searchTags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  variations?: Resolver<Array<ResolversTypes['ProductVariationSummary']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = IGraphqlContext> = {
  Address?: AddressResolvers<ContextType>;
  BaseError?: BaseErrorResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  EmailField?: EmailFieldResolvers<ContextType>;
  FilterPrice?: FilterPriceResolvers<ContextType>;
  FirstnameField?: FirstnameFieldResolvers<ContextType>;
  ForgotPasswordLink?: ForgotPasswordLinkResolvers<ContextType>;
  HomePage?: HomePageResolvers<ContextType>;
  Images?: ImagesResolvers<ContextType>;
  InvalidCredentialsError?: InvalidCredentialsErrorResolvers<ContextType>;
  InvalidFieldError?: InvalidFieldErrorResolvers<ContextType>;
  InvalidInputError?: InvalidInputErrorResolvers<ContextType>;
  LastnameField?: LastnameFieldResolvers<ContextType>;
  Library?: LibraryResolvers<ContextType>;
  LibraryPage?: LibraryPageResolvers<ContextType>;
  LoginForm?: LoginFormResolvers<ContextType>;
  LoginHeader?: LoginHeaderResolvers<ContextType>;
  LoginLink?: LoginLinkResolvers<ContextType>;
  LoginPageUi?: LoginPageUiResolvers<ContextType>;
  LoginResult?: LoginResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NotFoundError?: NotFoundErrorResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderItem?: OrderItemResolvers<ContextType>;
  PasswordField?: PasswordFieldResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductData?: ProductDataResolvers<ContextType>;
  ProductForm?: ProductFormResolvers<ContextType>;
  ProductGallery?: ProductGalleryResolvers<ContextType>;
  ProductHeader?: ProductHeaderResolvers<ContextType>;
  ProductInfo?: ProductInfoResolvers<ContextType>;
  ProductPageUi?: ProductPageUiResolvers<ContextType>;
  ProductPageUiInput?: ProductPageUiInputResolvers<ContextType>;
  ProductPageUiResult?: ProductPageUiResultResolvers<ContextType>;
  ProductVariation?: ProductVariationResolvers<ContextType>;
  ProductVariationSummary?: ProductVariationSummaryResolvers<ContextType>;
  QuantityField?: QuantityFieldResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  SignupForm?: SignupFormResolvers<ContextType>;
  SignupHeader?: SignupHeaderResolvers<ContextType>;
  SignupLink?: SignupLinkResolvers<ContextType>;
  SignupPageUi?: SignupPageUiResolvers<ContextType>;
  SignupResult?: SignupResultResolvers<ContextType>;
  SubmitButton?: SubmitButtonResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  productSummary?: ProductSummaryResolvers<ContextType>;
};

