import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/UserContex.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";


function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Routes >
          
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
         
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;