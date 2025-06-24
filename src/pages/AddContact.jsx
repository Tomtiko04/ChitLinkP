import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCreateContact } from '../components/features/contacts/useContacts';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

const defaultAvatar = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2EwYTVhZSI+PHBhdGggZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgM2MxLjY2IDAgMyAxLjM0IDMgMyAwIDEuNjYtMS4zNCAzLTMgMy0xLjY2IDAtMy0xLjM0LTMtMyAwLTEuNjYgMS4zNC0zIDMtM3ptMCAxNC4yYy0yLjUgMC00LjcxLTEuMjgtNi4yMi0zLjIyLjc4LTEuNTUgMy4xLTEuNzggNS4yMi0xLjc4czQuNDQuMjMgNS4yMiAxLjc4Yy0xLjUxIDEuOTQtMy43MiAzLjIyLTYuMjIgMy4yMnoiLz48L3N2Zz4=`;

const AddContact = () => {
  const { isCreateContact, isCreatingContact } = useCreateContact();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [profileImage, setProfileImage] = useState(defaultAvatar);
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const onSubmit = (data) => {
    isCreateContact(data, {
      onSettled: () => {
        reset();
        setProfileImage(defaultAvatar);
        setImageFile(null);
      },
    });
    console.log('New Contact:', { ...data, profileImage: imageFile });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-8 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-800">
          Add Contact
        </h1>
        <div className="mx-auto max-w-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="h-36 w-36 rounded-full bg-gradient-to-br from-yellow-200 via-amber-400 to-yellow-300 p-1">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="h-full w-full rounded-full border-4 border-white object-cover"
                  />
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                  accept="image/*"
                />
                <button
                  type="button"
                  onClick={handleEditClick}
                  className="absolute right-2 bottom-2 transform rounded-full bg-amber-500 p-2 text-white transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-amber-600 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
                  aria-label="Edit profile picture"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path
                      fillRule="evenodd"
                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold text-gray-600">
                Contact's Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`mt-1 block w-full border bg-white px-4 py-3 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400 shadow-sm focus:border-amber-500 focus:ring-amber-500 focus:outline-none sm:text-sm`}
                placeholder="*******"
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-600">
                Contact's Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`mt-1 block w-full border bg-white px-4 py-3 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400 shadow-sm focus:border-amber-500 focus:ring-amber-500 focus:outline-none sm:text-sm`}
                placeholder="sample@gmail.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-gray-600">
                Contact's Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className={`mt-1 block w-full border bg-white px-4 py-3 ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400 shadow-sm focus:border-amber-500 focus:ring-amber-500 focus:outline-none sm:text-sm`}
                placeholder="000-000-000-0000"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
            </div>
            <div className="pt-4">
              <button
                type="submit"
                disabled={isCreatingContact}
                className="flex w-full justify-center rounded-md border border-transparent bg-amber-500 px-4 py-3 text-sm font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-amber-600 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
              >
                Save Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
