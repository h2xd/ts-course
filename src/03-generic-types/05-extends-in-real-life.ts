type DataType = {
  __typename: 'DataType'
  importantInfo: string
  createdAt: Date
}

type ErrorType = {
  __typename: 'ErrorType'
  message: string,
  code: number
}

type ResponseTypeUnion = DataType | ErrorType

const query = `
query getMessage {
  message {
    ... on DataType {
      importantInfo
      createdAt
    }
    
    ... on ErrorType {
      message
      code
    }
  }
}
`

export interface Typename<T> {
  __typename: T
}

export interface GraphQLTypename extends Typename<string> {}

export function amazonThatUnion<
  Data extends GraphQLTypename,
  Expected extends Data['__typename']
  >(data: Data, expected: Expected): data is Data & Typename<Expected> {
  return data.__typename === expected
}

const FAKE_RESPONSE: ResponseTypeUnion

if (amazonThatUnion(FAKE_RESPONSE, 'DataType')) {
  FAKE_RESPONSE.createdAt
}





