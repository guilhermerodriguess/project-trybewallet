import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchApi, saveForm } from '../actions';
import Table from './components/Table';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
    };
  }

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

  handleTotal = () => {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach((despesa) => {
      const moedaSelecionada = despesa.currency;
      const posiçãoMoeda = Object.keys(despesa.exchangeRates)
        .filter((moeda) => moeda === moedaSelecionada && moeda)[0];
      const valorMoeda = despesa.exchangeRates[posiçãoMoeda].ask;
      const valorReal = despesa.value * valorMoeda;
      total += valorReal;
    });
    return total.toFixed(2);
  }

  navBar = (email) => (
    <div className="wallet__navbar">
      <h2 data-testid="email-field">
        {`Usuário: ${email}` }
      </h2>
      <h2>Total: R$</h2>
      <h2 data-testid="total-field">
        {this.handleTotal()}
      </h2>
      <h2 data-testid="header-currency-field">
        {`Moeda: ${'BRL'}`}
      </h2>
    </div>
  )

  submitForm = (event) => {
    event.preventDefault();
    const { formSave } = this.props;
    const { value } = this.state;
    if (value === 0) {
      return null;
    }
    formSave(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      method: '',
    }));
  }

  handleInputs = ({ target: { id, value } }) => {
    this.setState({ [id]: value });
  }

  formsInput = () => {
    const { value, description, method } = this.state;
    return (
      <form onSubmit={ this.submitForm } className="wallet__main__form">
        <label htmlFor="value">
          Valor:
          <input
            onChange={ this.handleInputs }
            id="value"
            data-testid="value-input"
            type="number"
            placeholder="Insira um valor"
            step="0.010"
            min="0"
            value={ value }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            onChange={ this.handleInputs }
            data-testid="currency-input"
            name="moedas"
            id="currency"
          >
            { this.getCurrencies() }
          </select>
        </label>
        <label htmlFor="method">
          Forma de Pagamento:
          <select
            onChange={ this.handleInputs }
            data-testid="method-input"
            name="pagamento"
            id="method"
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            onChange={ this.handleInputs }
            data-testid="tag-input"
            name="categoria"
            id="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            onChange={ this.handleInputs }
            id="description"
            data-testid="description-input"
            type="text"
            placeholder="Insira uma descrição"
            value={ description }
          />
        </label>
        <button type="submit">Adicionar despesa</button>
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
          <Table />
        </main>

      </>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currenciesData: PropTypes.func.isRequired,
  formSave: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  currenciesData: () => dispatch(fetchApi()),
  formSave: (object) => dispatch(saveForm(object)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
