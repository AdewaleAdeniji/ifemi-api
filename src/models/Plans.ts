const planSchema = new Schema({
  planID: String,
  planName: String,
  isSample: {
    default: false,
    type: Boolean,
  },
  status: {
    default: true,
    type: Boolean,
  },
  planners: {
    default: "0",
    type: String,
  },
  planDescription: String,
  createdBy: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("plans", planSchema);
