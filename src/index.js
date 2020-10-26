/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Children } from 'react'
import ReactDOM from 'react-dom'

// Css
import './index.css'

// Setup vars
const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL115_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
}

const secondBook = {
  img:
    'https:m.media-amazon.com/images/I/51fIRNMUHzL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg',
  title: 'Little one',
  author: 'Ariel Andres Almada',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
          velit. Laborum quisquam, unde repudiandae minus nobis magnam aliquam
          tempora vitae.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
