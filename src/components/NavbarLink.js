import { Link as ScrollLink } from 'react-scroll';

function NavbarLink({ linkTo }) {
  return (
    <ScrollLink
      to={linkTo}
      spy
      smooth
      duration={500}
      offset={-50}
      style={{ 'text-transform': 'capitalize', cursor: 'pointer' }}
    >
      {linkTo}
    </ScrollLink>
  );
}

export default NavbarLink;
