import { neon } from '@neondatabase/serverless';

export const getSql = () => {
  if (!process.env.DATABASE_URL) {
    return null;
  }
  return neon(process.env.DATABASE_URL);
};
