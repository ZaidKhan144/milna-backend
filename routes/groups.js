import express from 'express'
import { getGroups, createGroup, getGroup } from '../controllers/groups.js'

const router = express.Router()

router.get('/', getGroups)
router.get('/:id', getGroup)
router.post('/', createGroup)

export default router