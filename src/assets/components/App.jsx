import React, { useState, useEffect } from 'react'
import './global.css'

function App() {
  return (
    <div className='escrito'>
      <div>
        <section className="grid">
          <section className='experiencia'>
            <h1>EXPERIÊNCIA</h1>
          </section>
          <section className='meio'>
            <h1>Iago Pelichek Bezerra</h1>
            <h4 className='cargo'>Desenvolvedor Front-End</h4>
            <p>
              Hi, As a developer, I had a brief experience with Mariano
              supermarket. In this opportunity, I was hired as an intern and had
              a lot of contact with C++, PHP, Laravel. I started my studies at
              Alura, and I've been focused on HTML, CSS, Javascript, Angular,
              React, and other front-end tools and evolving myself in a Full
              Stack career. I will graduate in Mechanical Engineering, but I
              will focus on the developer profession; use all my experiences
              gained with internship, extension project, and Final paper to seek
              my first experiences as a Front-end.
            </p>
          </section>
          <section className='educacao'>
            <h1>EDUCAÇÃO</h1>
          </section>
        </section>
      </div>
    </div>
  )
}

export default App
