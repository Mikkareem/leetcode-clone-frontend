import { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { StreamLanguage } from '@codemirror/language'
import { c } from '@codemirror/legacy-modes/mode/clike'

type CSnippetSectionProps = {}

const CSnippetSection = ({}: CSnippetSectionProps) => {

    const [snippet, setSnippet] = useState('// Your Code Here')

  return (
    <CodeMirror 
        height='400px'
        value={snippet}
        theme={vscodeDark}
        extensions={[StreamLanguage.define(c)]}
        onChange={value => setSnippet(value)}
    />
  )
}

export default CSnippetSection