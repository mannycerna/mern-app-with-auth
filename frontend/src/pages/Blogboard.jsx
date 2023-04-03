import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BlogForm from '../components/BlogForm'
import BlogItem from '../components/BlogItem'
import Spinner from '../components/Spinner'
import { getBlogs, reset } from '../features/blogs/blogSlice'


function Blogboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { blogs, isLoading, isError, message } = useSelector(
    (state) => state.blogs
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getBlogs())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Blog Board</p>
      </section>

      <BlogForm />

      <section className='content'>
        {blogs.length > 0 ? (
          <div className='blogs'>
            {blogs.map((blog) => (
              <BlogItem key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <h3>You have not created any blogs</h3>
        )}
      </section>
    </>
  )
}

export default Blogboard
