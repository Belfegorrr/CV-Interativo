import React from 'react'
import { useTranslation } from 'react-i18next'
import br from '../../public/static/br.svg'
import us from '../../public/static/us.svg'

const languageOptions = [
  {
    name: 'Portugues',
    value: 'ptBR',
    flag: br
  },
  {
    name: 'English',
    value: 'en',
    flag: us
  }
]
const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className="laguage-switcher">
      {languageOptions.map(languageOptions => (
        <button
          className="button-flag"
          key={languageOptions.value}
          onClick={() => {
            i18n.changeLanguage(languageOptions.value)
          }}
        >
          <img
            className="bandeiras"
            src={languageOptions.flag}
            alt={languageOptions.name}
          />
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
