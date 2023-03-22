import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { GoogleOAuthProvider } from '@react-oauth/google';

const client = new ApolloClient({
  uri: 'https://task-master-be.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

// 578046450967-ndfffiugtjiajnpqp89ilh83ijrm8r8v.apps.googleusercontent.com
// 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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId='578046450967-ndfffiugtjiajnpqp89ilh83ijrm8r8v.apps.googleusercontent.com'>
  <BrowserRouter>
      <React.StrictMode>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </React.StrictMode>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
