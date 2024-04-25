import DescriptionSection from "../components/problempost/DescriptionSection"
import MainSnippetsSection from "../components/problempost/MainSnippetSection"
import SnippetsSection from "../components/problempost/SnippetsSection"

type ProblemPostScreenProps = {}

const ProblemPostScreen = ({}: ProblemPostScreenProps) => {
  return (
    <div className="container m-auto">
        <h1 className="font-bold font-sans text-2xl my-3">Problem Description</h1>
        <DescriptionSection />
        <h1 className="font-bold font-sans text-2xl my-3">Snippets</h1>
        <p className="font-sans text-lg my-3">These are the snippets which are shown as initial code snippets in the Problem Solving Playground Editor.</p>
        <SnippetsSection />
        <h1 className="font-bold font-sans text-2xl my-3">Main Snippets</h1>
        <p className="font-sans text-lg my-3">These are the snippets which are used to parse the testcases and Run in the server.</p>
        <MainSnippetsSection />
    </div>
  )
}

export default ProblemPostScreen