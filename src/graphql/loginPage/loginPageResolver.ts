import { LoginPageUi, Resolvers } from '../graphqlTypes';

export const loginPageResolver: Resolvers = {
  Query: {
    loginPageUi: (): LoginPageUi => {
      return {
        header: {
          title: 'Login to Your Account',
          subtitle: ''
        },

        form: {
          email: {
            label: 'Email',
            placeholder: 'Email'
          },
          password: {
            label: 'Password',
            placeholder: 'Password'
          },
          submit: {
            label: 'Sign In'
          }
        },

        forgotPasswordLink: {
          label: 'Forgot the Password?',
          link: '/forgot-password'
        },

        signupLink: {
          label: "Don't have an account?",
          linkLabel: 'Sign Up',
          link: '/signup'
        }
      };
    }
  }
};
