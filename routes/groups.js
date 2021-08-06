import express from 'express'
import { getGroups, createGroup, getGroup, updateGroup, deleteGroup } from '../controllers/groups.js'

const router = express.Router()

router.get('/', getGroups)
router.get('/:id', getGroup)
router.post('/', createGroup)
// we use patch for update
router.patch('/:id', updateGroup)
router.delete('/:id', deleteGroup)

export default router