import express from 'express'
import { getHome, createGroup } from '../controllers/home.js'

const router = express.Router()

router.get('/', getHome)
router.post('/', createGroup)

export default router