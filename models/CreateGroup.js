import mongoose from 'mongoose'

const groupSchema = mongoose.Schema({
    title: String,
    location: String,
    organizer: String,
    description: String,
    members: String,
    selectedFile: String
})

const CreateGroup = mongoose.model('CreateGroup', groupSchema)

export default CreateGroup

