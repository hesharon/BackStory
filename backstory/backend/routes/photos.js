const express = require('express')
const router = express.Router()
const mongodb = require("mongodb")
const mongoose = require("mongoose")
const { conn } = require('../db/connection')
const Grid = require('gridfs-stream')

let gfs, gridfsBucket
conn.once('open', () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads'
  })

  gfs = Grid(conn.db, mongoose.mongo)
  gfs.collection('uploads')
})

// @route GET /photos/:id/image
// @desc Get image uri of photo with :id
router.get('/:id/image', (req, res) => {
  try {
    const objectId = new mongodb.ObjectId(req.params.id)
    const readstream = gridfsBucket.openDownloadStream(objectId)

    readstream.pipe(res)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
