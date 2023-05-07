const datesSchema = new Schema({
    createdBy: String,
    dateType: String,
    dateID: String,
    dateTitle: String,
    timeline: String,
    sendReminder: {
        type: Boolean,
        default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  });
  module.exports = mongoose.model("importantDates", datesSchema);
  