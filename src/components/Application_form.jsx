import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const AdmissionForm = ({ isVisible, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: ""
  });

  if (!isVisible) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert("Form submitted successfully!");
        // Optionally, you can reset the form or navigate to another page
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          course: ""
        });
        onClose();
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-8 max-sm:px-2">
      <div className="w-full max-w-3xl p-8 space-y-8 bg-white rounded-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-gray-500 hover:text-gray-700 h-12 w-12 scale-125"
        >
          &times;
        </button>

        {/* Top Navbar */}
        <div className="flex justify-between items-center p-0 border-b-2 border-gray-200">
          <img src={logo} alt="logo" className="h-10" />
          <ul className="flex gap-5">
            <li className="cursor-pointer" onClick={onClose}>
              Home
            </li>
            <li>Life@</li>
            <li>Placements</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-center" style={{ color: '#FF7162' }}>
          Application Form For Admission
        </h2>

        <p className="text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email ID
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Email ID"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label htmlFor="course" className="sr-only">
                Preferred Course
              </label>
              <input
                id="course"
                name="course"
                type="text"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Please type the prefered course"
              >
              </input>
            </div>
          </div>
          <div className="w-full px-10 py-2 rounded-full w-48 p-2 max-md:hidden" style={{ backgroundColor: "#FF7162" }}>
            <button
              type="submit"
              className="text-center w-full text-black font-semibold"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
