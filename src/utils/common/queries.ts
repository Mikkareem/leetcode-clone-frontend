import { gql } from '@apollo/client'

export const GET_PROBLEM_WITH_ID = gql`
query Leetcode($id: String) {
  problem(id: $id) {
    id
    problemNo
    title
    description
    difficulty
    likes
    dislikes
    examples {
      input
      output
      explanation
    }
    constraints
    testcases {
      id
      input
      output
    }
  }
}
`

export const GET_ALL_PROBLEMS = gql`
query Leetcode($page: Int, $limit: Int) {
    problems(page: $page, limit: $limit) {
        problems {
            id
            title
            problemNo
            difficulty
        }
        currentPage
        totalPages
    }
}
`

export const GET_CODE_SNIPPETS = gql`
query Leetcode($id: String, $language: String) {
    snippet(id: $id, language: $language) {
        snippet
    }
}
`