import React, { Component } from 'react';
import Header from 'components/header/Header';
import Logo from 'components/header/Logo';
import AuthButton from 'components/header/AuthButton';

class App extends Component {
  
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header>
            <Logo/>
            <AuthButton/>
        </Header>
        {children}
      </div>
    );
  }
}

export default App;
