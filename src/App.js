import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MainPage } from "./component/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkPage from "./component/LinkPage";
import ContactPage from "./component/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/link" element={<LinkPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </BrowserRouter>
  );
}


export default App;
