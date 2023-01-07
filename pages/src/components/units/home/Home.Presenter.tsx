import * as HomeStyle from './Home.styles';
import * as CommonsStyle from '../../commons/Styles';

export default function HomeUI(props: any) {
  return (
    <HomeStyle.Frame>
      <HomeStyle.MainTitle>
        HELLO,
        <br />
        I&apos;M <CommonsStyle.TittleAttention>RESHUR</CommonsStyle.TittleAttention>
      </HomeStyle.MainTitle>
      <HomeStyle.AboutMe>About ME</HomeStyle.AboutMe>
    </HomeStyle.Frame>
  );
}
