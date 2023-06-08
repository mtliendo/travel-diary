/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrip = /* GraphQL */ `
  query GetTrip($id: ID!) {
    getTrip(id: $id) {
      id
      createdAt
      updatedAt
      title
      description
      imgKey
    }
  }
`;
export const listTrips = /* GraphQL */ `
  query ListTrips {
    listTrips {
      id
      createdAt
      updatedAt
      title
      description
      imgKey
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      createdAt
      updatedAt
      username
      email
    }
  }
`;
