import styles from '@src/styles/Home.module.css';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import FormRoom from '@src/modules/FormRoom';
import { Container, CssBaseline, Typography } from '@mui/material';

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
        <CssBaseline />
        <Container maxWidth='md'
        sx={{backgroundColor: 'white', padding: {xs: '2rem', md: '4rem'}}}
        >
          <Typography
            variant='h1'
            sx={{color: '#0077ff', fontSize: {xs: '3rem', md: '4rem'}}}
            className={styles.title}
            mb={3}
          >
            Переговорная
          </Typography>
          <FormRoom />
        </Container>
      </main>
    </>
  );
}
