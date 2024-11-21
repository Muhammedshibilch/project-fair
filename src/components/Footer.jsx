import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: "300px" }} className="mt-5 container w-100">
    <div className="d-flex justify-content-between">
      {/* intro */}
      <div style={{ width: "400px" }}>
        <h5>
        <i class="fa-brands fa-discord me-2"></i>
          Project Fair
        </h5>
        <p>
          Designed and built with all the love in the world by the Luminar
          team with the help of our contributors.
        </p>
        <p>Code licensed MIT, docs CC BY 3.0.</p>
        <p>Currently v5.3.3.</p>
      </div>
      {/* link */}
      <div className="d-flex flex-column">
        <h5>Links</h5>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          Home
        </Link>
        <Link to={"/login"} style={{ textDecoration: "none", color: "white" }}>
          Login
        </Link>
        <Link
          to={"/register"}
          style={{ textDecoration: "none", color: "white" }}
        >
          Register
        </Link>
      </div>

      {/* guides */}
      <div className="d-flex flex-column">
        <h5>Guides</h5>
        <a
          href="https://react.dev/"
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
        >
          React
        </a>
        <a
          href="https://reactrouter.com/en/main"
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
        >
          React Router
        </a>

        <a
          href="https://react-bootstrap.github.io/"
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
        >
          React Bootstrap
        </a>
      </div>
      {/* contact */}
      <div className="d-flex flex-column">
        <h5>Contact Us</h5>

        <div className="d-flex">
          <input
            type="text"
            placeholder="Enter Your Email here"
            className="form-control me-2"
          />
          <button className="btn btn-info">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <a
            href="https://x.com/?lang=en-in&mx=2"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/dashboard"
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href=""
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
    <p className="text-center mt-3">
      ©️Copyright & copy; July 2024 Batch,Media Player App. Built with React
    </p>
  </div>
  )
}

export default Footer