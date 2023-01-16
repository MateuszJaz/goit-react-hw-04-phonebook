import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  return (
    <>
      <form className={style.form} onSubmit={onSubmit}>
        <label htmlFor="name">
          Name
          <input
            className={style.formInput}
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="e.g. John Doe"
            required
          />
        </label>
        <label htmlFor="number">
          Number
          <input
            className={style.formInput}
            autoComplete="off"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="e.g. 123-456-789"
            required
          />
        </label>
        <button className={style.formBtn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
