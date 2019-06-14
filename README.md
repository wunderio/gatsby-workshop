## 👋 Welcome!

This repository contains a _demo gatsby site_ built for the ["The great drupal + gatsby workflow"](https://drupalmountaincamp.ch/sessions/workshop-drupal-and-gatsby-great-workflow) workshop held at
[Mountain Drupalcamp 2019](https://drupalmountaincamp.ch) in Davos Switzerland.

**Please note** : The master branch is the starting point and does not have anything apart from the standard Gatsby setup. Progress through the branches to see stuff happening:
1. `step-1` Adds the drupal gatsby source plugin: you will start seeing the drupal data in your grapiql playground.
1. `step-2` Add a `StaticQuery` component to display a list of the recipes from drupal on the index page.
1. `step-3` Adds a page for each recipe using gatsby's node api and links to the recipes from the index page
1. `step-4` Adds CSS and Gatsby images for each recipe.

Checkout the `production` branch to see the "finished" product, or follow along by checking out the `step-*` branches.

## 🚀 Quick start

1. **Check out the gatsby's [official guide](https://www.gatsbyjs.org/tutorial/part-zero/) to set up your local environment** (git and Node.js)

1. **Clone this repository**

   ```
   git clone https://github.com/wunderio/gatsby-workshop.git
   ```

1. **Start developing.**

   Navigate into your new site’s directory and start it up.
   please note: We are using `npm` not `yarn` in this example.

   ```
   cd gatsby-workshop/
   npm install
   npm run develop
   ```

1. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

   Open the `gatsby-workshop` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
