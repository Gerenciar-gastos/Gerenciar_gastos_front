import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./contexts/UserContext.js";


function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Routes >
          
          <Route path='/' element={} />
         
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;