import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link, Span } from './ContactList.styled';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Link key={id}>
          <Span>{name + ': ' + number}</Span>
          <Button type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </Button>
        </Link>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
