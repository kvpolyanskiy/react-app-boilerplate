
import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Just for checking env variables, delete in a real project
console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
