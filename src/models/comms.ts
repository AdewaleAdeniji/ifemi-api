const commSchema = new Schema({
    createdBy: String,
    commID: String,
    isPublic: {
        type: Boolean,
        default: true,
    },
    communityName: String,
    communityDescription: String,
    communers: {
        type: String,
        default: "0",
    },
    admins: [],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  });
  module.exports = mongoose.model("comms", commSchema);
  