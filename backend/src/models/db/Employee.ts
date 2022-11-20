const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    full_name: {
      required: true,
      type: String,
    },
    login_id: {
      required: true,
      type: String,
    },
    salary: {
      required: true,
      type: Number,
    },
    gender: {
      required: true,
      type: String,
      enum: ['Male', 'Female'],
      default: "Male"
    },
    age: {
      type: Number,
      default: 20
    },
    activities: {
      type: Array,
    },
    profile_pic: {
      required: false,
      type: String,
      default: 'https://img.icons8.com/cute-clipart/2x/gender-neutral-user.png'
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

export default mongoose.model('Employee', employeeSchema);
