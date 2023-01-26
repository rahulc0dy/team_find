import LoginStyles from "../styles/LoginForm.module.css";

const LoginForm = () => {
    return (
        <div className={LoginStyles.form_container}>
            <form className={LoginStyles.form}>
                <h1>Sign in</h1>
                <div className={LoginStyles.form_input}>
                    <label htmlFor="username">Username</label>
                    <input type="text" />
                </div>
                <div className={LoginStyles.form_input}>
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                </div>
                <button className={LoginStyles.login_button} type="submit">
                    Log In
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
