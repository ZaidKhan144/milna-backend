
import mongoose from 'mongoose'
import Group from '../models/Group.js'

export const getGroups = async (req, res) => {
    
    try {
        // find all the groups 
        const groups = await Group.find()
        // Send them in response
        res.status(200).json(groups)

    } catch (error) {
        // In case it didn't work out
        res.status(404).json({ message: error.message })
    }
}

export const getGroup = async (req, res) => {
    // Route parameters are named URL segments that are used to capture the values specified at their position in the URL.
    // Deconstructing it so that we can use it. It's like unpacking it.
    const { id } = req.params

    try {
        // finding a group by it's Id
        const group = await Group.findById(id)
        // Send it in response
        res.status(200).json(group)

    } catch (error) {
        // In case it didn't work out
        res.status(404).json({ message: error.message })
    }
}

export const createGroup = async (req, res) => {

    // getting data from the form
   const group = req.body 

   // Creating a new group with the group data
   const newGroup = new Group(group)

    try {
        // will creates a new group
        await newGroup.save()
        // Send it in response
        res.status(201).json(newGroup)
    } catch (error) {
        // In case it didn't work out
        res.status(409).json({ message: error.message })
    }
}

export const updateGroup = async (req, res) => {

    // Deconstructing _id parameter
    const { id: _id } = req.params
    // getting updated data
    const group = req.body

    // checking if _id is mongoose object Id or not
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

    // findByIdAndUpdate takes three parammeters: id, the group, and optional boolean new (it will
    // give the object after update)
    const updatedGroup = await Group.findByIdAndUpdate(id, group, { new: true })
    // Send it in response
    res.json(updatedGroup)
}
