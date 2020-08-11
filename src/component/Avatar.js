import React from 'react';
import '../styles/avatar.scss';

class Avatar extends React.Component {
  render() {
    return (
      <div className={'avatar'}>
        <img
          className={'image-size'}
          src={require('./../assets/avatar.jpg')}
          alt={'avatar'}
        />
      </div>
    );
  }
}

export default Avatar;
