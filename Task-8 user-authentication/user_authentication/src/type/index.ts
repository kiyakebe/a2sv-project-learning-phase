import { Session as NextAuthSession } from 'next-auth';

export interface Token {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  error?: string;
}

// initialize custom session interface by extending NextAuthSession
export interface CustomSession extends NextAuthSession {
  accessToken: string;
  refreshToken: string;
}
