import { useDispatch } from 'react-redux'
import { deleteBlog } from '../features/blogs/blogSlice'

function BlogItem({ blog }) {
  const dispatch = useDispatch()

  return (
    <div className='blog'>
      <div>{new Date(blog.createdAt).toLocaleString('en-US')}</div>
      <h2>{blog.title}</h2>
      <p>{blog.text}</p>
      <p>{blog.author}</p>
      <p>{blog.year}</p>
      <p>{blog.categories}</p>
      <button onClick={() => dispatch(deleteBlog(blog._id))} className='close'>
        X-Delete
      </button>
    </div>
  )
}

export default BlogItem