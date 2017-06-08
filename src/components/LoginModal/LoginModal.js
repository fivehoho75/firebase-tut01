import React, { Component } from 'react';

class LoginModal extends Component {
    state = {
        closing: false
    }

    componentDidUpdate (prevProps, prevState) {
        // visible 값이 비활성화 되면 closing 값을 true 로 바꾸고
        // 0.7초 이후에 원상복귀한다
        if(prevProps.visible && !this.props.visible) {
            console.log('ㅇㅇ');
            this.setState({
                closing: true
            });

            setTimeout(
                () => {
                    this.setState({
                        closing: false
                    });
                }, 700
            );
        }
    }
    
    render() {
        const { children, visible, onHide } = this.props;
        const { closing } = this.state;

        //console.log('==' + children +"/"+visible+"/"+closing);

        if(!closing && !visible) return null;

        const animation = closing ? 'flipOutX' : 'flipInX';

        return (
            <div>
                <div className="login-modal-wrapper">
                    <div ref={ref=>{this.modal = ref}} className={`login-modal ${animation}`}>
                        <div className="exit" onClick={onHide}>✕</div>
                        <div className="logo">devTrench</div>
                        <div className="description">
                            <p>LoginModal</p>
                            <p>한글 테스트</p>
                        </div>
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

export { default as SocialLoginButton } from './SocialLoginButton';
export default LoginModal;