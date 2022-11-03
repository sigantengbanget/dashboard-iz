import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
