import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import AuthProvider from "./contexts/contex.jsx";
import MonthEdition from "./pages/MonthEdition.jsx";
import { Expenses } from "./pages/Expenses.jsx";
import { EditCard } from "./pages/EditCard.jsx";


function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Routes >
          
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/monthEdition/:id' element={<MonthEdition />} />
          <Route path='/expenses/:id' element={<Expenses />} />
          <Route path='/editCard/:id' element={<EditCard />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;