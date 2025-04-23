import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch('https://utawala-footy-app.onrender.com/players');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlayers(data);
        setFilteredPlayers(data); 
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    const filtered = players.filter(player =>
      player.firstName.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
      player.lastName.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setFilteredPlayers(filtered);
  };

  if (loading) {
    return <div>Loading players...</div>;
  }

  if (error) {
    return <div>Error loading players: {error}</div>;
  }

  return (
    <div className="bg-gray-100 py-10" style={{ paddingTop: '64px' }}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Players</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search players..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {filteredPlayers.length === 0 ? (
          <p className="text-gray-600">No players found matching your search.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPlayers.map(player => (
              <li key={player.id} className="bg-white shadow rounded-md p-4">
                <Link to={`/players/${player.id}`} className="block hover:underline">
                  <img
                    src={player.profilePictureUrl || player.image || 'https://via.placeholder.com/150/ccc/fff?Text=No+Image'}
                    alt={`${player.firstName} ${player.lastName}`}
                    className="w-full h-32 object-cover rounded-md mb-2"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{player.firstName} {player.lastName}</h3>
                  <p className="text-gray-600 text-sm">Position: {player.preferredPosition || 'N/A'}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Players;