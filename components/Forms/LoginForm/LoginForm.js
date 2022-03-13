export default function LoginForm() {
    return (
        <div className="loginForm">
            <h2>Log in to your account</h2>
            <form>
                <div className="loginForm__credentials">
                    <input placeholder="Email" type="email" />
                    <input placeholder="Password" type="password" />
                    <a href="/customers/reset_password" className="loginForm__credentials__forgot">Forgot your password?</a>
                </div>
                <div className="loginForm__submit">
                    <input type="submit" value="Sign In"/>
                    <a href="/customers/register" className="loginForm__submit__create">Create account</a>
                </div>
            </form>
        </div>
    )
}