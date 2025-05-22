import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';

export default function Support() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedFaqs, setExpandedFaqs] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "How do i download the app?",
      answer: "You can download our app from the App Store or Google Play Store. Search for 'ChitLink' and look for our official app."
    },
    {
      question: "How do i reset my password?",
      answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email."
    },
    {
      question: "How do i create a savings?",
      answer: "Navigate to the Savings section, click on 'Create New Savings', and follow the guided setup process."
    },
    {
      question: "How do i add my bank card?",
      answer: "Go to the Finance section, select 'Add Payment Method', and follow the secure card addition process."
    },
    {
      question: "Is my personal and payment information secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect all your personal and payment information."
    },
    {
      question: "How do i contact customer support?",
      answer: "You can reach our customer support team through the Contact Us section, email, or in-app chat support."
    }
  ];

  const supportItems = [
    {
      title: 'About App',
      icon: 'mdi:information',
      path: 'about-app',
      content: (
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">About ChitLink</h3>
          <p className="text-gray-600 text-sm sm:text-base">
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
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">FAQ Section</h3>
          <div className="space-y-3">
            {faqItems.map((faq, index) => {
              const isExpanded = expandedFaqs[index];
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => {
                      setExpandedFaqs(prev => ({
                        ...prev,
                        [index]: !prev[index]
                      }));
                    }}
                    className="w-full p-3 sm:p-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-gray-700 text-sm sm:text-base pr-4">{faq.question}</span>
                    <Icon 
                      icon="mdi:chevron-down"
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-primary transform transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-200 ease-in-out ${
                      isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-3 sm:p-4 pt-0 text-gray-600 text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )
    },
    {
      title: 'Feedbacks',
      icon: 'mdi:feedback',
      path: 'feedbacks',
      content: (
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Feedback</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            We value your feedback! Help us improve our service.
          </p>
        </div>
      )
    },
    {
      title: 'Contact us',
      icon: 'mdi:email',
      path: 'contact-us',
      content: (
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Get in touch with our support team.
          </p>
        </div>
      )
    }
  ];

  useEffect(() => {
    const path = location.pathname.split('/support/')[1];
    if (!path) {
      // If no specific section is selected, default to About App
      navigate('/support/about-app');
      setSelectedItem(supportItems[0]);
    } else {
      const matchingItem = supportItems.find(item => item.path === path);
      if (matchingItem) {
        setSelectedItem(matchingItem);
      } else {
        navigate('/support/about-app');
        setSelectedItem(supportItems[0]);
      }
    }
  }, [location.pathname, navigate]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    navigate(`/support/${item.path}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow">
              {supportItems.map((item, index) => (
                <div
                  key={item.title}
                  onClick={() => handleItemClick(item)}
                  className={`flex items-center p-3 sm:p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                    selectedItem?.path === item.path ? 'bg-gray-50 border-l-4 border-primary' : ''
                  } ${
                    index < supportItems.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="text-primary mr-3 sm:mr-4">
                    <Icon icon={item.icon} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-sm sm:text-base">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow">
              {selectedItem?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
