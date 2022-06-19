import React from 'react'

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'UX/UI Designer',
      img: '../../public/muje2.png',
      text: '"Lorem ipsum  Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum."'
    },
    {
      id: 2,
      name: 'Peter Jones',
      job: 'Web Developer',
      img: '../../public/home1.png',
      text: '"Ut enim Ut enim Ut enim Ut enim Ut enim Ut enim Ut enim Ut enim Ut enim Ut enim ."'
    },
    {
      id: 3,
      name: 'Anna Johnson',
      job: 'CEO',
      img: '../../public/muje1.png',
      text: '"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem."'
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'The Boss',
      img: '../../public/home2.png',
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
    <div className='reviewdiv'>
      <div className='reviewtitle'>
        <h2>Comentários</h2>
      </div>
      <article className="review">
        <div className="img-container">
          <img
            className="avatar"
            src="../../public/muje1.png"
            alt=""
            id="person-img"
          />
        </div>
        <h4 id="author">Sara Jones</h4>
        <p  className='paragraforevie' id="job">UX Desingner</p>
        <p  className='paragraforeview' id="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="button-container">
          <button className="next-btn">
            <img className='btn' src="../../public/arrowe.png" alt="Seta esquerda" />
          </button>
          <button className="prev-btn">
            <img className='btn' src="../../public/arrowd.png" alt="Seta direita" />
          </button>
        </div>
      </article>
    </div>
  )
}

export default Review
