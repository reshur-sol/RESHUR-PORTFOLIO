import * as GlobalStyles from './src/components/commons/Styles';
import Contact from './src/components/units/contact/Contact.Container';
import Nav from './src/components/units/nav/Nav.Container';

export default function ContactPage() {
  return (
    <GlobalStyles.Frame>
      <Nav />
      <Contact />
    </GlobalStyles.Frame>
  );
}
