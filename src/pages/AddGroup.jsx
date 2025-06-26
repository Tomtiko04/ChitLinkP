import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ChromePicker } from 'react-color';
import { useCreateGroup } from '../components/features/contacts/useContacts';

const schema = yup.object().shape({
  name: yup.string().required('Group name is required'),
  description: yup.string(),
});

const AddGroup = () => {
  const [color, setColor] = useState('#D29C3E');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const {isCreateGroup, isCreatingGroup} = useCreateGroup()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const groupData = { ...data, color };
    isCreateGroup(groupData);
    console.log(
      { groupData },
      {
        onSettled: () => {
          reset();
          setColor('#D29C3E');
        },
      }
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-8 border-b border-gray-200 pb-4 text-3xl font-bold text-gray-800">
          Add Group
        </h1>
        <div className="mx-auto max-w-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mb-6 flex justify-center">
              <div
                className="h-36 w-36 rounded-full p-1 flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                <button
                  type="button"
                  onClick={() => setShowColorPicker(!showColorPicker)}
                  className="rounded-full bg-white bg-opacity-50 p-2 text-black transition-transform duration-200 ease-in-out hover:scale-110"
                  aria-label="Change group color"
                >
                  Change Color
                </button>
              </div>
              {showColorPicker && (
                <div className="absolute z-10 mt-40">
                  <ChromePicker color={color} onChangeComplete={(color) => setColor(color.hex)} />
                </div>
              )}
            </div>
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-semibold text-gray-600">
                Group Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`mt-1 block w-full border bg-white px-4 py-3 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400 shadow-sm focus:border-amber-500 focus:ring-amber-500 focus:outline-none sm:text-sm`}
                placeholder="Enter group name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="description" className="mb-1 block text-sm font-semibold text-gray-600">
                Description
              </label>
              <textarea
                id="description"
                {...register('description')}
                className={`mt-1 block w-full border bg-white px-4 py-3 ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-md placeholder-gray-400 shadow-sm focus:border-amber-500 focus:ring-amber-500 focus:outline-none sm:text-sm`}
                placeholder="Enter group description"
              />
            </div>
            <div className="pt-4">
              <button
              disabled={isCreatingGroup}
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-amber-500 px-4 py-3 text-sm font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-amber-600 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
              >
                Save Group
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGroup;
