import React, { useState } from "react";
import { States } from "../src/Data";

export const CompleteDetailsPage = () => {
  const role = "Vendor";

  console.log(States);

  // State for form data
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phoneNumber: "",
    serviceCategories: [],
    customCategory: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // Handle multi-select changes
  const handleCategoryChange = (e) => {
    const options = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, serviceCategories: options });
  };

  return (
    <div className="md:py-6 md:px-10 font-poppins text-zinc-800 bg-gray-300 min-h-screen">
      <div className="flex items-center justify-center flex-col">
        <form
          onSubmit={handleSubmit}
          className=" transition-all duration-300 w-full md:w-[600px] bg-white p-6 md:rounded-xl md:border"
        >
          <h1 className="font-medium text-2xl">Eventee</h1>
          <div className="mt-7 mb-5">
            <h1 className="font-medium text-3xl">Welcome</h1>
            <p className="text-sm">Let us know more about yourself</p>
          </div>
          <h1 className="font-medium text-2xl mb-3">Business Details</h1>
          {/* organizer details */}
          {role === "Organizer" && (
            <div>
              <div className="mb-3">
                <label htmlFor="" className="">
                  Organizer Name
                </label>
                <input
                  type="text"
                  className="p-2 border w-full rounded-md"
                  placeholder="Enter Organizer name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="">
                  Email (optional){" "}
                </label>
                <input
                  type="text"
                  className="p-2 border w-full rounded-md"
                  placeholder="Enter Organizer name"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="" className="">
                  Describe the Events You Plan to Host
                </label>
                <textarea
                  name=""
                  id=""
                  rows="5"
                  className="w-full border rounded-md p-2"
                  placeholder="E.g., Corporate conferences, weddings, or charity fundraisers."
                ></textarea>
                {/* <input type="text" className="p-2 border w-full rounded-md" placeholder="Enter Organizer name" /> */}
              </div>

              {/* Account details */}
              <h1 className="font-medium text-2xl mb-3">Account Details</h1>
              <div className="mb-3">
                <label htmlFor="" className="">
                  Bank Name
                </label>
                <select name="" id="" className="w-full p-2 border rounded-md">
                  <option value="">Selct your bank</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="" className="">
                  Account Holder's Full Name"
                </label>
                <input
                  type="text"
                  className="p-2 border w-full rounded-md"
                  placeholder="Enter Organizer name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="">
                  Account Number
                </label>
                <input
                  type="text"
                  className="p-2 border w-full rounded-md"
                  placeholder="Enter Organizer name"
                />
              </div>
            </div>
          )}

          {/* For vendor details */}
          {role === "Vendor" && (
            <div>
              <div className="mb-3">
                <label htmlFor="businessName" className="">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="p-2 border w-full rounded-md"
                  placeholder="Enter Business name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="p-2 border w-full rounded-md"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNumber" className="">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="p-2 border w-full rounded-md"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="">
                  State
                </label>
                <select name="" id="" className="w-full p-2 border rounded-md">
                  <option value="" disabled>
                    select your state
                  </option>
                  {States.map((state, index) => (
                    <option key={index} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* <div className="mb-3">
              <label>
              Service Categories:
              <select
              name="serviceCategories"
              value={formData.serviceCategories}
              onChange={handleCategoryChange}
              multiple
              className="p-2 border w-full rounded-md"
                >
                <option value="catering">Catering</option>
                <option value="decoration">Decoration</option>
                <option value="rentals">Rentals</option>
                <option value="photography">Photography</option>
                <option value="entertainment">Entertainment</option>
                </select>
              </label>
              </div> */}
              {formData.serviceCategories.includes("other") && (
                <div className="mb-3">
                  <label htmlFor="customCategory" className="">
                    Custom Category:
                  </label>
                  <input
                    type="text"
                    name="customCategory"
                    value={formData.customCategory}
                    onChange={handleInputChange}
                    className="p-2 border w-full rounded-md"
                    placeholder="Enter custom category"
                  />
                </div>
              )}
              {/* <div>
                <label htmlFor="image">Portfolio (Images of Past Work):</label>
                <input
                  className="p-2 w-full"
                  type="file"
                  name="portfolio"
                  id="image"
                  // onChange={handleFileChange}
                  accept="image/*"
                  multiple
                />
              </div> */}
            </div>
          )}
          <button className="w-full p-2 bg-slate-500 rounded-md  mt-6 font-medium text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
