import * as MainStyles from '../../styles/main.styles';
import Nav from '../src/components/units/nav/Nav.Container';

export default function MainPage() {
  return (
    <MainStyles.Frame>
      <MainStyles.NavBar>
        <Nav />
      </MainStyles.NavBar>
      <MainStyles.MainFrame></MainStyles.MainFrame>
    </MainStyles.Frame>
  );
}
