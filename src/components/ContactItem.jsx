import React from 'react';

const ContactItem = ({ contact }) => {
  const defaultAvatar = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2EwYTVhZSI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MxLjY2IDAgMyAxLjM0IDMgMyAwIDEuNjYtMS4zNCAzLTMgMy0xLjY2IDAtMy0xLjM0LTMtMyAwLTEuNjYgMS4zNC0zIDMtM3ptMCAxNC4yYy0yLjUgMC00LjcxLTEuMjgtNi4yMi0zLjIyLjc4LTEuNTUgMy4xLTEuNzggNS4yMi0xLjc4czQuNDQuMjMgNS4yMiAxLjc4Yy0xLjUxIDEuOTQtMy43MiAzLjIyLTYuMjIgMy4yMnoiLz48L3N2Zz4=`;

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-center">
        <img
          src={contact.profile_image || defaultAvatar}
          alt={contact.name}
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-300"
        />
        <div>
          <p className="font-semibold text-gray-800">{contact.name}</p>
          <p className="text-sm text-gray-500">{contact.phone_number}</p>
        </div>
      </div>
      {/* You can add action buttons here, e.g., edit, delete */}
      <button className="text-gray-400 hover:text-gray-600">
        {/* Placeholder for an options icon, e.g., three dots */}
        &#x22EE; {/* Vertical ellipsis */}
      </button>
    </div>
  );
};

export default ContactItem;
