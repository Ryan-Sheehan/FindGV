import React from 'react';
import s from '../styles/post.style';
import mock_one from '../images/post_one/mock_one.png'
import mock_two from '../images/post_one/mock_two.png'
import mock_three from '../images/post_one/mock_three.png'


export default function Post_10_19_2017({ location }) {
  
  return (
    <div>
      <div style={s.lineContainer}>
        Yo
      </div>
      <div style={s.lineContainer}>
        What is good
        <img src={mock_one} alt={"mock_one"}/>
        <img src={mock_two} alt={"mock_two"}/>
        <img src={mock_three} alt={"mock_three"}/>
      </div>
    </div>
  );
}

