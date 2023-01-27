import { useState, useEffect } from 'react';
// import 'modern-normalize';
import ContactForm from './FormFolder/Form';
import Filter from './FilterFolder/Filter';
import ContactList from './ContactListFolder/ContactList';
import { nanoid } from 'nanoid';
import { Wrap } from 'Global.Styles';

export function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? ''
  );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContacts = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.find(contact => contact.name === name)
      ? alert(name + 'add in contacts.')
      : setContacts([contact, ...contacts]);
  };

  const getFilterOnContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <Wrap>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <ContactList
          contacts={getFilterOnContact()}
          onDelete={deleteContacts}
        />
        <Filter value={filter} onChange={e => setFilter(e.target.value)} />
      </Wrap>
    </>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount = () => {
//     const contact = localStorage.getItem('contacts');
//     if (contact !== null) {
//       this.setState({
//         contacts: JSON.parse(contact),
//       });
//     } else {
//       this.setState({
//         contacts: this.state.contacts,
//       });
//     }
//   };

//   componentDidUpdate = (_, prevState) => {
//     if (prevState.contacts !== this.setState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   addContact = (name, number) => {
//     const { contacts } = this.state;
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     contacts.find(contact => contact.name === name)
//       ? alert(name + ' is already in contacts.')
//       : this.setState(({ contacts }) => ({
//           contacts: [contact, ...contacts],
//         }));
//   };

//   ChangeFilter = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   getFilterOnContact = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const { filter } = this.state;
//     return (
//       <>
//         <Wrap>
//           <h1>Phonebook</h1>
//           <ContactForm onSubmit={this.addContact} />
//           <h2>Contacts</h2>
//           <ContactList
//             contacts={this.getFilterOnContact()}
//             onDelete={this.deleteContact}
//           />
//           <Filter value={filter} onChange={this.ChangeFilter} />
//         </Wrap>
//       </>
//     );
//   }
// }

// export default App;
