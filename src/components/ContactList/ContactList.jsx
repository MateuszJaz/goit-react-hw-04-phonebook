import PropTypes from 'prop-types';
import style from './Contacts.module.css';

const ContactList = ({ children }) => {
  return <ul className={style.contactsList}>{children}</ul>;
};

ContactList.propTypes = {
  children: PropTypes.element.isRequired,
};
export default ContactList;
