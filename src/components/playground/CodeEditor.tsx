import React, { useEffect, useContext } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { StreamLanguage } from '@codemirror/language'
import { java, c, cpp } from '@codemirror/legacy-modes/mode/clike'
import { javascript } from '@codemirror/legacy-modes/mode/javascript'
import { python } from '@codemirror/legacy-modes/mode/python'
import { PlaygroundContext } from './PlaygroundScreenProvider'

type CodeEditorProps = {
    snippet: string
}

const CodeEditor: React.FC<CodeEditorProps> = ({ snippet }) => {

    const { state, dispatch } = useContext(PlaygroundContext)

    const { code, language } = state

    useEffect(() => {
        dispatch({ type: 'codeChange', payload: snippet })
    }, [snippet])

    const onChange = (value: string) => {
        dispatch({ type: 'codeChange', payload: value })
    }

    const extension = language == 'C' ? [StreamLanguage.define(c)] 
                    : language == 'CPP' ? [StreamLanguage.define(cpp)] 
                    : language === 'Java' ? [StreamLanguage.define(java)] 
                    : language === 'Python' ? [StreamLanguage.define(python)] 
                    : language === 'Javascript' ? [StreamLanguage.define(javascript)] : []

    return (
        <CodeMirror 
            value={code}
            theme={vscodeDark}
            extensions={extension}
            onChange={onChange}
        />
    )
}

export default CodeEditor;