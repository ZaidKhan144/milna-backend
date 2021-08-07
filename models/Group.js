import mongoose from 'mongoose'

const groupSchema = mongoose.Schema({
    groupName: String,
    location: String,
    organizer: String,
    description: String,
    members: {
        type: Number,
        default: 0,
    },
    selectedFile: String,
})

const Group = mongoose.model('Group', groupSchema)

export default Group

