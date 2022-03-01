export default function ActivationForm() {
    return (
        <div className="activationForm">
            <h2>Activate your Account</h2>
            <p>Create your password to activate your Homebody account</p>
            <form>
                <div className="activationForm__passwords">
                    <input placeholder="Password" type="password" />
                    <input placeholder="Confirm Password" type="password" />
                </div>
                <div className="activationForm__submit">
                    <input type="submit" value="Activate account"/>
                    <input type="submit" value="Decline invitation"/>
                </div>
            </form>
        </div>
    )
}