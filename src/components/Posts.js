import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import Post_10_19_2017 from './Post_10_19_2017';
import PageNotFound from './PageNotFound';
import s from '../styles/posts.style';

const PageText = () => (
  <p style={s.p}>
    Weekly updates about FindGV's development process
    <img src="./logo.png"/>
  </p>
);

export default function Posts() {
  return (
    <Switch>
      <Route
        exact path="/posts/post_10_19_2017"
        render={({ location }) => (
          <div>
            <PageText />
            <Post_10_19_2017 location={location} />
          </div>
        )}
      />
      
      <Route
        exact path="/posts"
        render={() => (
          <div>
            <PageText />
            <div style={s.pageLinkContainer}>
              <Interactive
                as={Link}
                {...s.link}
                to="/posts/post_10_19_2017"
              >October, 19 2017</Interactive>
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}
