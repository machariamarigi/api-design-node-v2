import express from 'express'
import { userRouter } from './resources/user'
import { songRouter } from './resources/song'
import { playlistRouter } from './resources/playlist'

export const restRouter = express.Router()

restRouter.use('/users', userRouter);
restRouter.use('/songs', songRouter);
restRouter.use('/playlists', playlistRouter);
