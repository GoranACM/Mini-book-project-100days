import React from 'react'

export const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button
        type='button'
        onClick={() => {
          alert('Hello!')
        }}
      >
        Reference
      </button>
    </article>
  )
}

export default Book
