import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';

const secret = 'Molassecretcode';
const expiration = '2h';

export const AuthenticationError = new GraphQLError('Could not authenticate user.', {
  extensions: {
    code: 'UNAUTHENTICATED',
  },
});

export function authMiddleware({ req }) {
  console.log("this is a reqestttttttttttttttttttt", req.headers);
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return req;
  }

  try {
    const { authenticatedPerson } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = authenticatedPerson;

  } catch {
    console.log('Invalid token');
  }

  return req;
}

export function signToken({ email, name, _id }) {
  const payload = { email, name, _id };
  return jwt.sign({ authenticatedPerson: payload }, secret, { expiresIn: expiration });
}

// export default { authMiddleware, signToken };
