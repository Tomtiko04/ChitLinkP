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
    <div className="min-h-screen bg-gray-50 p-4 px-4 pt-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Import Contacts</h1>
            <p className="mt-2 text-sm text-gray-500">
              Bulk upload contacts from a CSV file.
            </p>
          </div>
          <Link to="/contacts" className="text-sm font-medium text-[#CE973A] hover:text-[#a5762d] flex items-center gap-1">
            <Icon icon="mdi:arrow-left" />
            Back to Contacts
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700">Instructions</h2>
          <ol className="mt-4 space-y-3 text-gray-600 list-decimal list-inside">
            <li>
              Download the sample CSV file to see the required format.
              <a 
                href="/sample-contacts.csv"
                download
                className="ml-2 font-medium text-[#CE973A] hover:underline"
              >
                Download Sample File
              </a>
            </li>
            <li>Fill the file with your contact details. The required columns are <strong>name</strong>, <strong>email</strong>, and <strong>phone</strong>. Do not change the column headers.</li>
            <li>Save the file and upload it below.</li>
          </ol>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700">Upload your CSV file</h2>
          <div className="mt-4">
            <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-48 border-2 border-[#CE973A] border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Icon icon="mdi:cloud-upload-outline" className="w-10 h-10 mb-3 text-[#CE973A]" />
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500">CSV (MAX. 5MB)</p>
                </div>
                <input id="file-upload" type="file" className="hidden" accept=".csv" onChange={handleFileChange} />
            </label>

            {file && (
              <div className="mt-4 text-center text-sm text-gray-700">
                <p>Selected file: <strong>{file.name}</strong></p>
              </div>
            )}
          </div>
          <div className="mt-6">
            <button
              onClick={handleImport}
              disabled={!file || isImporting}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#CE973A] hover:bg-[#a5762d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CE973A] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
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
