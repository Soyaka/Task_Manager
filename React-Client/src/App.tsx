import Layout from "./Auth/Layout"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from "./components/Container";
function App() {
  return (
    <div className="h-screen w-screen">
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<div className=" w-full h-full  flex items-center justify-center"><Layout /></div>} />
         <Route path="/dashboard" element={<Container />} />
       {/* // <Route path="/" element={<ContactPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App