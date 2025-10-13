const Algolia = require("algoliasearch")
const dotenv = require("dotenv")
dotenv.config()

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID
const ALGOLIA_ADMIN_KEY =  process.env.ALGOLIA_ADMIN_KEY

const algoliaClient = new Algolia(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);

const users = algoliaClient.initIndex("users")

module.exports  = {
     AlgoliaUsers: users, 
     algoliaClient
}