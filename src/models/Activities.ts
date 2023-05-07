const activitySchema = new Schema({
    activityID: String,
    activityName: String,
    likes: {
        type: String,
        default: "0",
    },
    approved: {
        default: true,
        type: String,
    },
    activityImages: {
        default: [],
        type: Array,
    },
    timeline: String,
    reminder: {
        default: false,
        type: Boolean,
    },
    status: {
        default: true,
        type: Boolean
    },
    activeParticipants: {
        default: "0",
        type: String,
    },
    activityDescription: String,
    createdBy: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
})
module.exports = mongoose.model("activities", activitySchema);
