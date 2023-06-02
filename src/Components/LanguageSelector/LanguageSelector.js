import React, { useContext } from 'react'
import { LanguageContext } from '../../containers/Language'
import './languageSelector.scss'
export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)

  // set selected language by calling context method
  const handleLanguageChange = (e) => {
    userLanguageChange(e.target.getAttribute('data-lang'))
    window.location.reload(false)
  }

  return (
    <>
      <button
        className='language-selector-link text-muted'
        data-lang={userLanguage === 'en' ? 'ar' : 'en'}
        onClick={handleLanguageChange}
      >
        {userLanguage === 'en' ? 'ع' : 'En'}
      </button>
    </>
  )
}
