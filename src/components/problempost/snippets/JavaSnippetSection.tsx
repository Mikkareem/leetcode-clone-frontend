import { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { StreamLanguage } from '@codemirror/language'
import { java } from '@codemirror/legacy-modes/mode/clike'

type JavaSnippetSectionProps = {}

const JavaSnippetSection = ({}: JavaSnippetSectionProps) => {

    const [snippet, setSnippet] = useState('// Your Code Here')

  return (
    <CodeMirror 
        height='400px'
        value={snippet}
        theme={vscodeDark}
        extensions={[StreamLanguage.define(java)]}
        onChange={value => setSnippet(value)}
    />
  )
}

export default JavaSnippetSection