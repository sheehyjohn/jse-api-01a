# Changes

## Dependency Conflicts and npm Install

When installing dependencies in this project, you may encounter errors due to incompatible versions of Express and Apollo Server. To resolve these, always use the following command:

```sh
npm install --legacy-peer-deps
```

This will bypass peer dependency conflicts and ensure all required packages are installed successfully.

## Running the GraphQL API Example

1. **Installed key dependencies:**
- express
	Fast, minimalist web framework for Node.js.

- apollo-server-express
	Integrates Apollo Server (GraphQL) with Express.

- graphql
	Core GraphQL library for schema and query execution.

- mongoose
	ODM for MongoDB, enabling schema-based data modeling.

- dotenv
	Loads environment variables from a .env file.

 

2. **Updated Apollo Server setup:**
Important Code Changes for Modern Compatibility
Apollo Server Setup:
Wrap the server initialization in an async function and call await server.start() before applying middleware:const server = new ApolloServer({ typeDefs, resolvers });

	async function startServer() {
	await server.start();
	server.applyMiddleware({ app });
	app.listen(port, () => {
		console.log(`Server running at http://localhost:${port}${server.graphqlPath}`);
	});
	}
	startServer();



	- Wrapped the server initialization in an async function.
	- Called `await server.start()` before applying middleware to Express, as required by Apollo Server v3+.

3. **Started the server:**
	- Used `nodemon index.js` to run the project.
	- The server runs at [http://localhost:4000/api](http://localhost:4000/api).

# 4. Mongoose Database Connection
Remove deprecated options and use the modern connection syntax:
mongoose.connect(DB_HOST);

``` js
const mongoose = require('mongoose');

module.exports = {
  connect: DB_HOST => {
    mongoose.connect(DB_HOST);
    mongoose.connection.on('error', err => {
      console.error(err);
      console.log(
        'MongoDB connection error. Please make sure MongoDB is running.'
      );
      process.exit();
    });
  },

  close: () => {
    mongoose.connection.close();
  }
};
```
# 5. dot env file
Copy from previous project

# 6. JWT for sign-in
<img src="image.png" align="right" />


#
#

# JavaScript Everywhere API
<img src="cover.png" width="200" align="right" />
This repository contains code examples for the API chapters of [_JavaScript Everywhere_](https://www.jseverywhere.io/) by Adam D. Scott, published by O'Reilly Media

## Getting Help

The best place to get help is our Spectrum channel, [spectrum.chat/jseverywhere](https://spectrum.chat/jseverywhere).

## Directory Structure

- `/src` If you are following along with the book, this is the directory where you should perform your development.
- `/solutions` This directory contains the solutions for each chapter. If you get stuck, these are available for you to consult.
- `/final` This directory contains the final working project

## To Use the Final Project Files

If you're developing a UI and would like to use the completed project, copy the files to the completed files to the `src` as follows: 

```
cp -rf ./final/* ./src/
```

## Seed Data

To seed data for local development: `npm run seed`. The password for all of the seeded users is `password`.

Each time this command is run, it will generate 10 users and 25 notes.

## Related Repositories

- [Web 💻 ](https://github.com/javascripteverywhere/web)
- [Mobile 🤳](https://github.com/javascripteverywhere/mobile)
- [Desktop 🖥️](https://github.com/javascripteverywhere/desktop)

## Code of Conduct

In the interest of fostering an open and welcoming environment, I pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation..

This project pledges to follow the [Contributor's Covenant](http://contributor-covenant.org/version/1/4/).

## License

Copyright 2019 Adam D. Scott

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
