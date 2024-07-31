import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="pb-5">
        Hello <b>HOME</b>
      </h1>
      <Link href="/folder">Go to folder</Link>
    </div>
  );
}
