import NavUI from './Nav.Presenter';

export default function Nav() {
  // Copyright Year
  const Year: any = new Date();
  const thisYear: any = Year.getFullYear();
  return <NavUI copyright={thisYear} />;
}
