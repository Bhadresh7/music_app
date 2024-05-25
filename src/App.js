import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
//import Lobby from "./pages/Lobby";

function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
