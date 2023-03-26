import React from 'react'
import Head from 'next/head'
import { PageHead } from './PageHead'

import styles from './styles.module.css'

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = 'Error'

  return (
    <>
      <PageHead />

      <Head>
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />

        <title>Lucas Felizardo • {title}</title>
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Desculpe! Ocorreu um erro ao carrega esta página.</h1>

          {statusCode && <p>Erro: {statusCode}</p>}

          <img src='/error.png' alt='Error' className={styles.errorImage} />
        </main>
      </div>
    </>
  )
}
