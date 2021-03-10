# Cypress example test project

Presents one of many possible approaches.

# What is tested:

https://newbuilds.com

Favorites:
User is able to add search results to favorites, 
Then opens added property from favorites page
And removes it from favorites


# Start
`npm install`

To run all tests on chrome: `npm test -- --browser chrome`

To run all test on headless chrome: `npm test -- --browser chrome --headless`

To open cypress UI please use: `npm run cy:o`

# Future steps

Add linter.

Discuss if we want to go with Page Object Model. If yes then implement it.

Add dockerfile/jenkinsfile/other config to set up the tests on the CI.

Write more tests! :)
