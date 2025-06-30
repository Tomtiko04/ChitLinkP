import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MainLayout from './components/layout/MainLayout';
import ConfirmDeleteModal from './components/ConfirmDeleteModal';

import Dashboard from './pages/Dashboard';
import BankAccounts from './pages/BankAccounts';
import Support from './pages/Support';
import Login from './pages/Login';
import VerifyAccount from './pages/VerifyAccount';
import VerificationSuccess from './pages/VerificationSuccess';
import Signup from './pages/Signup';
import Contacts from './pages/Contacts';
import AddContact from './pages/AddContact';
import AddGroup from './pages/AddGroup';
import AllGroups from './components/features/contacts/AllGroups';

const Savings = () => <div className="py-12 text-center">Savings Page</div>;
const Finance = () => <div className="py-12 text-center">Finance Page</div>;
const Profile = () => <div className="py-12 text-center">Profile Page</div>;

function App() {
  return (
    <Router>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: '#D29C3E',
              color: 'white',
            },
          },
          error: {
            duration: 5000,
            style: {
              background: '#A73957',
              color: 'white',
            },
          },
        }}
      />
      <ConfirmDeleteModal />
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/verify" element={<VerifyAccount />} />
        <Route path="/auth/verify/success" element={<VerificationSuccess />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="bank-accounts" element={<BankAccounts />} />
          <Route path="savings" element={<Savings />} />
          <Route path="contacts">
            <Route index element={<Contacts />} />
            <Route path='add-contact' element={<AddContact />}/>
            <Route path='add-group' element={<AddGroup />}/>
            <Route path='groups' element={<AllGroups />}/>
          </Route>
          <Route path="finance" element={<Finance />} />
          <Route path="profile" element={<Profile />} />
          <Route path="support/*" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
