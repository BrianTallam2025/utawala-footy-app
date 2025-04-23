import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PlayerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`https://utawala-footy-app.onrender.com/players/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlayer(data);
        setEditFormData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditFormData(player);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdatePlayer = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://utawala-footy-app.onrender.com/players/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editFormData),
      });

      if (response.ok) {
        const updatedPlayer = await response.json();
        setPlayer(updatedPlayer);
        setIsEditing(false);
        toast.success('Player updated successfully!', {
          style: { backgroundColor: '#ADD8E6', color: '#1E3A8A' },
        });
      } else {
        console.error('Failed to update player:', response.status);
        toast.error('Failed to update player.');
      }
    } catch (error) {
      console.error('Error updating player:', error);
      toast.error('Error updating player.');
    }
  };

  const handleDeletePlayer = async () => {
    if (isDeleting) return;
    setIsDeleting(true);

    const toastId = toast.loading('Deleting player...', {
      position: "top-right",
      autoClose: false,
      closeButton: false,
    });

    try {
      const response = await fetch(`https://utawala-footy-app.onrender.com/players/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.update(toastId, {
          render: 'Player deleted successfully!',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          closeButton: true,
        });
        setTimeout(() => navigate('/players'), 1000);
      } else {
        toast.update(toastId, {
          render: 'Failed to delete player',
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeButton: true,
        });
      }
    } catch (error) {
      console.error('Error deleting player:', error);
      toast.update(toastId, {
        render: 'Error deleting player',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return <div>Loading player details...</div>;
  }

  if (error) {
    return <div>Error loading player: {error}</div>;
  }

  if (!player) {
    return <div>Player not found.</div>;
  }

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" style={{ paddingTop: '64px' }}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        {isEditing ? (
          <form onSubmit={handleUpdatePlayer}>
            <h2 className="text-2xl font-semibold mb-4">Edit {player.firstName} {player.lastName}'s Profile</h2>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
              <input type="text" id="firstName" name="firstName" value={editFormData.firstName || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
              <input type="text" id="lastName" name="lastName" value={editFormData.lastName || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
              <input type="date" id="dateOfBirth" name="dateOfBirth" value={editFormData.dateOfBirth || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="ageBracket" className="block text-gray-700 text-sm font-bold mb-2">Age Bracket:</label>
              <select id="ageBracket" name="ageBracket" value={editFormData.ageBracket || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
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
              <select id="preferredPosition" name="preferredPosition" value={editFormData.preferredPosition || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
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
              <select id="preferredFoot" name="preferredFoot" value={editFormData.preferredFoot || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Select Preferred Foot</option>
                <option value="Right">Right</option>
                <option value="Left">Left</option>
                <option value="Both">Both</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="height" className="block text-gray-700 text-sm font-bold mb-2">Height (cm):</label>
              <input type="number" id="height" name="height" value={editFormData.height || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">Weight (kg):</label>
              <input type="number" id="weight" name="weight" value={editFormData.weight || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="nationality" className="block text-gray-700 text-sm font-bold mb-2">Nationality:</label>
              <input type="text" id="nationality" name="nationality" value={editFormData.nationality || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="previousClubs" className="block text-gray-700 text-sm font-bold mb-2">Previous Clubs:</label>
              <input type="text" id="previousClubs" name="previousClubs" value={editFormData.previousClubs || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-bold mb-2">Contact Number:</label>
              <input type="tel" id="contactNumber" name="contactNumber" value={editFormData.contactNumber || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" value={editFormData.email || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-6">
              <label htmlFor="profilePictureUrl" className="block text-gray-700 text-sm font-bold mb-2">Profile Picture URL:</label>
              <input type="url" id="profilePictureUrl" name="profilePictureUrl" value={editFormData.profilePictureUrl || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label htmlFor="additionalNotes" className="block text-gray-700 text-sm font-bold mb-2">Additional Notes:</label>
              <textarea id="additionalNotes" name="additionalNotes" value={editFormData.additionalNotes || ''} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="flex justify-end">
              <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2" onClick={handleCancelEdit}>Cancel</button>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
            </div>
          </form>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">{player.firstName} {player.lastName}</h2>
            <img
              src={player.profilePictureUrl || player.image || 'https://via.placeholder.com/300/09f/fff?Text=No+Image'}
              alt={`${player.firstName} ${player.lastName}'s avatar`}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 mb-2">Date of Birth: <span className="font-semibold">{player.dateOfBirth || 'N/A'}</span></p>
            <p className="text-gray-700 mb-2">Age Bracket: <span className="font-semibold">{player.ageBracket || 'N/A'}</span></p>
            <p className="text-gray-700 mb-2">Preferred Position: <span className="font-semibold">{player.preferredPosition || 'N/A'}</span></p>
            <p className="text-gray-700 mb-2">Preferred Foot: <span className="font-semibold">{player.preferredFoot || 'N/A'}</span></p>
            <p className="text-gray-700 mb-2">Height: <span className="font-semibold">{player.height ? `${player.height} cm` : 'N/A'}</span></p>
            <p className="text-gray-700 mb-2">Weight: <span className="font-semibold">{player.weight ? `${player.weight} kg` : 'N/A'}</span></p>
            <p className="text-gray-700 mb-2">Nationality: <span className="font-semibold">{player.nationality || 'N/A'}</span></p>
            <p className="text-gray-700 mb-2">Previous Clubs: <span className="font-semibold">{player.previousClubs || 'N/A'}</span></p>
            <p className="text-gray-700 mb-2">Contact Number: <span className="font-semibold">{player.contactNumber || 'N/A'}</span></p>
            <p className="text-gray-700 mb-2">Email: <span className="font-semibold">{player.email || 'N/A'}</span></p>
            <p className="text-gray-700 mb-2">Additional Notes: <span className="font-semibold">{player.additionalNotes || 'N/A'}</span></p>
            <div className="flex justify-end mt-4">
              <button onClick={handleEditClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">Edit</button>
              <button 
                onClick={handleDeletePlayer} 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayerProfile;