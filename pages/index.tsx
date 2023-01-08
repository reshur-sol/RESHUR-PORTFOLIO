import Nav from './src/components/units/nav/Nav.Container';
import Home from './src/components/units/home/Home.Container';
import * as GlobalStyles from './src/components/commons/Styles';
export default function MainPage() {
  return (
    <GlobalStyles.Frame>
      <Nav />
      <Home />
    </GlobalStyles.Frame>
  );
}
