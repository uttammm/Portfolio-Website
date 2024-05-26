// src/ProfileCard.js
import React from 'react';

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <img src={profile.image} alt={`${profile.name}`} className="profile-image" />
      <div className="profile-info">
        <img src={profile.icon} alt={`${profile.name} icon`} className="profile-icon" />
        <h3 className="profile-name">{profile.name}</h3>
        <p className="profile-description">{profile.description}</p>
        <a href={profile.link} className="profile-link" target="_blank" rel="noopener noreferrer">Visit Profile</a>
      </div>
    </div>
  );
}

export default ProfileCard;
