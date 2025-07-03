import React, { useState } from 'react';
import Papa from 'papaparse';
import { Icon } from '@iconify/react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

// This is a placeholder for your actual API call to save contacts.
// You will need to replace this with your own implementation.
const saveContacts = async (contacts) => {
  console.log('Saving contacts:', contacts);
  // Example of what a real implementation might look like:
  // await fetch('/api/contacts/bulk', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ contacts }),
  // });
  return new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate a network request
};

const ImportContacts = () => {
  const [file, setFile] = useState(null);
  const [isImporting, setIsImporting] = useState(false);

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

    setIsImporting(true);
    const toastId = toast.loading('Importing contacts...');

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const contacts = results.data.map((contact) => ({
          // Ensure these keys match the headers in your CSV file
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
        }));

        if (contacts.length === 0) {
          toast.error('The CSV file is empty or does not contain valid data.', { id: toastId });
          setIsImporting(false);
          return;
        }

        try {
          await saveContacts(contacts);
          toast.success(`${contacts.length} contacts imported successfully!`, { id: toastId });
          setFile(null);
          // You might want to redirect the user after a successful import
          // navigate('/contacts');
        } catch (error) {
          toast.error('An error occurred while importing contacts.', { id: toastId });
          console.error('Import error:', error);
        } finally {
          setIsImporting(false);
        }
      },
      error: (error) => {
        toast.error('Error parsing the CSV file.', { id: toastId });
        console.error('CSV parsing error:', error);
        setIsImporting(false);
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 px-4 pt-20 lg:px-8">
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
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              <Icon
                icon={isImporting ? 'eos-icons:loading' : 'mdi:import'}
                className="mr-2 h-5 w-5"
              />
              {isImporting ? 'Importing...' : 'Import Contacts'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportContacts;
