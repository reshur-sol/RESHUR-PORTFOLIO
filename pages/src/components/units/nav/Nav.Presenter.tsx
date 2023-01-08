import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faRss } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import * as NavStyles from './Nav.Styles';
import Title from '../../commons/Title';

export default function NavUI(props: any) {
  return (
    <NavStyles.Navbar>
      <Title />
      <NavStyles.Logo>
        <FontAwesomeIcon
          icon={faMoon}
          className='Logo'
          onClick={props.MoveToHome}
        />
      </NavStyles.Logo>
      <NavStyles.Menu>
        <NavStyles.Menuitem onClick={props.MoveToHome}>Home</NavStyles.Menuitem>
        <NavStyles.Menuitem onClick={props.MoveToAboutMe}>About Me</NavStyles.Menuitem>
        <NavStyles.Menuitem onClick={props.MoveToWork}>Work</NavStyles.Menuitem>
        <NavStyles.Menuitem onClick={props.MoveToContact}>Contact</NavStyles.Menuitem>
      </NavStyles.Menu>
      <NavStyles.SocialIcon>
        <a
          className='Github'
          href='https://github.com/reshur-sol'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className='Blog'
          href='https://reshur-sol.github.io'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faRss} />
        </a>
      </NavStyles.SocialIcon>
      <NavStyles.Copyright>©️{props.copyright}</NavStyles.Copyright>
    </NavStyles.Navbar>
  );
}
