import React from 'react'

export const Book = ({ img, title, author }) => {
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button
        type='button'
        onClick={() => {
          alert('Hello!')
        }}
      >
        Reference ex
      </button>
    </article>
  )
}

export default Book
