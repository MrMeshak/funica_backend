import { Resolvers, SignupPageUi } from '../graphqlTypes';

export const signupPageResolver: Resolvers = {
  Query: {
    signupPageUi: (): SignupPageUi => {
      return {
        header: {
          title: 'Create Your Account',
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
          firstname: {
            label: 'First Name',
            placeholder: 'First Name'
          },
          lastname: {
            label: 'Last Name',
            placeholder: 'Last Name'
          },
          submit: {
            label: 'Sign Up'
          }
        },

        loginLink: {
          label: 'Already have an account?',
          linkLabel: 'Sign In',
          link: '/login'
        }
      };
    }
  }
};
