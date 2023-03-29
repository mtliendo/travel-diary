# Amplify Speaker Demo: Trip Planner

A travel app used for demos.

## Setup

0. Init Amplify: `amplify init -y`
1. Add Auth: `amplify add auth`

   - Accept the defaults
   - username auth

2. Add Storage: `amplify add storage`
   - only auth users
   - full CRUD
3. Add an API: `amplify add api`
   - allow cognito auth

```graphql
type Trip @model @auth(rules: [{ allow: owner }]) {
	id: ID!
	title: String!
	description: String!
	imgID: String!
}
```

4. Deploy: `amplify push -y`
