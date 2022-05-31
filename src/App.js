import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login/Login";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./Context/AuthContext";
import Navbar from "./Components/Navbar";
import ViewallContributions from "./Components/ViewallContributions";
import IndividualContribution from "./Components/IndividualContribution";
import Transactions from "./Components/Transactions/Transactions";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import Footer from "./Components/Footer/Footer";
import AllCompletedTransactions from "./Components/AllCompletedTransactions/AllCompletedTransactions";
import UserDashBoard from "./Components/UserDashboard/UserDashBoard";
import UserDonations from "./Components/UserDonations/UserDonations";
function App() {
  const { user } = useContext(AuthContext);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (user) {

      if (user.email === "admin@msaada.com") {
        setAdmin(true)
        admin && window.location.replace("/admin")

      }
      else {
        setAdmin(false)
      }
    }


  }, [user])





  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contribution/:contributionId" element={<IndividualContribution />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={user ? <UserDashBoard /> : <Login />} exact />
          <Route path="/contributions" element={<ViewallContributions />} exact />
          <Route path="/alltransactions" element={admin ? <AllCompletedTransactions /> : <Login />} exact />
          <Route path="/transactions" element={user ? <Transactions /> : <Login />} exact />
          <Route path="/admin" element={admin ? <AdminDashboard /> : <Login />} exact />
          <Route path="/user donations" element={user ? <UserDonations /> : <Login />} exact />
          <Route path="/dashboard" element={user ? <UserDashBoard /> : <Login />} exact />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
