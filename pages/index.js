import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/page1">
        <a>Go Page1</a>
      </Link>
      <br/>
      <Link href="/page2">
        <a>Go Page2</a>
      </Link>
    </div>
  );
}
