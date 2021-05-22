import Group from '../models/Group.js'

export const getGroups = async (req, res) => {
    
    try {
        const groups = await Group.find()

        res.status(200).json(groups)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createGroup = async (req, res) => {
   const group = req.body 

   const newGroup = new Group(group)

    try {
        await newGroup.save()
        res.status(201).json(newGroup)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}