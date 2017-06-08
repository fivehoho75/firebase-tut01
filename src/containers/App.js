import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as modal from 'redux/modules/base/modal'
import Header from 'components/header/Header';
import Logo from 'components/header/Logo';
import AuthButton from 'components/header/AuthButton';
import LoginModal, { SocialLoginButton } from 'components/LoginModal/LoginModal';

class App extends Component {

    handleLoginModal = (() => {
        const { ModalActions } = this.props;
        return {
            open: () => {
                ModalActions.openModal({modalName: 'login'});
            },
            close: () => {
                ModalActions.closeModal('login');
            }
        }
    })();

    render() {
        const { children, status: {modal} } = this.props;
        const { handleLoginModal } = this;

        return (
            <div>
                <Header>
                    <Logo/>
                    <AuthButton onClick={handleLoginModal.open}/>
                </Header>
                <LoginModal visible={modal.getIn(['login', 'open'])} onHide={handleLoginModal.close}>
                    <SocialLoginButton type="github"/>
                    <SocialLoginButton type="google"/>
                    <SocialLoginButton type="facebook"/>
                </LoginModal>
                {children}
            </div>
        );
    }
}

App = connect(
    state => ({
        status: {
            modal: state.base.modal
            // something: state.something.get('something')
        }
    }),
    dispatch => ({
        ModalActions: bindActionCreators(modal, dispatch)
    })
)(App);

export default App;