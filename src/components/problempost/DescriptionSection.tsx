import { useRef, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { StreamLanguage } from '@codemirror/language'
import { html } from '@codemirror/legacy-modes/mode/xml'


type DescriptionSectionProps = {}

const DescriptionSection = ({}: DescriptionSectionProps) => {
    const descriptionRef = useRef<HTMLDivElement>(null)

    const [description, setDescription] = useState('')

    const onChange = (value: string) => {
        setDescription(value)
        if(descriptionRef.current) {
            descriptionRef.current.innerHTML = value
        }
    }

  return (
    <section className="grid grid-cols-2">
        <div>
            <CodeMirror 
                height='400px'
                value={description}
                theme={vscodeDark}
                extensions={[StreamLanguage.define(html)]}
                onChange={onChange}
            />
        </div>
        <div className='bg-dark-layer-1 text-white max-h-[400px] overflow-auto p-2'>
            <div ref={descriptionRef}></div>
        </div>
    </section>
  )
}

export default DescriptionSection