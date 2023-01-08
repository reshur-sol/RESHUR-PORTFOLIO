import NavUI from './Nav.Presenter';
import AboutMe from '../aboutme/AboutMe.Container';
import { useRouter } from 'next/router';

export default function Nav(props: any) {
  // router
  const router = useRouter();
  const MoveToHome = () => {
    router.push('/');
  };
  const MoveToAboutMe = () => {
    router.push('/aboutme');
  };
  const MoveToWork = () => {
    router.push('/work');
  };
  const MoveToContact = () => {
    router.push('/contact');
  };
  // Copyright Year
  const Year: Date = new Date();
  const thisYear: number = Year.getFullYear();
  return (
    <NavUI
      copyright={thisYear}
      MoveToHeme={MoveToHome}
      MoveToAboutMe={MoveToAboutMe}
      MoveToWork={MoveToWork}
      MoveToContact={MoveToContact}
    />
  );
}
