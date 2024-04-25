import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { LanguageType } from '../../utils/types/Problem';

type LanguageSelectorProps = {
    language: LanguageType
    onChange: (_lang: LanguageType) => void
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onChange }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleLangSelect = (lang: LanguageType) => {
    setIsOpen(prev => !prev)
    onChange(lang)
  }

  return (
    <div className="relative flex items-center m-2 px-2 py-1 text-sm rounded-md bg-dark-layer-3 max-w-[100px] text-white overflow-ellipsis cursor-pointer">
        <button className='w-full h-full' onClick={() => setIsOpen(prev => !prev)}>{language}</button>

        {
          isOpen ? (<AiOutlineCaretUp className='h-full' onClick={() => setIsOpen(false)}/>) : (<AiOutlineCaretDown className='h-full' onClick={() => setIsOpen(true)}/>)
        }
        {
          isOpen && <div className='absolute top-5 w-full z-10 bg-dark-layer-2 text-white'>
            {['C', 'CPP', 'Java', 'Python', 'Javascript'].map((lang) => (
                <p key={lang} className='p-2' onClick={() => handleLangSelect(lang as LanguageType)}>{lang}</p>
              ))
            }
          </div>
        }
    </div>
  );
};

export default LanguageSelector;