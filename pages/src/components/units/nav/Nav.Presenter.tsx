import * as NavStyles from './Nav.Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faRss } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import NavLinks from '../../../../../data/navlinks';

export default function NavUI(props) {
  return (
    <NavStyles.Navbar>
      <NavStyles.Logo>
        <FontAwesomeIcon
          icon={faMoon}
          className='Logo'
        />
      </NavStyles.Logo>
      <NavStyles.Menu>
        {NavLinks.map((nav) => (
          <Link
            href={nav.link}
            key={nav.title}
          >
            <NavStyles.MenuItem>{nav.title}</NavStyles.MenuItem>
          </Link>
        ))}
      </NavStyles.Menu>
      <NavStyles.SocialIcon>
        <Link
          className='Github'
          href='https://github.com/reshur-sol'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faGithub} />
        </Link>
        <Link
          className='Blog'
          href='https://reshur-sol.github.io'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faRss} />
        </Link>
      </NavStyles.SocialIcon>
      <NavStyles.Copyright>©️{props.copyright}</NavStyles.Copyright>
    </NavStyles.Navbar>
  );
}
