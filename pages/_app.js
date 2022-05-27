import { RecoilRoot, atom, useRecoilState, useRecoilValue } from "recoil";
import Input from '../components/Input';
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Input />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
