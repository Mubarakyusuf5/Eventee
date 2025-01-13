const mongoose = require("mongoose");

// Contact Subschema
const ContactSchema = new mongoose.Schema({
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Socials Subschema
const SocialsSchema = new mongoose.Schema({
  instagram: { type: String },
  facebook: { type: String },
  tiktok: { type: String },
});

const VendorDetailSchema = new mongoose.Schema(
  {
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    businessName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    contact: ContactSchema, // Embedded Contact Schema
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    services: [
      {
        name: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Services",
          required: true,
        },
      },
    ],
    socials: SocialsSchema, // Embedded Socials Schema
    cac: {
      type: String,
      required: true,
    },
    nin: {
      type: Number,
      required: true,
      min: 0,
      max: 11,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("VendorDetail", VendorDetailSchema);
