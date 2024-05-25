import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Username from './pages/Username';
import Lobby from './pages/Lobby';
//import Lobby from "./pages/Lobby";

function App() {
  return (
    <div className="App">
     <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/user' element={<Username/>}/>
            <Route path='/lobby' element={<Lobby/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
