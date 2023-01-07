import * as MainStyles from '../../styles/main.styles';
import Nav from '../src/components/units/nav/Nav.Container';
import Home from '../src/components/units/home/Home.Container';
export default function MainPage() {
  return (
    <MainStyles.Frame>
      <MainStyles.NavBar>
        <Nav />
      </MainStyles.NavBar>
      <MainStyles.MainFrame>
        <Home />
      </MainStyles.MainFrame>
    </MainStyles.Frame>
  );
}
