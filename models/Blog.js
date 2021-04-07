import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  title: String,
  body: String,
  likes: Number
})

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema)