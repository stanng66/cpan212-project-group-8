import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
      <section className="home-container">
        <div className="home-topline">
          <span>CASE FILE No. 008</span>
          <span className="home-sub-text">THE MURDER MYSTERY EXPERIENCE</span>
        </div>

        <div className="home-content">

          <h1 className="home-title">
            Project
            <br />
            <span>Title</span>
          </h1>

          <p className="home-description">We all have our own mystery. Can you uncover the truth?</p>

          <div className="home-auth-options">
            <div className="home-auth-login">
              <span>Returning Detective?</span>
              <button
                type="button"
                className="home-auth-button"
              >
                Login
              </button>
            </div>

            <span
              className="home-auth-divider"
              aria-hidden="true"
            />

            <div className="home-auth-register">
              <span>New to the Investigation?</span>
              <button
                type="button"
                className="home-auth-button home-register-button"
              >
                Register
              </button>
            </div>
          </div>
        </div>

       <footer className="home-footer">
          <span>We all have our own mystery.</span>
          <span>THE TRUTH IS WAITING.</span>
        </footer>
      </section>
  );
}
