import React, {Component} from 'react';
import './App.css';
import { Icon, Menu , Segment, Button, Header,  Modal  } from 'semantic-ui-react'


export default class App extends Component {
  state = { activeItem: 'home' }
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

  return (
    <div className="App">
      <header className="App-header">
      <svg
          id="logo"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 370.57 214.33"
        >
          <path
            class="cls-2"
            id="mohammad"
            d="M444.81,384.6c-2.44-.4-4.89-1.19-7.32-1.12-8.45.24-16.88.77-25.33,1.18-3.1.15-4.09-1.16-2.54-4,4.12-7.38,8.17-15,14.8-20.42,9.25-7.63,18.86-14.85,28.37-22.17,2.63-2,5.48-3.78,8.21-5.69.64-.45,1.2-1,2.06-1.76-1.25-1-2.25-1.92-3.33-2.71a3.06,3.06,0,0,1-1-4.46A108.75,108.75,0,0,1,474,302.71a14,14,0,0,1,4.24-3.19,5.85,5.85,0,0,1,4.16-.32q9.59,3.85,19,8.19c3.75,1.73,4.83,4.37,3.33,8.22-3.14,8.09-7.82,15.31-14.68,20.59-3.2,2.45-7.62,3.44-11.59,4.75-15,5-29.59,10.83-42.48,20.21-3.73,2.71-7.19,5.78-10.76,8.71-.22.18-.31.53-.72,1.25a20.78,20.78,0,0,0,3.2,0c4.41-.72,8.79-1.59,13.2-2.28a68.09,68.09,0,0,1,23.78.32c3.81.74,5.26,3.26,4,6.93-3,8.75-8.82,14.71-17.22,18.48-7.1,3.19-14.18,6.49-21,10.29-3.14,1.77-5.76,4.66-8.2,7.42-1.48,1.68-2.24,4-3.19,6.15-1.33,3-.05,5.52,3.43,6.46a72.39,72.39,0,0,0,7.65,1.35c3.08.47,4,1.39,3.38,4.05-2.88,12.18-7.37,23.57-16.46,32.62a29.89,29.89,0,0,1-15.37,8.41c-9.5,1.94-19-3.7-22.61-13.55-.55-1.5-1.06-3-1.8-5.12-1.07,1.32-1.89,2.23-2.61,3.22-4.42,6.12-9.15,12-16.21,15.12-4,1.75-8.32,2.68-12.57,3.7s-8.27,1.73-12.44,2.4a31.43,31.43,0,0,1-4.95,0l-.31-.75c.95-.76,1.85-1.6,2.86-2.27,9.38-6.26,19-12.23,28.15-18.79,11.84-8.46,20-20.07,26.49-32.93,3.93-7.83,7.56-15.81,11.41-23.69.65-1.34,1.12-3.77,3.17-2.89s.57,2.79.1,4.25q-1.95,6.14-3.92,12.28c-1.42,4.44-.92,8.85.35,13.21a9.54,9.54,0,0,0,4.87,5.83c1.35.72,2.41.65,3.11-1,.94-2.24,2.62-4.3,3-6.61,1.15-6.57,5.09-11.6,8.66-16.82,5.58-8.18,13.82-13.12,22.34-17.65,2.08-1.11,4.12-2.31,6.17-3.47Z"
            transform="translate(-136.22 -276.92)"
          />
          <path
            class="cls-2"
            id="maso"
            d="M212.85,474.18c2.11-1.56,4.21-3.12,6.33-4.66,8.14-5.91,16.51-11.53,24.36-17.8a45.81,45.81,0,0,0,13.27-16.66c.5-1.08.86-2.23,1.53-4-1.74.37-2.95.65-4.15.89-4.83,1-9.69,1.43-14.45-.23-8.08-2.81-11.4-8.92-8.83-17.05,3.2-10.12,7.61-19.7,14.32-28.05,4.54-5.64,9.58-7,15.42-4,3.6,1.84,5.94,5,7.7,8.54a29.73,29.73,0,0,1,2.86,15.64c-.17,2.45.4,3,2.71,2.34a55.16,55.16,0,0,0,16.87-8c5.76-4,5.46-10.53-.71-14.21a12.59,12.59,0,0,0-4.83-1.3c-1.26-.16-2.59.26-3.88.22a33.91,33.91,0,0,1-3.87-.52c.22-1.48.05-3.17.73-4.4,3.15-5.78,8.22-9.54,14-12.42,9-4.48,18-4.92,27.2-.52,4.51,2.16,6.13,5.59,4.22,10.18-1.59,3.8-3.73,7.36-5.59,11a12.49,12.49,0,0,0-.62,1.75,5.94,5.94,0,0,0,2,.59c8.75-.66,16.25-3.7,21.23-11.41.65-1,1.33-2,2.09-3.16A13.78,13.78,0,0,1,344,378c2.15,2,5.16,2.38,7.22.35a65.64,65.64,0,0,0,5.61-7,19.72,19.72,0,0,0,1.22-1.94c.36,0,.56-.06.67,0,4.57,3.31,8,2.72,11.17-2.07a32,32,0,0,0,2.54-4.72c.59-1.31,1.29-1.5,2.45-.78,2.05,1.29,3.89.76,5.92-.36,5.62-3.11,8.81-8.26,11.85-13.56,2.26-3.94,4.21-8.09,6.7-11.88,2.16-3.3,4.94-6.18,7.32-9.35,2.83-3.75,5.56-7.58,8.24-11.45,1.76-2.54,2-2.63,3.94-.17,2.49,3.11,5.14,6.12,7.32,9.43,6.26,9.46,1.74,23.51-9,27-3.47,1.13-7.57.79-11.33.44s-6.88.68-9.09,3.85-4.33,6.48-6.57,9.66a51.13,51.13,0,0,1-24.64,19c-2.36.87-4.24,2.94-6.52,4.08-7.36,3.67-13.79,9.17-22.14,10.91a11.08,11.08,0,0,0-5.49,2.94c-6.8,7.16-14.8,8.29-23.67,5.08-3.08-1.12-5.22-.84-7.79,1.49a155,155,0,0,1-33.35,22.7c-1.18.6-1.93,2.28-2.6,3.6-3.36,6.67-6.49,13.45-10,20.05a28.69,28.69,0,0,1-18.69,14.9c-6,1.59-11.95,3.07-17.95,4.5a25.58,25.58,0,0,1-4.22.29Z"
            transform="translate(-136.22 -276.92)"
          />
          <path
            class="cls-2"
            id="ya"
            d="M136.78,477.8V460c0-3.5.05-7,0-10.49,0-1.32.35-1.88,1.68-2.43,12.94-5.29,24.31-12.81,32.44-24.42a52.22,52.22,0,0,0,5.46-10.81c1.81-4.59.49-7.54-4.11-9.35-4.45-1.75-9.08-3-13.62-4.54-5.47-1.83-10.54-4.37-12.45-10.31-1.71-5.32-1.26-10.85.2-16.15C152,351,163.7,334.07,178.37,319c10.15-10.4,21.38-19.48,34.34-26.23a54.05,54.05,0,0,1,6.7-2.84,2.59,2.59,0,0,1,3.21,3.28,46.22,46.22,0,0,1-2.44,7.64c-2.44,5.75-5,11.44-7.65,17.11-.85,1.83-1.81,2.7-4.47,2.17-2.93-.59-6.33.15-9.32,1-17.17,5-29.6,16.13-38.9,31-2.92,4.66-1.47,8.93,3.51,11.32,4.16,2,8.49,3.66,12.79,5.34,5.77,2.26,8,6.87,8.39,12.59.57,8.43-.7,16.74-2.49,24.93-2.41,11-5.68,21.69-10.8,31.74-6.93,13.61-15.54,25.93-27.89,35.26C141.43,474.8,139.37,476.06,136.78,477.8Z"
            transform="translate(-136.22 -276.92)"
          />
          <path
            class="cls-2"
            id="dal"
            d="M223.84,414c.19,14.2-5.44,26.77-11.87,39.09-2.85,5.45-5.91,10.95-11.65,13.7s-12,4.78-18.12,7.06a55.8,55.8,0,0,1-5.8,1.84,9.26,9.26,0,0,1-2.51-.08c.35-.82.46-1.92,1.07-2.43,3-2.52,6-4.92,9.14-7.3,7.74-6,15.19-12.28,21-20.21,4.22-5.73,4.19-9.22.19-15.13-4.15-6.13-9.53-11.09-15.35-15.58-4-3.08-3.23-3-1.76-6.31,4.09-9.19,8.14-18.4,12.26-27.58,1.58-3.49,1.71-3.46,4.66-.87,5.69,5,11.3,10.05,15.16,16.73C223.33,402.19,224,407.93,223.84,414Z"
            transform="translate(-136.22 -276.92)"
          />
          <line
            xmlns="http://www.w3.org/2000/svg"
            id="line"
            class="cls-3"
            y1="214.33"
            x2="370.57"
            y2="214.33"
          />
        </svg>
        {/*<div class="intro">
          Front-end Developer / Graphic Designer / Photographer
  </div>*/}

        <Menu text className='showMenu' color='teal' inverted>
          <Menu.Item
            name='Portfolio'
            active={activeItem === 'Portfolio'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Camera'
            active={activeItem === 'Camera'}
            onClick={this.handleItemClick}
            href="https://unsplash.com/@mohammadmaso"
          />
          <Menu.Item
            name='Notes'
            active={activeItem === 'Notes'}
            onClick={this.handleItemClick}
            href="https://virgool.io/@mohammadmaso"
          />
          <Menu.Item
            name='Experiences'
            active={activeItem === 'Experiences'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Travels'
            active={activeItem === 'Travels'}
            onClick={this.handleItemClick}
            href="https://www.wikiloc.com/wikiloc/user.do?id=4520821"
          />
          <Menu.Item
            name='CV'
            active={activeItem === 'CV'}
            onClick={this.handleItemClick}
            href="https://github.com/mohammadmaso/new.mohammadmaso.ir-blog/raw/master/%D9%85%D8%AD%D9%85%D8%AF%20%D9%85%D8%B3%D8%B9%D9%88%D8%AF%DB%8C%20_%20Quera.pdf"
          />
        </Menu>
        <Modal
        trigger={<Icon name='call' className="showMenu" color='transparent' onClick={this.handleOpen}></Icon>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
        dimmer='blurring'
        closeIcon
      >
        <Modal.Content className="App">
        <h2>Mohammad Masoudie</h2>
        Since 1998<br/>
         <a href="tel:+989380374660"> Call me : +989380374660</a><br/>
         <a href="https://instagram.com/the.miiim"> The.miiim on instagram</a>
        </Modal.Content>
        
      </Modal>
      </header>
    </div>
  );
}

}
