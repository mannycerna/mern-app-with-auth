import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../features/blogs/blogSlice'

function BlogForm() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')
  const [categories, setCategories] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createBlog({ title, text, author, year, categories }))
    setTitle('')
    setText('')
    setAuthor('')
    setYear('')
    setCategories('')
    
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            name='author'
            id='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label htmlFor='year'>Year</label>
          <input
            type='number'
            name='year'
            id='year'
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <label htmlFor='categories'>Categories</label>
          <input
            type='text'
            name='categories'
            id='categories'
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Blog
          </button>
        </div>
      </form>
    </section>
  )
}

export default BlogForm
