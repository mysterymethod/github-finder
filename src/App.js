import { BrowserRouter as Router, Route } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>content</main>

        <div className="flex-1 px-2 mx-2">
            <div className="flex justify-center ">
              <Link to="/" className="btn">
                Home
              </Link>
            </div>
        </div>
        
      </div>
    </Router>
    

    // <div class="flex flex-row flex-wrap">
    //   <div class="basis-1/4 bg-red-500">01</div>
    //   <div class="basis-1/4 bg-red-300">02</div>
    //   <div class="basis-1/2 bg-red-100">03</div>
    //   {/* <div class="basis-1/2 bg-red-100">03</div> */}
    // </div>
  );
}

export default App;
