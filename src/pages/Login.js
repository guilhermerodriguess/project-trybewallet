import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: 0,
    };
  }

  handleInputs = ({ target }) => {
    if (target.type === 'email') {
      this.setState({
        email: target.value,
      });
    }
    if (target.type === 'password') {
      this.setState({
        password: target.value.length,
      });
    }
  }

  verifyInputs = () => {
    const { email, password } = this.state;
    const minLength = 6;
    if (email.includes('@') && email.includes('.com') && password >= minLength) {
      return false;
    } return true;
  }

  submitLogin = (event) => {
    const { history, emailDispatch } = this.props;
    const { email } = this.state;
    event.preventDefault();
    emailDispatch(email);
    history.push('/carteira');
  }

  render() {
    const verifyInputs = this.verifyInputs();
    return (
      <div className="login__page">
        <div className="login__content">
          <form className="input__content" onSubmit={ this.submitLogin }>
            <input
              onChange={ this.handleInputs }
              type="email"
              autoComplete="on"
              data-testid="email-input"
              placeholder="Email"
            />
            <input
              onChange={ this.handleInputs }
              type="password"
              autoComplete="on"
              data-testid="password-input"
              placeholder="Password"
            />
            <button
              disabled={ verifyInputs }
              type="submit"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  emailDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
