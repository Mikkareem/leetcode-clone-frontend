import { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { StreamLanguage } from '@codemirror/language'
import { javascript } from '@codemirror/legacy-modes/mode/javascript'

type JavascriptSnippetSectionProps = {}

const JavascriptSnippetSection = ({}: JavascriptSnippetSectionProps) => {

    const [snippet, setSnippet] = useState('// Your Code Here')

  return (
    <CodeMirror 
        height='400px'
        value={snippet}
        theme={vscodeDark}
        extensions={[StreamLanguage.define(javascript)]}
        onChange={value => setSnippet(value)}
    />
  )
}

export default JavascriptSnippetSection