import React, { Component } from 'react';

class LoginModal extends Component {
    state = {
        closing: false
    }

    render() {
        const { children, visible, onHide } = this.props;
        const { closing } = this.state;

        console.log('==' + children +"/"+visible+"/"+closing);

        if(!closing && !visible) return null;

        return (
            <div>
                <div className="login-modal-wrapper">
                    <div className="login-modal">
                        <div className="exit" onClick={onHide}>✕</div>
                        <div className="logo">devTrench</div>
                        <div className="description">LoginModal</div>
                        <div className="buttons-wrapper">
                            {children}
                        </div>
                    </div>
                </div>
                <div className="dimmer"/>
            </div>
        );
    }
}

export default LoginModal;