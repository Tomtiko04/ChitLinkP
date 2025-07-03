import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useImportContacts } from '../components/features/contacts/useContacts';

const ImportContacts = () => {
  const [file, setFile] = useState(null);
  const { mutate: importContacts, isPending: isImporting } = useImportContacts();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
    } else {
      toast.error('Please select a valid .csv file.');
      setFile(null);
    }
  };

  const handleImport = () => {
    if (!file) {
      toast.error('Please select a file to import.');
      return;
    }
    importContacts(file, {
      onSuccess: () => {
        setFile(null);
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Import Contacts</h1>
            <p className="mt-2 text-sm text-gray-500">Bulk upload contacts from a CSV file.</p>
          </div>
          <Link
            to="/contacts"
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            <Icon icon="mdi:arrow-left" />
            Back to Contacts
          </Link>
        </div>

        <div className="mb-8 rounded-xl bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Instructions</h2>
          <ol className="mt-4 list-inside list-decimal space-y-3 text-gray-600">
            <li>
              Download the sample CSV file to see the required format.
              <a
                href="/public/sample_contacts_import.xlsx"
                download
                className="ml-2 font-medium text-blue-600 hover:underline"
              >
                Download Sample File
              </a>
            </li>
            <li>
              Fill the file with your contact details. The required columns are{' '}
              <strong>name</strong>, <strong>email</strong>, <strong>phone</strong> and{' '}
              <strong>Profile image</strong>. Do not change the column headers.
            </li>
            <li>Save the file and upload it below.</li>
          </ol>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Upload your CSV file</h2>
          <div className="mt-4">
            <label
              htmlFor="file-upload"
              className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Icon icon="mdi:cloud-upload-outline" className="mb-3 h-10 w-10 text-gray-400" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">CSV (MAX. 5MB)</p>
              </div>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".csv"
                onChange={handleFileChange}
              />
            </label>

            {file && (
              <div className="mt-4 text-center text-sm text-gray-700">
                <p>
                  Selected file: <strong>{file.name}</strong>
                </p>
              </div>
            )}
          </div>
          <div className="mt-6">
            <button
              onClick={handleImport}
              disabled={!file || isImporting}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
            >
              <Icon icon={isImporting ? "eos-icons:loading" : "mdi:import"} className="mr-2 h-5 w-5" />
              {isImporting ? 'Importing...' : 'Import Contacts'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportContacts;
