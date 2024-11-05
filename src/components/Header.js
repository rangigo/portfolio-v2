import React from 'react';

class Header extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    const { sectionOneRef } = this.props;
    const sectionOneDomNode = sectionOneRef.current;
    window.scrollTo({
      top: sectionOneDomNode.offsetTop,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <section id='header'>
        <div className='inner'>
          <div
            style={{
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignContent: 'space-around'
            }}
          >
            <span className='minor devicon-angular-plain colored' />
            <span className='major devicon-react-original colored' />
            <h1>
              Hi, I'm <strong>Paavo</strong>
            </h1>
            <h3>A software engineer</h3>
          </div>
          <ul className='actions'>
            <li>
              <a
                href='#one'
                className='button scrolly'
                onClick={this.handleClick}
              >
                Discover
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Header;
