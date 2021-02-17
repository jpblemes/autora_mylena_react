import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter as Router} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);