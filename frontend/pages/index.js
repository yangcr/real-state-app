import Head from 'next/head'
import styles from './Home.module.css'
import SearchBox from '../Components/SearchBox/SearchBox';
import ListingContainer from '../Components/ListingContainer/ListingContainer';
import { useState } from 'react';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Real Estate app | Codemia</title>
        <meta name="description" content="Sitio de propiedades, desarrollado para Codemia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchBox/>
        <ListingContainer />

      </main>
    </div>
  )
}
