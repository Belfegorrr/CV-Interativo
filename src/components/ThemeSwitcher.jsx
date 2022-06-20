import React from 'react'

const ThemeSwitcher = ({ toggleTheme }) => {
  return (
    <div className="botaoestheme">
      <button className="buttondark" onClick={toggleTheme}>
        <img src="https://s4.aconvert.com/convert/p3r68-cdx67/a7v6x-s46fw.svg" alt="themedark" />
      </button>
      <button className="buttonlight" onClick={toggleTheme}>
        <img src="https://s4.aconvert.com/convert/p3r68-cdx67/a25a1-fli11.svg" alt="themelight" />
      </button>
    </div>
  )
}

export default ThemeSwitcher
