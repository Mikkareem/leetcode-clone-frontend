import { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { StreamLanguage } from '@codemirror/language'
import { cpp } from '@codemirror/legacy-modes/mode/clike'

type CPPSnippetSectionProps = {}

const CPPSnippetSection = ({}: CPPSnippetSectionProps) => {

    const [snippet, setSnippet] = useState('// Your Code Here')

  return (
    <CodeMirror 
        height='400px'
        value={snippet}
        theme={vscodeDark}
        extensions={[StreamLanguage.define(cpp)]}
        onChange={value => setSnippet(value)}
    />
  )
}

export default CPPSnippetSection