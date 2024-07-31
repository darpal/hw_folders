import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hellow folder page</h1>
      <br />
      <Link href="/folder/1">Go to folder 1</Link>
    </div>
  );
}
