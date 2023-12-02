import styles from "./login.module.css";

import Text from "../../components/RegistrationComponent/Text";
import LoginForm from "../../components/LoginComponent/LoginForm"


const LoginPage = () => {
    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.box1}>
                        <Text />
                    </div>
                    <div className={styles.box2}>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;