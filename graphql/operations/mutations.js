/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrip = /* GraphQL */ `
  mutation CreateTrip($input: TripCreateInput!) {
    createTrip(input: $input) {
      id
      createdAt
      updatedAt
      title
      description
      imgKey
    }
  }
`;
export const updateTrip = /* GraphQL */ `
  mutation UpdateTrip($input: TripUpdateInput!) {
    updateTrip(input: $input) {
      id
      createdAt
      updatedAt
      title
      description
      imgKey
    }
  }
`;
export const deleteTrip = /* GraphQL */ `
  mutation DeleteTrip($id: ID!) {
    deleteTrip(id: $id) {
      id
      createdAt
      updatedAt
      title
      description
      imgKey
    }
  }
`;
