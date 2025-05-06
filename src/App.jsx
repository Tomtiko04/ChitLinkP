import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Add your routes here */}
          <Route index element={<div className="py-12 text-center">Welcome to ChitLink</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
