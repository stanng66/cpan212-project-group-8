"use client";

import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const router = useRouter();
    const handleRegister = (event) => {
        event.preventDefault();
        router.push("/clues");
    };

    return (
        <section className="auth-page">
            <div className="auth-card">
                <h1 className="register-title">
                    Welcome, Detective
                </h1>

                <form id="registerForm" className="register-form" onSubmit={handleRegister}>
                    <label htmlFor="registerUsername" className="register-username-label">
                        Detective Username
                    </label>

                    <input 
                        id="registerUsername"
                        name="registerUsername"
                        className="register-username-input"
                        type="text"
                        placeholder="Choose username"
                        required
                    />

                    <label htmlFor="registerPassword" className="register-password-label"> Password</label>

                    <input 
                        id="registerPassword"
                        name="registerPassword"
                        className="register-password-input"
                        type="password"
                        placeholder="Create password"
                        required
                    />

                    <button id="registerButton" type="submit" className="register-button">
                        Create Account & Start Investigation
                    </button>

                </form>

                <div className="auth-project">
                    The Curator's Last Shift
                </div>
            </div>
        </section>
    );
}