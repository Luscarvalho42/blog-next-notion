import 'styles/global.css'

import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-coy.css'
import 'katex/dist/katex.min.css'

import 'styles/notion.css'

import 'styles/prism-theme.css'

import 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'

import React from 'react'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
