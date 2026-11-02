export default function LoginForm() {
    return (
        <section className="auth-page">
            <div className="auth-card">

                <h1 className="login-title">
                    Welcome Back, Detective
                </h1>

                <form id="loginForm" className="login-form">
                    <label htmlFor="loginUsername" className="login-username-label"> Detective Username</label>

                    <input 
                        id="loginUsername"
                        name="loginUsername"
                        className="login-username-input"
                        type="text"
                        placeholder="Enter username"
                        required
                    />

                    <label htmlFor="loginPassword" className="login-password-label"> Password</label>

                    <input 
                        id="loginPassword"
                        name="loginPassword"
                        className="login-password-input"
                        type="password"
                        placeholder="Enter password"
                        required
                    />

                    <button id="loginButton"
                        type="submit"
                        className="login-button"
                    >
                        Login
                    </button>

                </form>

                <div className="auth-project">
                    PROJECT TITLE
                </div>
            </div>
        </section>
    );
}