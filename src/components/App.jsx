import { useEffect, lazy } from 'react';

import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import Container from './Container';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivatRoute';

// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import ContactsView from './views/ContactsView';

import { authOperations } from './redux/auth';
import { useAuth } from './hooks/useAuth';

import './App.scss';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b> Fetching user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route index element={<HomeView />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={RegisterView}
              redirectTo={'/contacts'}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              component={LoginView}
              redirectTo={'/contacts'}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsView} redirectTo={'/login'} />
          }
        />

      </Route>
    </Routes>
  );

  // <Container>
  //   <AppBar />
  //   <Routes>
  //     <Route exact path="/" component={HomeView} />
  //     <Route path="register" component={RegisterView} />
  //     <Route path="login" component={LoginView} />
  //     <Route path="contacts" component={ContactsView}/>
  //   </Routes>
  // </Container>
}

// ==== Старая версия на классах ====
// class App extends Component {
//   state = {
//       contacts: [
//         {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//         {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//         {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//         {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
//       ],
//       filter: "",
//    };

//    addContact = (name, number) => {
//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     console.log(newContact);

//     if (this.state.contacts.some(contact => contact.name === newContact.name)) {

//       Notiflix.Notify.warning(`❌ ${newContact.name} is already is contacts`, {
//         timeout: 3000,
//         });

//       return false;
//       }
//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }))
//     return true;
//     ;
//   };

//   deleteContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
//     }));
//   };

//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;

//     const normalizedFilter = filter.toLocaleLowerCase();

//     return contacts.filter((contact) =>
//     contact.name.toLocaleLowerCase().includes(normalizedFilter)
//     );
//   };

// componentDidMount() {
//   console.log('App componentDidMount');
// }

// componentDidUpdate(prevProps, prevState) {
//   console.log('App componentDidUpdate')
//   console.log(prevState);
//   console.log(this.state);

// }

//   render() {

//     console.log('App render');

//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div className="Phonebook">
//       <h1 >Phonebook</h1>
//       <ContactForm onSubmit={this.addContact}  />

//       <h2 className='TitleContacts'>Contacts</h2>
//       <Filter value={filter} onChange={this.changeFilter} />
//       <ContactList  contacts={visibleContacts}
//           onDeleteContact={this.deleteContact} />
//     </div>
//     );
//   }
// }

// export default App;
