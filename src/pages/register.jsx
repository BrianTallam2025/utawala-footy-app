import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    ageBracket: '',
    preferredPosition: '',
    preferredFoot: '',
    height: '',
    weight: '',
    nationality: '',
    previousClubs: '',
    contactNumber: '',
    email: '',
    profilePictureUrl: '',
    additionalNotes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://utawala-footy-app.onrender.com/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Player registered successfully!');
        setFormData({
          firstName: '', lastName: '', dateOfBirth: '', ageBracket: '', preferredPosition: '', preferredFoot: '', height: '', weight: '', nationality: '', previousClubs: '', contactNumber: '', email: '', profilePictureUrl: '', additionalNotes: ''
        });
        toast.success('Player registered successfully!', {
          style: { backgroundColor: '#C8E6C9', color: '#1B5E20' }, 
        });
      } else {
        console.error('Failed to register player:', response.status);
        toast.error('Failed to register player.'); 
      }
    } catch (error) {
      console.error('Error registering player:', error);
      toast.error('Error registering player.'); 
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" style={{ paddingTop: '64px' }}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Footballer Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="ageBracket" className="block text-gray-700 text-sm font-bold mb-2">Age Bracket:</label>
            <select id="ageBracket" name="ageBracket" value={formData.ageBracket} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="">Select Age Bracket</option>
              <option value="Under 10">Under 10</option>
              <option value="10-12">10-12</option>
              <option value="13-15">13-15</option>
              <option value="16-18">16-18</option>
              <option value="19-23">19-23</option>
              <option value="24+">24+</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="preferredPosition" className="block text-gray-700 text-sm font-bold mb-2">Preferred Position:</label>
            <select id="preferredPosition" name="preferredPosition" value={formData.preferredPosition} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="">Select Position</option>
              <option value="Goalkeeper">Goalkeeper</option>
              <option value="Centre-Back">Centre-Back</option>
              <option value="Left-Back">Left-Back</option>
              <option value="Right-Back">Right-Back</option>
              <option value="Sweeper">Sweeper</option>
              <option value="Central Midfielder">Central Midfielder</option>
              <option value="Defensive Midfielder">Defensive Midfielder</option>
              <option value="Attacking Midfielder">Attacking Midfielder</option>
              <option value="Left Midfielder">Left Midfielder</option>
              <option value="Right Midfielder">Right Midfielder</option>
              <option value="Centre-Forward">Centre-Forward</option>
              <option value="Striker">Striker</option>
              <option value="Left Winger">Left Winger</option>
              <option value="Right Winger">Right Winger</option>
              <option value="Second Striker">Second Striker</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="preferredFoot" className="block text-gray-700 text-sm font-bold mb-2">Preferred Foot:</label>
            <select id="preferredFoot" name="preferredFoot" value={formData.preferredFoot} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="">Select Preferred Foot</option>
              <option value="Right">Right</option>
              <option value="Left">Left</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-2">Height (cm):</label>
            <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">Weight (kg):</label>
            <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="nationality" className="block text-gray-700 text-sm font-bold mb-2">Nationality:</label>
            <input type="text" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="previousClubs" className="block text-gray-700 text-sm font-bold mb-2">Previous Clubs (Optional, comma-separated):</label>
            <input type="text" id="previousClubs" name="previousClubs" value={formData.previousClubs} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-bold mb-2">Contact Number:</label>
            <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-6">
            <label htmlFor="profilePictureUrl" className="block text-gray-700 text-sm font-bold mb-2">Profile Picture URL:</label>
            <input type="url" id="profilePictureUrl" name="profilePictureUrl" value={formData.profilePictureUrl} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="additionalNotes" className="block text-gray-700 text-sm font-bold mb-2">Additional Notes (Optional):</label>
            <textarea id="additionalNotes" name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
        </form>
      </div>
      <p className="mt-4 text-center text-gray-500 text-xs">© 2025 Utawala Academy™. All Rights Reserved.</p>
    </div>
  );
}

export default Register;