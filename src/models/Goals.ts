const goalSchema = new Schema({
    goalID: String,
    goalName: String,
    isSample: {
        default: false,
        type: Boolean,
    },
    status: {
        default: true,
        type: Boolean
    },
    timeline: String,
    goalers: {
        default: "0",
        type: String,
    },
    goalDescription: String,
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
module.exports = mongoose.model("goals", goalSchema);
