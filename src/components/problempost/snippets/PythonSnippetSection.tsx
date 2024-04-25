import { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { StreamLanguage } from '@codemirror/language'
import { python } from '@codemirror/legacy-modes/mode/python'

type PythonSnippetSectionProps = {}

const PythonSnippetSection = ({}: PythonSnippetSectionProps) => {

    const [snippet, setSnippet] = useState('# Your Code Here')

  return (
    <CodeMirror 
        height='400px'
        value={snippet}
        theme={vscodeDark}
        extensions={[StreamLanguage.define(python)]}
        onChange={value => setSnippet(value)}
    />
  )
}

export default PythonSnippetSection