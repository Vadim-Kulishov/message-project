import React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
// стили
import 'bootstrap/dist/css/bootstrap.min.css'
import 'emoji-mart/css/emoji-mart.css'
// компонент
import { App } from './App'
// небольшая корректировка "бутстраповских" стилей
const GlobalStyles = createGlobalStyle`
.card-header {
  padding: 0.25em 0.5em;
}
.card-body {
  padding: 0.25em 0.5em;
}
.card-text {
  margin: 0;
}
`

const root = document.getElementById('root')
render(
  <>
    <GlobalStyles />
    <App />
  </>,
  root
)