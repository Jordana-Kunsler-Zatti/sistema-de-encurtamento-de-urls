import postgres from 'postgres';

export const sql = postgres(
  'postgresql://shortUrlsDB_owner:LJpuk9WGD2Pl@ep-rough-lab-a5buq6oh.us-east-2.aws.neon.tech/shortUrlsDB?sslmode=require'
);
