import React, { useEffect } from 'react'
import Split from 'react-split'
import Workspace from '../components/playground/Workspace'
import ProblemDescription from '../components/playground/ProblemDescription'
import PlaygroundTopBar from '../components/playground/PlaygroundTopBar'
import { useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { camelCase } from '../utils/common/common'
import { ProblemDetail } from '../utils/types/Problem'
import { GET_PROBLEM_WITH_ID } from '../utils/common/queries'
import PlaygroundScreenProvider from '../components/playground/PlaygroundScreenProvider'

const PlaygroundScreen: React.FC<PlaygroundScreenProps> = () => {

  const params = useParams<{ problemId: string }>()

  const [fetchProblems, { data, error, loading }] = useLazyQuery(GET_PROBLEM_WITH_ID, {
    variables: {
      id: params.problemId
    }
  })

  useEffect(() => {
    fetchProblems()
  }, [])

  if(loading) {
    return <h1>Loading.....</h1>
  }

  if(error) {
    console.error(error.message)
    return <h1>{error.message}</h1>
  }

  const problem: ProblemDetail = data?.problem

  return (
    <PlaygroundScreenProvider>
      <PlaygroundTopBar />
      {problem && 
      <Split
        className="split h-[calc(100vh-50px)] bg-black"
        sizes={[50, 50]}
        minSize={200}
        direction="horizontal"
        cursor="col-resize"
      >
        <div className="h-full overflow-auto">
          <ProblemDescription 
              detail={{
                id: problem.id,
                title: problem.title,
                problemNo: problem.problemNo,
                difficulty: camelCase(problem.difficulty),
                likes: problem.likes,
                dislikes: problem.dislikes,
                description: problem.description,
                examples: problem.examples,
                constraints: problem.constraints,
                testcases: problem.testcases
              }}
          />
        </div>
        <div className="h-full overflow-auto">
            <Workspace problemId={problem.id} testcases={problem.testcases}/>
        </div>
      </Split>
      }
    </PlaygroundScreenProvider>
  )
}

type PlaygroundScreenProps = {}

export default PlaygroundScreen