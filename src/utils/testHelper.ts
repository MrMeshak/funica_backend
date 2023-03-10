import { Resolver, StitchingResolver } from '../graphql/graphqlTypes';

type MockResolverFn<TResult, TParent, TArgs, TCtx> = (
  parent?: TParent,
  args?: TArgs,
  context?: TCtx,
  info?: any
) => Promise<TResult> | TResult;

type MockStitchingResolver<TResult, TParent, TArgs, TCtx> = {
  fragment: string;
  resolve: MockResolverFn<TResult, TParent, TArgs, TCtx>;
};

export function mockResolver<TResult, TParent, TContext, TArgs>(
  resolver: Resolver<TResult, TParent, TContext, TArgs>
): MockResolverFn<TResult, TParent, TArgs, TContext>;
export function mockResolver<TResult, TParent, TContext, TArgs>(
  resolver: Resolver<TResult, TParent, TContext, TArgs>,
  isStitching: boolean
): MockStitchingResolver<TResult, TParent, TArgs, TContext>;
export function mockResolver<TResult, TParent, TContext, TArgs>(
  resolver: Resolver<TResult, TParent, TContext, TArgs>,
  useStitching?: boolean
):
  | MockResolverFn<TResult, TParent, TArgs, TContext>
  | MockStitchingResolver<TResult, TParent, TArgs, TContext> {
  if (isStitching<StitchingResolver<TResult, TParent, TContext, TArgs>>(resolver, useStitching)) {
    return {
      fragment: resolver.fragment,
      resolve: (parent, args, context, info) => resolver.resolve(parent, args, context, info)
    };
  }

  return (parent, args, context, info) => resolver(parent, args, context, info);
}

function isStitching<T>(resolver: any, useStitching: boolean): resolver is T {
  return useStitching === true;
}
