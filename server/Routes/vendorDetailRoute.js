const express = require("express");
const {
  createVendorDetail,
  updateVendorDetail,
  deleteVendorDetail,
  displayVendorDetails,
  displayVendorDetailById,
} = require("../controllers/vendorDetail");

const router = express.Router();

// Route to create a new vendor detail
router.post("/createVendor", createVendorDetail);

// Route to update a vendor detail by ID
router.put("/updateVendor/:id", updateVendorDetail);

// Route to delete a vendor detail by ID
router.delete("/deleteVendor/:id", deleteVendorDetail);

// Route to display all vendor details
router.get("/displayVendor", displayVendorDetails);

// Route to display a vendor detail by ID
router.get("/displayVendorById/:id", displayVendorDetailById);

module.exports = router;