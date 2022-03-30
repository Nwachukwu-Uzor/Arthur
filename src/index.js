import {render} from 'react-dom';
import react from 'react';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = document.getElementById("root");

render(<BrowserRouter><App /></BrowserRouter>, root)