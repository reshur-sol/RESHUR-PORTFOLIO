import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faRss } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import * as NavStyles from './Nav.Styles';

export default function NavUI(props: any) {
  return (
    <NavStyles.Navbar>
      <NavStyles.Logo>
        <FontAwesomeIcon
          icon={faMoon}
          className='Logo'
          onClick={props.MoveToMain}
        />
      </NavStyles.Logo>
      <NavStyles.Menu>
        <NavStyles.Menuitem>Home</NavStyles.Menuitem>
        <NavStyles.Menuitem>About Me</NavStyles.Menuitem>
        <NavStyles.Menuitem>Work</NavStyles.Menuitem>
        <NavStyles.Menuitem>Contact</NavStyles.Menuitem>
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
