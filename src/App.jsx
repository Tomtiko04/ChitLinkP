import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

import Dashboard from './pages/Dashboard';
import BankAccounts from './pages/BankAccounts';
import Support from './pages/Support';

const Savings = () => <div className="py-12 text-center">Savings Page</div>;
const Contacts = () => <div className="py-12 text-center">Contacts Page</div>;
const Finance = () => <div className="py-12 text-center">Finance Page</div>;
const Profile = () => <div className="py-12 text-center">Profile Page</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="bank-accounts" element={<BankAccounts />} />
          <Route path="savings" element={<Savings />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="finance" element={<Finance />} />
          <Route path="profile" element={<Profile />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
