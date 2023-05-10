import styles from '@src/styles/Home.module.css';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import FormRoom from '@src/modules/FormRoom';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});



export default function Home() {
  return (
    <>
      <Head>
        <title>Переговорная</title>
        <meta name='description' content='Форма бронирования переговорной' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${roboto.className}`}>
        <h1>Переговорная</h1>
        <FormRoom />
      </main>
    </>
  );
}
