import React from 'react'

import themelight from "../../public/static/themelight.png"
import themedark from "../../public/static/themedark.png"

const ThemeSwitcher = ({ toggleTheme }) => {
  return (
    <div className="botaoestheme">
      <button className="buttondark" onClick={toggleTheme}>
        <img src={themelight} alt="themedark" />
      </button>
      <button className="buttonlight" onClick={toggleTheme}>
        <img src={themedark} alt="themelight" />
      </button>
    </div>
  )
}

export default ThemeSwitcher
