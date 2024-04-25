import React, { useContext, useEffect } from 'react'
import Split from 'react-split';
import CodeEditor from './CodeEditor';
import LanguageSelector from './LanguageSelector';
import TestCaseSection from './TestCaseSection';
import { useLazyQuery } from '@apollo/client';
import { LanguageType, Testcase } from '../../utils/types/Problem';
import { GET_CODE_SNIPPETS } from '../../utils/common/queries';
import { PlaygroundContext } from './PlaygroundScreenProvider';

type WorkspaceProps = {
	problemId: string,
	testcases: Testcase[]
}

const Workspace: React.FC<WorkspaceProps> = ({ problemId, testcases }) => {

	const { state, dispatch } = useContext(PlaygroundContext)

	const { language } = state

	const [getSnippet, { loading, error, data }] = useLazyQuery(GET_CODE_SNIPPETS, {
		variables: {
			id: problemId,
			language: language
		},
	})

	useEffect(() => {
		getSnippet()
	}, [language])

	if(loading) {
		return <div className='text-white'>Loading</div>
	}

	if(error) {
		return <div className='text-white'>{error.message}</div>
	}

	const onLanguageChange = (lang: LanguageType) => {
		dispatch({ type: 'languageChange', payload: lang })
	}

  return (
    <Split
        className='h-full'
        direction='vertical'
        sizes={[60,40]}
        minSize={120}
        snapOffset={0}
    >
        <div className="w-full overflow-auto bg-dark-layer-1 rounded-2xl">
            <LanguageSelector language={language} onChange={onLanguageChange}/>
            <CodeEditor snippet={data?.snippet?.snippet}/>
        </div>
        <div className="w-full p-2 overflow-auto bg-dark-layer-1 rounded-2xl">
            <TestCaseSection testcases={testcases}/>
        </div>
    </Split>
  )
}

export default Workspace;