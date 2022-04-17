import React from 'react'
import App from './App'
import ReactDOM from 'react-dom';
import { Provider, chain, defaultChains } from 'wagmi'
import { BrowserRouter as Router} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import {theme} from './utils/theme';
import {connectors, provider, webSocketProvider} from './utils/connectors';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <Provider       
            autoConnect
            connectors={connectors}
            provider={provider}
            webSocketProvider={webSocketProvider}
            >
            <App />
          </Provider>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
,document.getElementById('root'))
