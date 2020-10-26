/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactDOM from 'react-dom'

// Css
import './index.css'

// Setup vars
const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL115_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 2,
    img:
      'https:m.media-amazon.com/images/I/51fIRNMUHzL._BG0,0,0,0_FMpng_AC_SY160_SX160_.jpg',
    title: 'Little one',
    author: 'Ariel Andres Almada',
  },
  {
    id: 3,
    img:
      'https://m.media-amazon.com/images/S/aplus-media/vc/b04cf5d6-1bd4-4bde-99f7-11221fcab115._SL300__.jpg',
    title: 'Guess How Much I Love You',
    author: 'Sam Mcbratney',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props.book

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
