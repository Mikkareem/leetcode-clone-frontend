import { ReactNode, createContext, useReducer } from 'react'
import { LanguageType } from '../../utils/types/Problem'

interface Props {
    children: ReactNode
}

interface State {
    code: string,
    language: LanguageType,
    problemId: string
}

interface Action {
    type: 'runCode' | 'submitCode' | 'languageChange' | 'codeChange'
    payload ?: string
}

const initialValue: State = {
    code: '',
    language: 'Java',
    problemId: ''
}

const reducer = (state: State, action: Action) => {
    const { type, payload } = action

    switch(type) {
        case 'runCode':
            return {
                ...state,
            }
        case 'submitCode':
            return {
                ...state,
            }
        case 'languageChange':
            return {
                ...state,
                language: (payload ?? 'Java') as LanguageType
            }
        case 'codeChange':
            return {
                ...state,
                code: payload ?? ''
            }
        default:
            return state
    }
}

export const PlaygroundContext = createContext<
    { state: State, dispatch: (act: Action) => void }
>(
    { state: initialValue, dispatch: () => {}}
)

export default function PlaygroundScreenProvider({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <PlaygroundContext.Provider value={{ state, dispatch }}>{children}</PlaygroundContext.Provider>
  )
}
