import { Link } from "react-router-dom"

interface ProblemListItem {
    id ?: string
    title: string
    problemNo: number
    difficulty: string
}

type ProblemsTableProps = {
    problems: Array<ProblemListItem>
}

const ProblemsTable = ({ problems }: ProblemsTableProps) => {


    problems.forEach(pr => console.log(pr))

  return (
    <table className="w-full border-collapse border-2 border-black-800">
        <thead>
            <tr className="text-white bg-dark-layer-1">
                <th className="p-5 w-[5%]">#</th>
                <th className="w-[55%]">Problem Title</th>
                <th className="w-[15%]">Difficulty</th>
                <th className="w-[15%]">Companies</th>
                <th className="w-[15%]">Solved</th>
            </tr>
        </thead>
        <tbody className="text-center">
            {problems.map((problem) => (
                <tr key={problem.problemNo} className="border border-slate-500 hover:bg-dark-layer-1">
                    <td className="p-5">{problem.problemNo}</td>
                    <td className="text-left">
                        <Link to={`/problems/${problem.id}`}>{problem.title}</Link>
                    </td>
                    <td>
                        {
                            problem.difficulty === 'EASY'
                                ? <span className="easy-chip">Easy</span>
                            : problem.difficulty === 'MEDIUM' 
                                ? <span className="medium-chip">Medium</span>
                            : problem.difficulty === 'HARD'
                                ? <span className="hard-chip">Hard</span>
                            : <></>
                        }
                    </td>
                    <td>Amazon</td>
                    <td>true</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default ProblemsTable