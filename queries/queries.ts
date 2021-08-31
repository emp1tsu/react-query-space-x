import { gql } from 'graphql-request'

export const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      diameter {
        meters
      }
      height {
        meters
      }
      id
      mass {
        kg
      }
    }
  }
`
