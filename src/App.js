import "./App.css";
import Competition from "./Competition/Competition";
import cardData from "./Competition/cardData.json";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/competition" element={<Competition data={cardData} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
