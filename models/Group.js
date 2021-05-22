import mongoose from 'mongoose'

const groupSchema = mongoose.Schema({
    groupName: String,
    location: String,
    organizer: String,
    description: String,
    members: String,
    selectedFile: String
})

const Group = mongoose.model('Group', groupSchema)

export default Group

