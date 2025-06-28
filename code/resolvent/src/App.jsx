import Nav from "./Nav";
import Home from "./Home";
import Usighn from "./Usighn";
import Contact from "./Contact";
import Asighn from "./Asighn";
import logo from "./assets/resolvent.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./Rigister";
import MainContent from "./MainContent";
import NewComplaint from "./NewComplaint";
import PendingComplaints from "./PendingComplaints";
import InProgressComplaints from "./InProgressComplaints";
import ResolvedComplaints from "./ResolvedComplaints";
import AllComplaints from "./AllComplaints";
import PrintComplaints from "./PrintComplaints";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <img src={logo} alt="Logo" className="logo" />
          <Nav />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Asighn" element={<Asighn />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Usighn" element={<Usighn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<MainContent />} />
            <Route path="/new-complaint" element={<NewComplaint />} />
            <Route path="/pending-complaint" element={<PendingComplaints />} />
            <Route path="/in-progress" element={<InProgressComplaints />} />
            <Route path="/resolved" element={<ResolvedComplaints />} />
            <Route path="/view-all" element={<AllComplaints />} />
            <Route path="/print" element={<PrintComplaints />} />

            <Route path="/all" element={<AllComplaints />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
