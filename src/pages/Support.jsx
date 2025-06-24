import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';

const FaqItem = ({ faq, index, isExpanded, onToggle }) => {
  return (
    <div
      className={`overflow-hidden rounded-[5px] ${isExpanded ? 'bg-[#C59139]' : 'bg-[#F8F8F8]'}`}
    >
      <button
        onClick={() => onToggle(index)}
        className="flex w-full cursor-pointer items-center justify-between px-4 py-2 text-left transition-colors duration-200 hover:bg-gray-100 sm:px-5 sm:py-3"
      >
        <span className="pr-4 text-sm font-semibold text-[#62340A] sm:text-sm">{faq.question}</span>
        <Icon
          icon="mdi:chevron-down"
          className={`h-5 w-5 transform text-[#B88743] transition-transform duration-200 sm:h-6 sm:w-6 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-3 pt-0 text-sm text-gray-600 sm:p-4 sm:text-base">{faq.answer}</div>
      </div>
    </div>
  );
};

const FeedbackForm = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState('');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[20px] bg-white p-8 text-center">
        <div className="mb-4 text-[#C59139]">
          <Icon icon="mdi:check-circle" className="mx-auto h-16 w-16" />
        </div>
        <h2 className="mb-4 text-2xl font-semibold">Thank You!</h2>
        <p className="mb-6 text-base text-gray-600">
          Your feedback has been submitted successfully.
        </p>
        <button
          onClick={onClose}
          className="w-64 cursor-pointer rounded-[5px] bg-[#C59139] py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#A77420]"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[20px] bg-white">
      <div className="flex items-center justify-center rounded-t-[20px] bg-[#EDEAE4]">
        <h2 className="py-5 text-xl font-bold text-[#22180E]">Feedback</h2>
        {/* <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <Icon icon="mdi:close" className="h-6 w-6" />
        </button> */}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center pb-20">
          <div className="mb-12">
            <div className="flex flex-col items-center justify-center gap-y-1 py-8 text-center text-[#22180E]">
              <h4 className="text-base font-semibold">We Value Your Feedback</h4>
              <p className="text-sm font-normal">Please kindly rate your experience with us</p>
            </div>
            <div className="flex w-64 items-center justify-center gap-2 rounded-[5px] bg-[#F2F2F2] px-12 py-3.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className="focus:outline-none"
                >
                  <Icon
                    icon="uiw:star-on"
                    className={`h-6 w-6 cursor-pointer ${
                      star <= rating ? 'text-[#C59139]' : 'text-black/25'
                    } transition-colors duration-200 hover:text-[#C59139]`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="flex w-64 items-center justify-center text-base font-bold text-[#62340A] hover:text-white">
            <button
              type="submit"
              className="w-full cursor-pointer rounded-[5px] bg-[#F2F2F2] py-2 transition-colors duration-200 hover:bg-[#C59139]"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="relative mx-auto w-full max-w-[370px] rounded-[20px] bg-white pb-5">
      {/* Close button
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 z-10"
        aria-label="Close"
      >
        <Icon icon="mdi:close" className="h-6 w-6" />
      </button> */}

      <div className="rounded-t-[20px] bg-[#EDEAE4] px-0 py-6 text-center">
        <h2 className="text-xl font-bold text-[#22180E]">Contact us</h2>
      </div>

      <div className="px-3 pt-14 pb-9">
        <div className="flex items-center rounded-[5px] bg-[#F8F8F8] px-4 py-3">
          <span className="flex-1 border-r-1 border-[#CECBCB] text-base font-semibold text-[#62340A]">
            Info@example.com
          </span>
          <span className="ml-4 flex items-center justify-center rounded-[5px] bg-[#F8F6F3]">
            <Icon icon="mdi:email-outline" className="h-6 w-6 text-[#CE973A]" />
          </span>
        </div>
      </div>

      <div className="flex items-center px-4 py-2">
        <div className="h-px flex-1 bg-[#ECEBEB]" />
        <span className="mx-1 text-sm font-medium text-[#62340A]">Follow us on</span>
        <div className="h-px flex-1 bg-[#ECEBEB]" />
      </div>

      <div className="flex justify-center gap-10 py-4">
        <div className="flex cursor-pointer flex-col items-center">
          <span className="mb-1">
            <Icon icon="iconoir:facebook" className="h-6 w-6 text-[#CE973A]" />
          </span>
          <span className="text-xs font-medium text-[#62340A]">Facebook</span>
        </div>
        <div className="flex cursor-pointer flex-col items-center">
          <span className="mb-1">
            <Icon icon="pajamas:twitter" className="h-6 w-6 text-[#CE973A]" />
          </span>
          <span className="text-xs font-medium text-[#62340A]">Twitter</span>
        </div>
        <div className="flex cursor-pointer flex-col items-center">
          <span className="mb-1">
            <Icon icon="ph:telegram-logo" className="h-6 w-6 text-[#CE973A]" />
          </span>
          <span className="text-xs font-medium text-[#62340A]">Telegram</span>
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
      question: 'How do i download the app?',
      answer:
        "You can download our app from the App Store or Google Play Store. Search for 'ChitLink' and look for our official app.",
    },
    {
      question: 'How do i reset my password?',
      answer:
        "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email.",
    },
    {
      question: 'How do i create a savings?',
      answer:
        "Navigate to the Savings section, click on 'Create New Savings', and follow the guided setup process.",
    },
    {
      question: 'How do i add my bank card?',
      answer:
        "Go to the Finance section, select 'Add Payment Method', and follow the secure card addition process.",
    },
    {
      question: 'Is my personal and payment information secure?',
      answer:
        'Yes, we use industry-standard encryption and security measures to protect all your personal and payment information.',
    },
    {
      question: 'How do i contact customer support?',
      answer:
        'You can reach our customer support team through the Contact Us section, email, or in-app chat support.',
    },
  ];

  const supportItems = [
    {
      title: 'About App',
      icon: 'bx:book-alt',
      path: 'about-app',
      content: (
        <div className="px-4 py-2">
          <h3 className="border-b border-[#D9D8D5] pb-2 text-base font-semibold text-[#BD882D] sm:text-lg">
            About App
          </h3>
          <p className="my-[50px] text-sm font-normal text-black sm:text-base">
            Welcome to <b>Chitlink,</b> your ultimate destination for smart savings and sustainable
            living. Our thrift mobile app is designed to help you save money while making
            eco-friendly choices.
          </p>
        </div>
      ),
    },
    {
      title: 'FAQ Section',
      icon: 'qlementine-icons:faq-16',
      path: 'faq-section',
      content: (
        <div className="px-4 py-2">
          <h3 className="border-b border-[#D9D8D5] pb-2 text-base font-semibold text-[#BD882D] sm:text-lg">
            FAQ Section
          </h3>
          <div className="my-7 space-y-2">
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
      ),
    },
    {
      title: 'Feedbacks',
      icon: 'mdi:feedback-outline',
      path: 'feedbacks',
      content: (
        <div className="flex min-h-[200px] items-center justify-center p-4 sm:p-6">
          {showFeedback && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/81"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowFeedback(false);
                  navigate('/support/about-app');
                }
              }}
            >
              <div className="mx-4 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
                <FeedbackForm
                  onClose={() => {
                    setShowFeedback(false);
                    navigate('/support/about-app');
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      title: 'Contact us',
      icon: 'akar-icons:envelope',
      path: 'contact-us',
      content: (
        <div className="flex min-h-[200px] items-center justify-center p-4 sm:p-6">
          {showContact && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/81"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowContact(false);
                  navigate('/support/about-app');
                }
              }}
            >
              <div className="mx-4 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                <ContactForm
                  onClose={() => {
                    setShowContact(false);
                    navigate('/support/about-app');
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ),
    },
  ];

  useEffect(() => {
    const path = location.pathname.split('/support/')[1];
    if (!path) {
      navigate('/support/about-app');
      setSelectedItem(supportItems[0]);
    } else {
      const matchingItem = supportItems.find((item) => item.path === path);
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
    <div className="px-4 pt-20 lg:px-8">
      <div className="rounded-[22px">
        <div className="mx-auto max-w-7xl !rounded-[22px] bg-white">
          <div className="flex h-auto flex-col px-1 sm:px-4 lg:flex-row">
            {/* Sidebar */}
            <div className="rounded-custom w-full px-4 py-[55px] lg:w-1/3">
              <div className="flex flex-col items-center justify-center">
                <Icon icon="streamline:customer-support-1" color="#C59139" fontSize={32} />
                <p className="mt-2 text-base font-semibold text-[#22180E] sm:text-sm">
                  Hi, How may we help you?
                </p>
              </div>
              <div className="mt-7">
                {supportItems.map((item, index) => (
                  <div
                    key={item.title}
                    onClick={() => handleItemClick(item)}
                    className={`mb-2 flex cursor-pointer items-center justify-between rounded-[5px] bg-[#F8F8F8] p-3 transition-all duration-200 hover:bg-[#C59139]/10 sm:p-3 ${
                      selectedItem?.path === item.path ? '!bg-[#C59139]' : ''
                    } ${index < supportItems.length - 1 ? '' : ''}`}
                  >
                    <div className="flex flex-row items-center gap-3 sm:gap-4">
                      <div
                        className={`text-primary transition-colors duration-200 ${
                          selectedItem?.path === item.path ? 'text-white' : ''
                        }`}
                      >
                        <Icon
                          icon={item.icon}
                          color={selectedItem?.path === item.path ? '#FFFFFF' : '#CE973A'}
                          className="h-6 w-6 sm:h-5 sm:w-5"
                        />
                      </div>
                      <span
                        className={`text-base font-bold transition-colors duration-200 sm:text-sm ${
                          selectedItem?.path === item.path ? 'text-white' : 'text-[#62340A]'
                        } sm:text-sm`}
                      >
                        {item.title}
                      </span>
                    </div>
                    <div>
                      <Icon
                        icon="ic:round-arrow-back-ios"
                        color={selectedItem?.path === item.path ? '#FFFFFF' : '#B88743'}
                        className="rotate-180"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden w-px bg-[#E3E2DF] lg:flex" />

            {/* Content */}
            <div className="w-full lg:w-2/3">
              <div>{selectedItem?.content}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
