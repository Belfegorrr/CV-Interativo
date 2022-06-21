import React from 'react'

import woman2 from "../../public/static/women.png"
import woman from "../../public/static/w.png"
import man from "../../public/static/m.png"
import mans from "../../public/static/man.png"
import right from "../../public/static/right.png"
import left from "../../public/static/left.png"


const Review = () => {
  const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'UX/UI Designer',
      img: woman2,
      text: '"Lorem ipsum  Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum."'
    },
    {
      id: 2,
      name: 'Peter Jones',
      job: 'Web Developer',
      img: man,
      text: '"Ut enim Ut enim Ut enim Ut enim Ut enim Ut enim Ut enim Ut enim Ut enim Ut enim ."'
    },
    {
      id: 3,
      name: 'Anna Johnson',
      job: 'CEO',
      img: woman,
      text: '"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem."'
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'The Boss',
      img: mans,
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."'
    }
  ]

  window.onload = function () {
    const img = document.getElementById('person-img')
    const author = document.getElementById('author')
    const job = document.getElementById('job')
    const info = document.getElementById('info')
    const prevBtn = document.querySelector('.prev-btn')
    const nextBtn = document.querySelector('.next-btn')
    let currentItem = 0

    function showPerson() {
      const item = reviews[currentItem]
      img.src = item.img
      author.textContent = item.name
      job.textContent = item.job
      info.textContent = item.text
    }

    window.addEventListener('DOMContentLoaded', function () {
      showPerson()
    })

    nextBtn.addEventListener('click', function () {
      currentItem++
      if (currentItem > reviews.length - 1) {
        currentItem = 0
      }
      showPerson()
    })

    prevBtn.addEventListener('click', function () {
      currentItem--
      if (currentItem < 0) {
        currentItem = reviews.length - 1
      }
      showPerson()
    })
  }

  return (
    <div className="reviewdiv">
      <div className="reviewtitle">
        <h2>Review</h2>
      </div>
      <article className="review">
        <div className="img-container">
          <img
            className="avatar"
            src={woman2}
            alt="mulher imagem"
            id="person-img"
          />
        </div>
        <h4 className='reviewname' id="author">Sara Jones</h4>
        <p className="reviewpro" id="job">
          UX Desingner
        </p>
        <p className="paragraforeview" id="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="button-container">
          <button className="next-btn">
            <img
              className="btn"
              src={left}
              alt="Seta esquerda"
            />
          </button>
          <button className="prev-btn">
            <img
              className="btn"
              src={right}
              alt="Seta direita"
            />
          </button>
        </div>
      </article>
    </div>
  )
}

export default Review
