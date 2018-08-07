import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Formik } from 'formik';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import '../fonts.css';

const CommentBox = styled.div`
  width: 60rem;
  height: 57.642857rem;
  margin-top: 19.57142rem;
  margin-left: 0.07142857142857142rem;
  background-color: #15181c;
  border-radius: 4px;
  @media (max-width: 1025px) {
    margin-top: 18.987rem;
  }
`;

const FormBox = styled.div`
  margin: 0 14.571em 0 9.571em;

  h1 {
    font-family: 'Playfair Display';
    font-weight: 400;
    font-size: 1.714em;
    color: #f9b601;
    margin-bottom: 0.5714rem;
    padding-top: 3.429rem;
  }
  p {
    font-family: 'Open Sans';
    font-size: 1.143em;
    color: white;
    opacity: 0.8;
  }
  form {
    margin-top: 3.71428rem;
    color: rgba(255, 255, 255, 0.5);
  }
  &&& .field > input {
    background: transparent;
    font-family: 'Open Sans';
    font-size: 1.143em;
    color: rgba(255, 255, 255, 0.5);
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid #979797;
    opacity: 0.6;
    padding: 0;
    padding-bottom: 0.71428rem;
  }
  .field:nth-child(2),
  .field:nth-child(3) {
    margin-top: 2.21428rem;
  }
  .field:nth-child(4) {
    margin-top: 11.85714rem;
  }
  .field:nth-child(5) label {
    width: 35.5rem;
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Open Sans';
    font-size: 0.714em;
    line-height: 13.6px;
    padding-left: 2.85714rem;
    margin-top: 0.714285rem;
  }
  .ui.checkbox input:focus ~ label {
    color: rgba(255, 255, 255, 0.8);
  }
  .ui.checkbox input:checked ~ .box:after,
  .ui.checkbox input:checked ~ label:after {
    top: 1.5px;
    color: white;
  }
  .ui.checkbox label:before,
  .ui.checkbox input:checked ~ .box:before,
  .ui.checkbox input:checked ~ label:before,
  .ui.checkbox input:focus ~ .box:before,
  .ui.checkbox input:focus ~ label:before,
  .ui.checkbox .box:hover::before,
  .ui.checkbox label:hover::before {
    background: transparent;
    border-color: #979797;
  }
  .button {
    width: 180px;
    height: 46px;
    background-color: #f9b601;
    color: #1e1e1e;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 0.857em;
    text-transform: uppercase;
    margin-top: 0.857142rem;
  }
  .button:active,
  .button:hover,
  .button:focus {
    background-color: #f9b601;
  }
`;
const Error = styled.div`
  color: red;
  font-size: 0.9em;
`;

const validation = values => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.surname) {
    errors.surname = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (!values.comment) {
    errors.comment = 'Required';
  }
  if (values.isConfirmed === false) {
    errors.isConfirmed = 'Required';
  }
  return errors;
};
const submit = (values, { setSubmitting, resetForm }) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: values.name,
      surname: values.surname,
      email: values.email,
      comment: values.comment,
      consent: values.isConfirmed,
    }),
  })
    .then(res => res.json())
    .catch(err => console.log('Error: ', err))
    .then(
      data => console.log('Success!', data),
      setSubmitting(false),
      setTimeout(() => resetForm(), 2000),
    );
};

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      surname: '',
      email: '',
      comment: '',
      isConfirmed: false,
    };
  }

  render() {
    return (
      <CommentBox>
        <FormBox>
          <h1> Komentar </h1>
          <p>
            Molimo Vas ispunite sljedeća polja. Unos svih polja je
            obavezan.
          </p>
          <Formik
            initialValues={{
              name: this.state.name,
              surname: this.state.surname,
              email: this.state.email,
              comment: this.state.comment,
              isConfirmed: this.state.isConfirmed,
            }}
            validate={validation}
            onSubmit={submit}
            render={({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <input
                    name="name"
                    type="text"
                    value={values.name || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Ime: "
                  />
                  {touched.name &&
                    errors.name && <Error>{errors.name}</Error>}
                </Form.Field>
                <Form.Field>
                  <input
                    name="surname"
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Prezime: "
                  />
                  {touched.surname &&
                    errors.surname && <Error>{errors.surname}</Error>}
                </Form.Field>
                <Form.Field>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email: "
                  />
                  {touched.email &&
                    errors.email && <Error>{errors.email}</Error>}
                </Form.Field>
                <Form.Field>
                  <input
                    name="comment"
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Komentar: "
                  />
                  {touched.comment &&
                    errors.comment && <Error>{errors.comment}</Error>}
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    id="isConfirmed"
                    type="checkbox"
                    checked={values.isConfirmed}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Davatelj osobnih podataka ovog upitnika daje privolu Primatelju podataka da se osobni podaci navedeni u upitniku mogu koristiti i obrađivati isključivo u svrhu eventualnog zapošljavanja Davatelja podataka, kao i da se osobni podaci za predmetnu svrhu mogu čuvati u evidencijama za zapošljavanje najduže u vremenskom razdoblju od dvije godine od dana davanja osobnih podataka na korištenje Primatelju. Davatelj osobnih podataka može u svakom trenutku svoju privolu za korištenjem, obradom i čuvanjem osobnih podataka povući pisanim putem na e mail: ljudski.potencijali@mlinar.eu.com ili info@mlinar.eu.com."
                  />
                  {touched.isConfirmed &&
                    errors.isConfirmed && (
                      <Error>{errors.isConfirmed}</Error>
                    )}
                </Form.Field>
                <Button
                  floated="right"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Pošalji
                </Button>
              </Form>
            )}
          />
        </FormBox>
      </CommentBox>
    );
  }
}

export default CommentForm;
