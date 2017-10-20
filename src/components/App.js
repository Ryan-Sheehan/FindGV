import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>FindGV</h1>
      <p>Like Tinder, but for restaurants</p>    
      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
      </Switch>

      <div style={s.creditLine}>
        <Interactive
          as="a"
          href="http://www.ryanwsheehan.com"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          Site by <span {...s.childLink}>Ryan Sheehan</span>
        </Interactive>
      </div>
    </div>
  );
}
