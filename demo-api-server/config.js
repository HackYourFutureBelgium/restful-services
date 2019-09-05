process.env.MONGODB_URL = "connection string from mlab goes here";
process.env.PORT = 3000;

console.log(`
configging -->
  MONGODB_URL: ${process.env.MONGODB_URL}
  PORT: ${process.env.PORT}
`);

