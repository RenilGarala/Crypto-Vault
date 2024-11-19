import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Coins from "./Pages/Coins";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
  App: {
    backgroundColor: '#14161a',
    color: "white", 
    minHeight: "100vh",
  }
}));

function App() {
  
  const classes = useStyle();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<Coins />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
