import AboutMe from './src/components/units/aboutme/AboutMe.Container';
import Nav from './src/components/units/nav/Nav.Container';
import * as GlobalStyles from './src/components/commons/Styles';
export default function AboutMePage() {
  return (
    <GlobalStyles.Frame>
      <Nav />
      <AboutMe />
    </GlobalStyles.Frame>
  );
}
