import React from "react";
import { hot } from 'react-hot-loader/root';
import * as Icon from 'react-feather';
import {Space} from 'antd'



// eslint-disable-next-line
function App() {
  return (
    <div>
      <section class="hero is-dark is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-size-2 is-size-4-mobile">
              Mohammad Masoudie
            </h1>
            <h4 class="subtitle is-size-7-mobile">
              Software engineer 
            </h4>
            <div>
              
            <Space direction='horizontal'>
              <a href='https://github.com/mohammadmaso'><Icon.GitHub/></a>
              <a href='tel:+989380374660'><Icon.PhoneCall/></a>
              <a href='mailto:mohammadmasoudie@gmail.com'><Icon.AtSign/></a>
              <a href='https://virgool.io/@mohammadmaso'><Icon.Edit2/></a>
              <a href='https://github.com/mohammadmaso/MMH.ir/raw/master/public/Mohammad_Masoudie_s_CV.pdf'><Icon.FileText/></a>
            </Space>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default hot(App) 
