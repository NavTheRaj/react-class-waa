import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Layouts/Header/Header';
import Dashboard from './containers/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
