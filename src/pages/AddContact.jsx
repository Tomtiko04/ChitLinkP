import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCreateContact } from '../components/features/contacts/useContacts';
import { Icon } from '@iconify/react';

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
    const formData = new FormData();

    Object.keys(data).forEach(key => {
      if (key === 'phone') {
        formData.append('phone_number', data[key]);
      } else {
        formData.append(key, data[key]);
      }
    });

    if (imageFile) {
      formData.append('profile_image', imageFile);
    }

    isCreateContact(formData, {
      onSettled: () => {
        reset();
        setProfileImage(defaultAvatar);
        setImageFile(null);
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-20 lg:px-8">
      <div className="mx-auto w-full max-w-4xl rounded-[22px] bg-white pb-8">
        <h1 className="mb-8 border-b border-[#E6DFD8] px-6 pt-3 pb-4 text-xl font-bold text-[#22180E] sm:px-11 sm:text-2xl">
          Add Contact
        </h1>
        <div className="mx-auto max-w-sm px-2 sm:px-0">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="h-24 w-24 rounded-full shadow-sm sm:h-26 sm:w-26">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="h-full w-full rounded-full border-2 border-white object-cover"
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
                  className="absolute right-1 bottom-1 rounded-full bg-white p-2 text-white hover:scale-110 hover:bg-[#C59139] focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
                  aria-label="Edit profile picture"
                >
                  <Icon
                    icon="carbon:edit"
                    fontSize={24}
                    className="text-[#C59139] hover:text-white"
                  />
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold text-[#62340A]">
                Contact's Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`mt-2 block w-full rounded-lg border bg-transparent px-4 py-3 placeholder-[#62340A4D] focus:border-[#C59139] focus:ring-[#C59139] focus:outline-none sm:text-sm ${
                  errors.name ? 'border-red-500' : 'border-[#EEEBE7]'
                }`}
                placeholder="*******"
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-semibold text-[#62340A]">
                Contact's Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`mt-2 block w-full rounded-lg border bg-transparent px-4 py-3 placeholder-[#62340A4D] focus:border-[#C59139] focus:ring-[#C59139] focus:outline-none sm:text-sm ${
                  errors.email ? 'border-red-500' : 'border-[#EEEBE7]'
                }`}
                placeholder="sample@gmail.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-[#62340A]">
                Contact's Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className={`mt-2 block w-full rounded-lg border bg-transparent px-4 py-3 placeholder-[#62340A4D] focus:border-[#C59139] focus:ring-[#C59139] focus:outline-none sm:text-sm ${
                  errors.phone ? 'border-red-500' : 'border-[#EEEBE7]'
                }`}
                placeholder="000-000-000-0000"
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isCreatingContact}
                className="w-full rounded-xl bg-[#C59139] px-4 py-3 text-sm font-bold text-white transition duration-150 hover:bg-[#C59139]/90 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none sm:text-lg"
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
