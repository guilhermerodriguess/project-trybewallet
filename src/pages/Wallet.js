import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { currenciesData } = this.props;
    currenciesData();
  }

  getCurrencies = () => {
    const { currencies } = this.props;
    return currencies
      .map((currency, index) => (
        <option
          key={ index }
          value={ currency }
        >
          { currency }
        </option>
      ));
  }

  navBar = (email) => (
    <div className="wallet__navbar">
      <h2 data-testid="email-field">
        {`Usuário: ${email}` }
      </h2>
      <h2 data-testid="total-field">
        {`Total: ${0}`}
      </h2>
      <h2 data-testid="header-currency-field">
        {`Moeda: ${'BRL'}`}
      </h2>
    </div>
  )

  formsInput = () => {
    const getCurrencies = this.getCurrencies();
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            data-testid="value-input"
            type="number"
            placeholder="Insira um valor"
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            id="descricao"
            data-testid="description-input"
            type="text"
            placeholder="Insira uma descrição"
          />
        </label>
        <label htmlFor="moedas">
          Moeda:
          <select data-testid="currency-input" name="moedas" id="moedas">
            { getCurrencies }
          </select>
        </label>
        <label htmlFor="pagamento">
          Forma de Pagamento:
          <select data-testid="method-input" name="pagamento" id="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="cŕedito">Cartão de crédito</option>
            <option value="débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria:
          <select data-testid="tag-input" name="categoria" id="categoria">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }

  render() {
    const { email } = this.props;
    const navBar = this.navBar(email);
    const formsInput = this.formsInput();
    return (
      <>
        <header className="wallet__header">
          { navBar }
        </header>
        <main className="wallet__main">
          { formsInput }
        </main>
      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currenciesData: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesData: () => dispatch(fetchApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
