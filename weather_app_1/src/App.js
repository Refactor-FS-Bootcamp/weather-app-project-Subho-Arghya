//import logo from './logo.svg';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import {Route, Routes} from 'react-router-dom'
import "./App.css";
import Home from "./pages/home";
import City from "./pages/city";

function App() {
  return (
    
    <div className="App">
      <Header />
      <Sidebar />
      
        <Routes>
          <Route path="/" element={<Home />}>
            
          </Route>
          <Route path="/city" element={<City />}>
            
          </Route>
        </Routes>
      
    </div>
    
  );
}

export default App;
