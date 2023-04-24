const Comment = require('../models/coments')

postComments = async (req, res) => {
  const { comment } = req.body
  try {
    const newComment = new Comment({
      comment,
    })

    await newComment.save()
    res.status(201).json(newComment)
  } catch (error) {
    console.error(error)
  }
}

module.exports = { postComments }
