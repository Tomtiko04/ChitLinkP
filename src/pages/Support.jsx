import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Support() {
  const [selectedItem, setSelectedItem] = useState(null);

  const supportItems = [
    {
      title: 'About App',
      icon: 'mdi:information',
      path: 'about-app',
      content: (
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">About ChitLink</h3>
          <p className="text-gray-600">
            ChitLink is your ultimate destination for smart savings and sustainable living. 
            Our platform helps you make eco-friendly choices while saving money.
          </p>
        </div>
      )
    },
    {
      title: 'FAQ Section',
      icon: 'mdi:frequently-asked-questions',
      path: 'faq-section',
      content: (
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">How does ChitLink work?</h4>
              <p className="text-gray-600">Detailed explanation of the service...</p>
            </div>
            {/* Add more FAQ items as needed */}
          </div>
        </div>
      )
    },
    {
      title: 'Feedbacks',
      icon: 'mdi:feedback',
      path: 'feedbacks',
      content: (
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Feedback</h3>
          <p className="text-gray-600">
            We value your feedback! Help us improve our service.
          </p>
          {/* Add feedback form or content */}
        </div>
      )
    },
    {
      title: 'Contact us',
      icon: 'mdi:email',
      path: 'contact-us',
      content: (
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-600">
            Get in touch with our support team.
          </p>
          {/* Add contact information or form */}
        </div>
      )
    }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    // Update URL without navigation
    window.history.pushState({}, '', `/support/${item.path}`);
  };

  return (
    <div className="flex">
      <div className="w-1/3 p-6">
        {/* <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Icon icon="mdi:headphones-settings" className="w-20 h-20 text-primary" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Hi, How may we help you?</h2>
          <p className="text-gray-600">
            Welcome to Chitlink, your ultimate destination for smart savings and sustainable living. 
            Our thrift mobile app is designed to help you save money while making eco-friendly choices
          </p>
        </div> */}

        <div className="bg-white rounded-lg shadow">
          {supportItems.map((item, index) => (
            <div
              key={item.title}
              onClick={() => handleItemClick(item)}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                selectedItem?.path === item.path ? 'bg-gray-50 border-l-4 border-primary' : ''
              } ${
                index < supportItems.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="text-primary mr-4">
                <Icon icon={item.icon} className="w-6 h-6" />
              </div>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="w-2/3 bg-white rounded-lg shadow mt-6 mr-6">
          {selectedItem.content}
        </div>
      )}
    </div>
  );
}
