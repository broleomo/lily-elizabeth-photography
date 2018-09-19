import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import BaseLayout from './BaseLayout';
import Contact from './Contact';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
    ,
  
    document.getElementById('root'));
  registerServiceWorker();
