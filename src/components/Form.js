import React from "react"
import styled from "styled-components"
import EmailBg from "../assets/images/email.jpg"

const Form = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Pedí tu presupuesto</h1>
        <p>¿Te gustaron nuestras propuestas? ¡Escribinos y contanos!</p>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <FormWrap>
            <input
              type="text"
              placeholder="Tu nombre..."
              id="name"
              required="required"
            />

            <input
              type="text"
              placeholder="Tu correo electrónico..."
              id="email"
            />

            <input
              type="text"
              placeholder="Tu télefono..."
              id="phone"
              required="required"
            />

            <select
              className="form-control"
              id="menuServicios"
              name="platform"
              required="required"
            >
              <option value="Básico">Básico</option>
              <option value="Pro">Pro</option>
              <option value="Premium">Premium</option>
              <option value="Corp">Corp</option>
              <option value="Marketing Digital">Marketing Digital</option>
              <option value="Otros">Otros</option>
            </select>

            <textarea
              id="subject"
              name="subject"
              placeholder="Tu mensaje..."
            ></textarea>
            <input type="submit" value="Solicitar presupuesto"></input>
          </FormWrap>
        </form>
      </EmailContent>
    </EmailContainer>
  )
}
export default Form



const EmailContainer = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${EmailBg}) no-repeat center;
  background-size: cover;
  height: 525px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form {
    z-index: 10;
  }
`

const FormWrap = styled.div`
  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    margin: 5px 0px 5px 0px;
    border-radius: 20px;
    resize: none;
  }
  input[type="submit"] {
    
    float:left;
    background-color: #f26a2e;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    
  }

  input[type="submit"]:hover {
    background-color: rgb(204, 51, 255);
  }
`


