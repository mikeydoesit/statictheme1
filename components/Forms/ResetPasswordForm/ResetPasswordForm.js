export default function ResetPasswordForm() {
    return (
        <div className="passwordresetForm">
            <h2>Reset your account password</h2>
            <form>
                <div className="passwordresetForm__credentials">
                    <input placeholder="Password" type="password" />
                    <input placeholder="Confirm password" type="password" />
                </div>
                <div className="passwordresetForm__submit">
                    <input type="submit" value="Reset password"/>
                </div>
            </form>
        </div>
    )
}