import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  checkCurrency = (currency) => {
    if (currency === 'USD') return 'Dólar Comercial';
    if (currency === 'EUR') return 'Euro';
    return currency;
  }

  addExpense = () => {
    const { expenses } = this.props;
    if (expenses === []) return null;
    return expenses.map(({
      description,
      currency,
      method,
      tag,
      value,
      exchangeRates,
    }, index) => (
      <tr key={ index }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{parseFloat(value).toFixed(2)}</td>
        <td>{this.checkCurrency(currency)}</td>
        <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
        <td>Real</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <table className="wallet__table">
          <tbody>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
            { this.addExpense() }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
