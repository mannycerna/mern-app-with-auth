const asyncHandler = require('express-async-handler')

const Blog = require('../models/blogModel')
const User = require('../models/userModel')
// const blogModel = require('../models/blogModel')

// @desc    Get blog
// @route   GET /api/blogs
// @access  Private
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({ user: req.user.id })

  res.status(200).json(blogs)
})

// @desc    Set blog
// @route   POST /api/blogs
// @access  Private
const setBlog = asyncHandler(async (req, res) => {
  if (!req.body.title, !req.body.text, !req.body.author, !req.body.year) {
    res.status(400)
    throw new Error('Please add required fields: title, text, author, and year')
  }

  const blog = await Blog.create({
    title:req.body.title,
    text: req.body.text,
    author: req.body.author,
    categories: req.body.categories,
    year: req.body.year,
    user: req.user.id,
  })

  res.status(200).json(blog)
})

// @desc    Update blog
// @route   PUT /api/blogs/:id
// @access  Private
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)

  if (!blog) {
    res.status(400)
    throw new Error('Blog not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the blog user
  if (blog.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedBlog)
})

// @desc    Delete blog
// @route   DELETE /api/blogs/:id
// @access  Private
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)

  if (!blog) {
    res.status(400)
    throw new Error('Blog not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the blog user
  if (blog.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await blog.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
}
