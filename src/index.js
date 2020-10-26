/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactDOM from 'react-dom'

// Css
import './index.css'

import { books } from './books'
import Book from './Book'

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
