import mongoose from 'mongoose'

export const schema = {
  title: {
    type: String,
    required: [true, 'Song requires a title']
  },
  url: {
    type: String,
    unique: true,
    required: [true, 'Url required']
  },
  album: String,
  artist: String,
  rating: {
    type: Number
  },
  favorite: {
    type: Boolean
  },
}

const songSchema = new mongoose.Schema(schema)

export const Song = mongoose.model('song', songSchema)
