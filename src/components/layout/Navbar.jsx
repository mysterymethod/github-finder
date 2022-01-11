import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import "../../App.css";

function Navbar({ title }) {
  //mb - margin botton, bg- background, mx - margin left right,
  return (
    <>
      <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="flex-none px-2 mx-2">
            <FaGithub className="inline text-2xl" />
            <Link
              style={{ marginLeft: "1.5rem" }}
              to="/"
              className="text-lg font-bold align-middle"
            >
              {title}
            </Link>
            {/* <p >hello world</p> */}
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end ">
              <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                Home
              </Link>
              <Link to="/about" className="btn">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-red-500 px-10 py-10 my-10 mx-10">
        <p class="text-sm">The quick brown fox ...</p>
        <p class="text-base">The quick brown fox ...</p>
        <p class="text-lg">The quick brown fox ...</p>
        <p class="text-xl">The quick brown fox ...</p>
        <p class="text-2xl">The quick brown fox ...</p>
      </div>
    </>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
