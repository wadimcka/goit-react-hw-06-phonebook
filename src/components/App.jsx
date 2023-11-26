import Form from './Form/Form';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
