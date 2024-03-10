import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import error from "next/error";

const RegisterView = () => {
  const { push } = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      fullname: form.fullname.value,
      password: form.password.value,
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      form.reset();
      push("/auth/login");
    } else {
      console.log(error);
    }
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Register</h1>
      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="fullname">Fullname</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
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
            Register
          </button>
        </form>
      </div>
      <p className={styles.register__link}>
        Have an account ? Sing in <Link href="/auth/login">here</Link>
      </p>
    </div>
  );
};

export default RegisterView;
