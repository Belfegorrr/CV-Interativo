import React from "react";
import { useTranslation } from "react-i18next";
import br from '../../public/br.svg'
import us from '../../public/us.svg'

const languageOptions = [
  {
    name: 'Portugues',
    value: "ptBR",
    flag: br
  },
  {
    name: 'English',
    value: 'en',
    flag: us
  },
]

const LanguageSwitcher = () => {
  const {t, i18n} = useTranslation();

  return (
    <div className="laguage-switcher">
      <span>{t('selectYourLaguage')}</span>
      {languageOptions.map(languageOptions => (
        <button
        key={languageOptions.value} 
        onClick={() => {
          i18n.changeLanguage(languageOptions.value)
        }}>
          <img src={languageOptions.flag} alt={languageOptions.name} />
          <span>{languageOptions.name}</span>
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher;