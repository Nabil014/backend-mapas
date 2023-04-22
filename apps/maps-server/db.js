const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(
  'mongodb+srv://accessmapdev:XQemFPGI60FkWEgS@cluster0.faqx0b7.mongodb.net/?retryWrites=true&w=majority'
)
