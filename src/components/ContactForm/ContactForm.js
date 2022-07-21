import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  Formcontact,
  ButtononClick,
  ContactFormField,
  Formcontactlabel,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    }),

  number: yup
    .string()
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      }
    ),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ number: '', name: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Formcontact autoComplete="off">
        <Formcontactlabel htmlFor="user-name">Name</Formcontactlabel>
        <ContactFormField type="text" name="name" id="user-name" />
        <ErrorMessage name="name" />

        <Formcontactlabel htmlFor="number">Number</Formcontactlabel>
        <ContactFormField type="tel" name="number" />
        <ErrorMessage name="number" />

        <ButtononClick type="submit">Add contact</ButtononClick>
      </Formcontact>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
