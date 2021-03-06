import React from "react"
import styled from "styled-components"
import EmailBg from "../assets/images/email.jpg"
import { Button } from "./Button"

const Email = () => {
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

            <input type="email" placeholder="Tu mail..." id="email" />

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

export default Email

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
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 20px;

  }
  input[type="submit"] {
    width: 100%;
    background-color: #F26A2E;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

  }

  input[type="submit"]:hover {
    background-color: rgb(204,51,255);
  }

  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 20px;

  }
  textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius:20px;
    outline: none;
    resize: none;
  }

  @media screen and(max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    input,
    select,
    textarea {
      margin-bottom: 1rem;
      width: 100%;
      margin-right: 0;
    }
  }
`
