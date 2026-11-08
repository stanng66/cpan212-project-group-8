// import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
      <section className="home-container">
        <div className="home-topline">
          <span>CASE FILE No. 008</span>
          <span className="home-sub-text">A MURDER MYSTERY EXPERIENCE</span>
        </div>

        <div className="home-content">

          <h1 className="home-title">
            The Curator's
            <br />
            <span>Last Shift</span>
          </h1>
          <p className="home-description">Six suspects. One victim. Countless secrets. <br />Can you uncover the truth?</p>

          <div className="home-auth-options">
            <div className="home-auth-login">
              <span>Returning Detective?</span>

              <Link href="/login">
                <button
                  type="button"
                  className="home-auth-button"
                >
                  Login
                </button>
              </Link>
            </div>

            <span
              className="home-auth-divider"
              aria-hidden="true"
            />

            <div className="home-auth-register">
              <span>New to the Investigation?</span>
              <Link href="/register">
                <button
                  type="button"
                  className="home-auth-button home-register-button"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>

       <footer className="home-footer">
          <span>Trust the evidence, not the stories.</span>
          <span>THE TRUTH IS WAITING.</span>
        </footer>
      </section>
  );
}
