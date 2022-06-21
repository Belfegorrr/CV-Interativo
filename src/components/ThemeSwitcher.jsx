import React from 'react'

const ThemeSwitcher = ({ toggleTheme }) => {
  return (
    <div className="botaoestheme">
      <button className="buttondark" onClick={toggleTheme}>
        <img src="https://s4.aconvert.com/convert/p3r68-cdx67/aqgr3-kn454.svg" alt="themedark" />
      </button>
      <button className="buttonlight" onClick={toggleTheme}>
        <img src="https://s4.aconvert.com/convert/p3r68-cdx67/aim0s-b2duw.svg" alt="themelight" />
      </button>
    </div>
  )
}

export default ThemeSwitcher
