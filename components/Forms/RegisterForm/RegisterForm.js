export default function RegisterForm() {
    return (
        <>
            <div className="registerForm">
                <h2>Create a account</h2>
                <form>
                    <div className="registerForm__credentials">
                        <input placeholder="First name" type="text" />
                        <input placeholder="Last name" type="text" />
                        <input placeholder="Email" type="email" />
                        <input placeholder="Password" type="password" />
                    </div>
                    <div className="registerForm__submit">
                        <input type="submit" value="Create"/>
                    </div>
                </form>
            </div>
        </>
    )
}