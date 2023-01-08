import * as GlobalStyles from './src/components/commons/Styles';
import Nav from './src/components/units/nav/Nav.Container';
import Work from './src/components/units/work/Work.Container';
export default function WorkPage() {
  return (
    <GlobalStyles.Frame>
      <Nav />
      <Work />
    </GlobalStyles.Frame>
  );
}
