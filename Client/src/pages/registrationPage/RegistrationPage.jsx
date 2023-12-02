import styles from "./registration.module.css";

import Text from "../../components/RegistrationComponent/Text";
import RegistrationForm from "../../components/RegistrationComponent/RegistrationForm";


const RegistrationPage = () => {
    return (
        <div className={`container ${styles.container}`}>
            <div className={styles.content}>
                <div className={styles.box}>
                    <div className={styles.box1}>
                        <Text />
                    </div>
                    <div className={styles.box2}>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;