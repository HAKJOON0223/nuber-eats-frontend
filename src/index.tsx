import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { client } from './apollo';

console.log(process.env.REACT_APP_GOOGLE_MAP_API);

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
