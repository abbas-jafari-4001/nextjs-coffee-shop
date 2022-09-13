import { useState } from "react";
import type { Session } from "next-auth";
// My import.
import PasswordForm from "./PasswordForm";
// CSS import.
import styles from "./UserProfile.module.css";

type UserProfileProps = {
  session: Session;
};

const UserProfile = ({ session }: UserProfileProps) => {
  const [statusMessage, setStatusMessage] = useState("");
  const [changePassword, setChangePassword] = useState(false);
  const userName = session.user.name;
  const userEmail = session.user.email; // To make the create-new-password assessable

  const toggleShowPasswordFormHandler = () => {
    setStatusMessage("");
    setChangePassword((prevState) => !prevState);
  };

  const successfulPasswordChangeHandler = (message: string) => {
    setStatusMessage(message);
    setChangePassword(false);
  };

  return (
    <section className={styles.profile}>
      <h1>{userName}</h1>
      <label className={styles.successfulStatus}>{statusMessage}</label>
      <div
        onClick={toggleShowPasswordFormHandler}
        className={styles.changePassword}
        role="button"
      >
        <h2>{changePassword ? "Close Password Form" : "Change Password"}</h2>
      </div>
      {changePassword && (
        <PasswordForm
          userEmail={userEmail}
          onSuccess={successfulPasswordChangeHandler}
        />
      )}
    </section>
  );
};

export default UserProfile;
