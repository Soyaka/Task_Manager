import Layout from "./Auth/Layout"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from "./components/Container";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Layout />} />
         <Route path="/dashboard" element={<Container />} />
       {/* // <Route path="/" element={<ContactPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App