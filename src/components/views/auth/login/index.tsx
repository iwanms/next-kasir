import styles from "../Auth.module.scss";

const LoginView = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Login</h1>
      {/* {error && <p className={styles.register_error}>{error}</p>} */}
      <div className={styles.register__form}>
        <form>
          <div className={styles.register__form__item}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className={styles.register__form__item__input}
            />
          </div>
          <div className={styles.register__form__item}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className={styles.register__form__item__input}
            />
          </div>
          <button
            type="submit"
            className={styles.register__form__item__input__button}
          >
            Login
          </button>
        </form>
      </div>
      <p className={styles.register__link}>Have an account ? Sing in Sign up</p>
    </div>
  );
};
export default LoginView;
