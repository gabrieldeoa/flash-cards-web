import React from 'react';

import { FooterStyle } from './styles';

const Footer: React.FC = () => (
  <FooterStyle>
    <div className="textArea">
      <ul>
        <li>Desenvolvedores</li>
        <ul>
          <li>Arthur Pedrosa [git] [linkedin]</li>
          <li>Gabriel Araujo [git] [linkedin]</li>
          <li>Wender Machado [git] [linkedin]</li>
        </ul>
      </ul>

      <ul> Lorem Ipsum
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
      </ul>

      <ul> Lorem Ipsum
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
      </ul>
    </div>
  </FooterStyle>
);

export default Footer;
