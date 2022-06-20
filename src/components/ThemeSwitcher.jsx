import React from 'react'

const ThemeSwitcher = ({ toggleTheme }) => {
  return (
    <div className="botaoestheme">
      <button className="buttondark" onClick={toggleTheme}>
        <img src="bgpreto.png" alt="themedark" />
      </button>
      <button className="buttonlight" onClick={toggleTheme}>
        <img src="bgbranco.png" alt="themelight" />
      </button>
    </div>
  )
}

export default ThemeSwitcher
