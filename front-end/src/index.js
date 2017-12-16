import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware} from 'redux';
import RootReducer from './reducers/RootReducer';
import reduxPromise from 'redux-promise';
import { Provider } from 'react-redux';

const middleWare = applyMiddleware(reduxPromise);
const storeWithMid = middleWare(createStore);
const theStore = storeWithMid(RootReducer);


ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

