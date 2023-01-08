import { useEffect } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsOperations';
import { addContacts } from '../redux/contacts/contactsOperations';
import { getContacts, selectIsLoading, selectError } from '../redux/contacts/contactsReduser';
import  Loader  from '../Loader/Loader';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import '../App.scss';

export default function ContactsView() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);



  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addCont = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === newContact.name)) {
      Notiflix.Notify.warning(`❌ ${newContact.name} is already is contacts`, {
        timeout: 3000,
      });

      return false;
    }
    dispatch(addContacts(newContact));

    return true;
  };

  return (
    <div className="Phonebook">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addCont} />
      <h2 className="TitleContacts">Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
}