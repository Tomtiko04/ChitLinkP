import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';

const FaqItem = ({ faq, index, isExpanded, onToggle }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <button
        onClick={() => onToggle(index)}
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
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-3 sm:p-4 pt-0 text-gray-600 text-sm sm:text-base">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

const FeedbackForm = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the feedback data to your backend
    console.log({ rating, comment, name, email });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <div className="text-primary mb-4">
          <Icon icon="mdi:check-circle" className="w-16 h-16 mx-auto" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-6">Your feedback has been submitted successfully.</p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Feedback</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <Icon icon="mdi:close" className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="text-gray-600 mb-4">How would you rate your experience?</p>
          <div className="flex gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setRating(star)}
                className="focus:outline-none"
              >
                <Icon
                  icon="mdi:star"
                  className={`w-8 h-8 ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  } transition-colors duration-200 hover:text-yellow-400`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Comments
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Share your thoughts..."
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-8 text-center">
        <div className="text-primary mb-4">
          <Icon icon="mdi:check-circle" className="w-16 h-16 mx-auto" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Message Sent!</h2>
        <p className="text-gray-600 mb-6">We'll get back to you as soon as possible.</p>
        <button
          onClick={onClose}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <Icon icon="mdi:close" className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your email"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="What is this about?"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="How can we help you?"
            required
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="flex-1 py-3 px-6 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Icon icon="mdi:email" className="w-5 h-5 text-primary" />
            <a href="mailto:support@chitlink.com" className="text-gray-600 hover:text-primary">
              support@chitlink.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Icon icon="mdi:phone" className="w-5 h-5 text-primary" />
            <a href="tel:+1234567890" className="text-gray-600 hover:text-primary">
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Support() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showContact, setShowContact] = useState(false);
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
            {faqItems.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={(idx) => setExpandedIndex(idx === expandedIndex ? null : idx)}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'Feedbacks',
      icon: 'mdi:feedback',
      path: 'feedbacks',
      content: (
        <div className="p-4 sm:p-6 flex items-center justify-center min-h-[200px]">
          {showFeedback && (
            <div 
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowFeedback(false);
                  navigate('/support/about-app');
                }
              }}
            >
              <div className="max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
                <FeedbackForm onClose={() => {
                  setShowFeedback(false);
                  navigate('/support/about-app');
                }} />
              </div>
            </div>
          )}
        </div>
      )
    },
    {
      title: 'Contact us',
      icon: 'mdi:email',
      path: 'contact-us',
      content: (
        <div className="p-4 sm:p-6 flex items-center justify-center min-h-[200px]">
          {showContact && (
            <div 
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowContact(false);
                  navigate('/support/about-app');
                }
              }}
            >
              <div className="max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
                <ContactForm onClose={() => {
                  setShowContact(false);
                  navigate('/support/about-app');
                }} />
              </div>
            </div>
          )}
        </div>
      )
    }
  ];

  useEffect(() => {
    const path = location.pathname.split('/support/')[1];
    if (!path) {
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

  useEffect(() => {
    if (location.pathname === '/support/feedbacks') {
      setShowFeedback(true);
    } else if (location.pathname === '/support/contact-us') {
      setShowContact(true);
    } else {
      setShowFeedback(false);
      setShowContact(false);
    }
  }, [location.pathname]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setExpandedIndex(null); // Reset expanded FAQ when changing sections
    if (item.path === 'feedbacks') {
      setShowFeedback(true);
    } else if (item.path === 'contact-us') {
      setShowContact(true);
    }
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
