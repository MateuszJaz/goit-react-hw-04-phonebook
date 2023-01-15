import propTypes from 'prop-types';
import style from './Contacts.module.css';

const ContactListItem = ({ contacts, handleDelete }) =>
  contacts.map(({ id, name, number }) => (
    <li className={style.contactsItem} key={id}>
      {name}: {number}
      <button
        className={style.contactBtn}
        type="submit"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  ));

export default ContactListItem;

ContactListItem.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
