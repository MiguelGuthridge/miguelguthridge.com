import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Miguel Guthridge</title>
        <meta name="description" content="Miguel Guthridge's homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello world!</h1>
        <h2>I&apos;m Miguel</h2>
        <p>
          This is my website, where I&apos;ll eventually have cool things like
          show off my projects and stuff.
        </p>
        <p>
          It&apos;s pretty bare-bones for now, but I&apos;ll be fleshing it out
          as I learn more web frontend!
        </p>
        <ul>
          <li><Link href='/projects'>My projects</Link></li>
          <li><a
            href="https://github.com/MiguelGuthridge"
            target='_blank'
          >GitHub/MiguelGuthridge</a></li>
          <li><a
            href="https://www.linkedin.com/in/miguelguthridge/"
            target='_blank'
          >LinkedIn/in/MiguelGuthridge</a></li>
        </ul>
        <Image
          src='/profile.jpg'
          alt='A photo of me'
          width={406}
          height={541}  // FIXME: Need a better way to specify this
        />
      </main>
    </>
  );
}
