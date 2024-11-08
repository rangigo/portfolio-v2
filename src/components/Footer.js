import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <section id='footer'>
        <p style={{ marginTop: '0', marginBottom: '20px' }}>
          Keep in touch with me
        </p>
        <ul className='icons'>
          <li>
            <a
              href='https://www.linkedin.com/in/panigo/'
              target='_blank'
              rel='noopener noreferrer'
              className='icon alt fab fa-linkedin'
            >
              <span className='label'>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/suolaric/'
              target='_blank'
              rel='noopener noreferrer'
              className='icon alt fab fa-instagram'
            >
              <span className='label'>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/rangigo'
              target='_blank'
              rel='noopener noreferrer'
              className='icon alt fab fa-github'
            >
              <span className='label'>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href='mailto:paavo.nguyen@gmail.com'
              className='icon alt fa fa-envelope'
            >
              <span className='label'>Email</span>
            </a>
          </li>
        </ul>
        <ul className='copyright'>
          <li>&copy; Panigo</li>
          <li>Powered by Gatsby with ❤</li>
        </ul>
      </section>
    );
  }
}

export default Footer;
