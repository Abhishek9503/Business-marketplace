// ConsultationForm.jsx
import React from 'react';

const ConsultationForm = () => {
  return (
    <div className="bg-blue-900 bg-opacity-60  text-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
      <h2 className="text-xl font-semibold mb-4">Get a Free Consultation</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-200">Full Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-100 text-gray-900"
            placeholder="Your Full Name"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-200">Email Address</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-100 text-gray-900"
            placeholder="Your Email Address"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-200">Phone Number</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-100 text-gray-900"
            placeholder="Your Phone Number"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-200">Business Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-100 text-gray-900"
            placeholder="Your Business Name"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
        >
          Get a Free Quote
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
