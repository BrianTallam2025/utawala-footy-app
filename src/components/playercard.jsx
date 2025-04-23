import React from 'react';
import { Link } from 'react-router-dom';

function Playercard({ player }) {
  return (
    <Link
      to={`/players/${player.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden block hover:shadow-lg transition duration-300"
    >
      <img
        src={player.profilePictureUrl || player.image || 'https://via.placeholder.com/300/09f/fff?Text=No+Image'}
        alt={`${player.firstName} ${player.lastName}'s avatar`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{player.firstName} {player.lastName}</h3>
        <p className="text-sm text-gray-600">Position: <span className="font-bold">{player.preferredPosition || player.position || 'N/A'}</span></p>
        <p className="text-sm text-gray-600">Age: <span className="font-bold">{player.ageBracket || player.age || 'N/A'}</span></p>
      </div>
    </Link>
  );
}

export default Playercard;