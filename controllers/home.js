import CreateGroup from '../models/CreateGroup.js'

export const getHome = async (req, res) => {
    
    try {
        const createGroup = await CreateGroup.find()

        res.status(200).json(createGroup)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createGroup = async (req, res) => {
   const group = req.body 

   const newGroup = new createGroup(group)

    try {
        await newGroup.save()
        res.status(201).json(newGroup)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}