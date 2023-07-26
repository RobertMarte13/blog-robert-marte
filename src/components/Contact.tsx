import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/form.css";
import Footer from "./Footer";

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  console.log(form)
  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const contenido = form.current !== null ? form.current : ''
    emailjs
      .sendForm(
        "service_4lnmm9l",
        "template_98otalr",
        contenido,
        "AJN3ZYtQeJO6GN2t-"
      )
  };

  return (
    <div className="content-form">
      <form ref={form} onSubmit={sendEmail} className="form">
        <h2 style={{
          textTransform: 'uppercase',
          marginBottom: 20
        }}>Contactar</h2>
        <input type="text" name="user_name" placeholder="Nombre"/>
        <input type="email" name="user_email" placeholder="Email"/>
        <label>Mensaje</label>
        <textarea name="message" className="message" />
        <button className="btn-submit" type="submit">
          submit
        </button>
      </form>
      <div className="content-footer">

      <Footer />
      </div>
    </div>
  );
};

export default Contact;
