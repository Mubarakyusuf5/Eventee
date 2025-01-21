const VendorDetail = require("../models/vendorDetailModel");

// Create Vendor Detail
const createVendorDetail = async (req, res) => {
  try {
    const {
      vendorId,
      businessName,
      description,
      phone,
      email,
      state,
      service,
    } = req.body;

    const exist = VendorDetail .findOne({email})
    if(exist){
      return res.status(400).json({
        message: "Email already exist",
        // data: newVendorDetail,
      });
    }
    // Create a new VendorDetail document
    const newVendorDetail = await VendorDetail.create({
      vendorId,
      businessName,
      description,
      phone,
      email,
      state,
      service,
    //   isVerified: false, // Default value if not provided
    });


    return res.status(201).json({
      message: "Vendor detail created successfully",
      data: newVendorDetail,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while creating vendor detail",
    //   error: error.message,
    });
  }
};

// Update Vendor Detail
const updateVendorDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedVendorDetail = await VendorDetail.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
    //   runValidators: true, // Run schema validations
    });

    if (!updatedVendorDetail) {
      return res.status(404).json({ message: "Vendor detail not found" });
    }

    return res.status(200).json({
      message: "Vendor detail updated successfully",
      data: updatedVendorDetail,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while updating vendor detail",
      error: error.message,
    });
  }
};

// Delete Vendor Detail
const deleteVendorDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedVendorDetail = await VendorDetail.findByIdAndDelete(id);

    if (!deletedVendorDetail) {
      return res.status(404).json({ message: "Vendor detail not found" });
    }

    return res.status(200).json({
      message: "Vendor detail deleted successfully",
      data: deletedVendorDetail,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while deleting vendor detail",
      error: error.message,
    });
  }
};

// Display All Vendor Details
const displayVendorDetails = async (req, res) => {
  try {
    const vendorDetails = await VendorDetail.find();

    return res.status(200).json({
      message: "Vendor details fetched successfully",
      data: vendorDetails,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while fetching vendor details",
      error: error.message,
    });
  }
};

// Display Vendor Detail by ID
const displayVendorDetailById = async (req, res) => {
  try {
    const { id } = req.params;

    const vendorDetail = await VendorDetail.findById(id);

    if (!vendorDetail) {
      return res.status(404).json({ message: "Vendor detail not found" });
    }

    return res.status(200).json({
      message: "Vendor detail fetched successfully",
      data: vendorDetail,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while fetching vendor detail",
      error: error.message,
    });
  }
};

module.exports = {
  createVendorDetail,
  updateVendorDetail,
  deleteVendorDetail,
  displayVendorDetails,
  displayVendorDetailById,
};
