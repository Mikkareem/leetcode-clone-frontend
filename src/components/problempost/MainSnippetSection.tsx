import CSnippetSection from "./snippets/CSnippetSection"
import CPPSnippetSection from "./snippets/CppSnippetSection"
import JavaSnippetSection from "./snippets/JavaSnippetSection"
import JavascriptSnippetSection from "./snippets/JavascriptSnippetSection"
import PythonSnippetSection from "./snippets/PythonSnippetSection"

type MainSnippetsSectionProps = {}

const MainSnippetsSection = ({}: MainSnippetsSectionProps) => {
  return (
    <div className="grid grid-cols-2 gap-8">
        <div className="bg-red-400">
            <h1 className="p-3 font-bold text-white">C</h1>
            <CSnippetSection />
        </div>
        <div className="bg-red-400">
            <h1 className="p-3 font-bold text-white">CPP</h1>
            <CPPSnippetSection />
        </div>
        <div className="bg-red-400">
            <h1 className="p-3 font-bold text-white">Java</h1>
            <JavaSnippetSection />
        </div>
        <div className="bg-red-400">
            <h1 className="p-3 font-bold text-white">Python</h1>
            <PythonSnippetSection />
        </div>
        <div className="bg-red-400">
            <h1 className="p-3 font-bold text-white">Javascript</h1>
            <JavascriptSnippetSection />
        </div>
    </div>
  )
}

export default MainSnippetsSection