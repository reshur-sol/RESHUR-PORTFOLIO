import NavUI from './Nav.Presenter';

export default function Nav() {
  // Copyright Year
  const Year = new Date();
  const thisYear = Year.getFullYear();
  return <NavUI copyright={thisYear} />;
}
