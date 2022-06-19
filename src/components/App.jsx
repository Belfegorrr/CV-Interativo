import React, { useState, useEffect, createContext } from 'react'
import { useTranslation } from 'react-i18next'
import './global.css'
import Review from './Review'
import ThemeSwitcher from './ThemeSwitcher'
import LanguageSwitcher from './LanguageSwitcher'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark')
  const { t } = useTranslation()

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="wrapper" id={theme}>
        <div>
          <img
            src="./BG41.png"
            className="background"
            alt="background-header"
          />
        </div>
        <div className="escrito">
          <section className="grid">
            <section className="experiencia">
              <div>
                <ThemeSwitcher toggleTheme={toggleTheme} />
              </div>
              <h1 className="titulopontilhado">EXPERIÊNCIA</h1>
              <div className="cardtexto">
                <h3>EMPRESA X</h3>
                <h4>CEO</h4>
                <h4>2011-2011</h4>
                <p>Lorem il dsem </p>
              </div>

              <div className="cardtexto">
                <h3>EMPRESA X</h3>
                <h4>CEO</h4>
                <h4>2011-2011</h4>
                <p>Lorem il dsem </p>
              </div>

              <div className="cardtexto">
                <h3>EMPRESA X</h3>
                <h4>CEO</h4>
                <h4>2011-2011</h4>
                <p>Lorem il dsem </p>
              </div>

              <div>
                <h1 className="titulopontilhado">RECURSOS</h1>
                <ul className="listaesquerda">
                  <li className="item">
                    Illustrator
                    <img src="./cheio.png" alt="nivel1" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./cheio.png" alt="nivel3" />
                    <img src="./vazio.png" alt="nivel4" />
                    <img src="./vazio.png" alt="nivel5" />
                  </li>
                  <li className="item">
                    ReactJS
                    <img src="./cheio.png" alt="nivel1" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./cheio.png" alt="nivel3" />
                    <img src="./meio.png" alt="nivel4" />
                    <img src="./vazio.png" alt="nivel5" />
                  </li>
                  <li className="item">
                    JavaScript
                    <img src="./cheio.png" alt="nivel1" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./cheio.png" alt="nivel3" />
                    <img src="./meio.png" alt="nivel4" />
                    <img src="./vazio.png" alt="nivel5" />
                  </li>
                  <li className="item">
                    React Test Lib
                    <img src="./cheio.png" alt="nivel1" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./vazio.png" alt="nivel3" />
                    <img src="./vazio.png" alt="nivel4" />
                    <img src="./vazio.png" alt="nivel5" />
                  </li>
                  <li className="item">
                    SCRUM
                    <img src="./cheio.png" alt="nivel1" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./cheio.png" alt="nivel3" />
                    <img src="./vazio.png" alt="nivel4" />
                    <img src="./vazio.png" alt="nivel5" />
                  </li>
                  <li className="item">
                    PHP
                    <img src="./cheio.png" alt="nivel1" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./vazio.png" alt="nivel3" />
                    <img src="./vazio.png" alt="nivel4" />
                    <img src="./vazio.png" alt="nivel5" />
                  </li>
                </ul>
              </div>
            </section>
            <section className="meio">
              <img src="./iago31.png" className="foto-cv" alt="foto-perfil" />
              <h1 className="nomecv">IAGO PELICHEK BEZERRA</h1>
              <h4 className="cargo">DEV FRONT-END</h4>
              <p className="paragrafomeio">
                Hi, As a developer, I had a brief experience with Mariano
                supermarket. In this opportunity, I was hired as an intern and
                had a lot of contact with C++, PHP, Laravel. I started my
                studies at Alura, and I've been focused on HTML, CSS,
                Javascript, Angular, React, and other front-end tools and
                evolving myself in a Full Stack career. I will graduate in
                Mechanical Engineering, but I will focus on the developer
                profession; use all my experiences gained with internship,
                extension project, and Final paper to seek my first experiences
                as a Front-end.
              </p>

              <h1 className="pontilhadoend">ENDEREÇO:</h1>
              <p>Floresta - Joinville/ SC</p>

              <h1>TELEFONE:</h1>
              <p>(47) 98800-3197</p>

              <h1>E-MAIL:</h1>
              <p className="pontilhadobottom">pelichek.iago@gmail.com</p>
            </section>
            <section className="educacao">
              <div>
                <LanguageSwitcher />
              </div>
              <h1 className="titulopontilhado">EDUCAÇÃO</h1>

              <div className="cardeducacao">
                <h3>EMPRESA X</h3>
                <h4>CEO</h4>
                <h4>2011-2011</h4>
                <p>Lorem il dsem </p>
              </div>

              <div className="cardeducacao">
                <h3>EMPRESA X</h3>
                <h4>CEO</h4>
                <h4>2011-2011</h4>
                <p>Lorem il dsem </p>
              </div>

              <div className="cardeducacao">
                <h3>EMPRESA X</h3>
                <h4>CEO</h4>
                <h4>2011-2011</h4>
                <p>Lorem il dsem </p>
              </div>

              <div>
                <h1 className="titulopontilhado">HABILIDADES</h1>
                <ul className="listadireita">
                  <li className="item">
                    <img src="./vazio.png" alt="nivel5" />
                    <img src="./meiod.png" alt="nivel4" />
                    <img src="./cheio.png" alt="nivel3" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./cheio.png" alt="nivel1" />
                    Comunicação
                  </li>
                  <li className="item">
                    <img src="./vazio.png" alt="nivel4" />
                    <img src="./vazio.png" alt="nivel5" />
                    <img src="./cheio.png" alt="nivel3" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./cheio.png" alt="nivel1" />
                    Trabalho em equipe
                  </li>
                  <li className="item">
                    <img src="./vazio.png" alt="nivel4" />
                    <img src="./vazio.png" alt="nivel5" />
                    <img src="./cheio.png" alt="nivel3" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./cheio.png" alt="nivel1" />
                    Gerenciamento de projeto
                  </li>
                  <li className="item">
                    <img src="./vazio.png" alt="nivel5" />
                    <img src="./meiod.png" alt="nivel4" />
                    <img src="./cheio.png" alt="nivel3" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./cheio.png" alt="nivel1" />
                    Gerência de tempo
                  </li>
                  <li className="item">
                    <img src="./vazio.png" alt="nivel4" />
                    <img src="./vazio.png" alt="nivel5" />
                    <img src="./cheio.png" alt="nivel3" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./cheio.png" alt="nivel1" />
                    Organização
                  </li>
                  <li className="item">
                    <img src="./vazio.png" alt="nivel5" />
                    <img src="./meiod.png" alt="nivel4" />
                    <img src="./cheio.png" alt="nivel3" />
                    <img src="./cheio.png" alt="nivel2" />
                    <img src="./cheio.png" alt="nivel1" />
                    Autonomia
                  </li>
                </ul>
              </div>
            </section>
          </section>
        </div>
        <Review />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
