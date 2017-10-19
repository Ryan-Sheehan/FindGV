import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import Post_10_19_2017 from './Post_10_19_2017';
import PageNotFound from './PageNotFound';
import s from '../styles/posts.style';

const PageText = () => (
  <p style={s.p}>
    A fun way to find a new place to eat
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
            <Post location={location} />
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
                to="/posts/post_10_19_2017?field1=foo&field2=bar#boom!"
              >Posts</Interactive>
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}
