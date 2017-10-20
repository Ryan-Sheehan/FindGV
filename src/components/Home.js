import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {

  return (
    <div>
      <p style={s.p}>
        First entry soon come
      </p>
      <p style={s.p}>
        Founders: Ryan Sheehan & Jeffrey Bui
      </p>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/posts/post_10_19_2017"
        >October 19, 2017</Interactive>
      </div>
    </div>
  );
}
