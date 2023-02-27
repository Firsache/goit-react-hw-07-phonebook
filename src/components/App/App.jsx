import { useSelector } from 'react-redux';

import { MdContactPhone } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectContacts, selectFilteredName } from 'redux/contacts/selectors';
import { selectThemeTitle } from 'redux/global/selectors';

import { Container, Title } from './App.styled';
import { GlobalStyles } from 'styles/GlobalStyles/globalStyles.styled';
import { colors } from 'styles/colors';
import { theme } from '../../styles/theme';
import {
  Layout,
  Contacts,
  Form,
  Filter,
  Section,
  ThemeSwitcher,
  Box,
} from '../index';

export function App() {
  const contacts = useSelector(selectContacts);
  const themeTitle = useSelector(selectThemeTitle);
  const filteredName = useSelector(selectFilteredName);
  const normalizedTheme = { ...theme, ...colors[themeTitle] };

  return (
    <Layout theme={normalizedTheme}>
      <Box as="section">
        <Box
          position="relative"
          py={4}
          bg={normalizedTheme.colors.accent}
          as="div"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={normalizedTheme.colors.white}
            as="div"
          >
            <MdContactPhone size={35} />
            <Title>Phonebook</Title>
          </Box>

          <ThemeSwitcher />
        </Box>
        <Container>
          <Form />
          <Section title="Contacts">
            {(contacts.length > 1 || filteredName) && <Filter />}
            <Contacts />
          </Section>
          <ToastContainer autoClose={3000} />
          <GlobalStyles />
        </Container>
      </Box>
    </Layout>
  );
}
