import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import AuthProvider from "./contexts/contex.jsx";
import MonthEdition from "./pages/MonthEdition.jsx";


function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Routes >
          
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/monthEdition/:id' element={<MonthEdition />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;