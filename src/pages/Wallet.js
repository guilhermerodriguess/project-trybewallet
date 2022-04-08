import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  Header = (email) => (
    <header>
      <h3 data-testid="email-field">
        {`Usuário: ${email}` }
      </h3>
      <h2 data-testid="total-field">
        {`Total: ${0}`}
      </h2>
      <h2 data-testid="header-currency-field">
        {`Moeda: ${'BRL'}`}
      </h2>
    </header>
  )

  render() {
    const { email } = this.props;
    const Header = this.Header(email);
    return (
      <>
        { Header }
        <div>
          alo
        </div>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
