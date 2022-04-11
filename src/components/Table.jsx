import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenseAction } from '../actions';

class Table extends Component {
  checkCurrency = (currency) => {
    if (currency === 'USD') return 'Dólar Comercial';
    if (currency === 'EUR') return 'Euro';
    return currency;
  }

  addExpense = () => {
    const { expenses, removeExpense, editExpense } = this.props;
    if (expenses === []) return null;
    return expenses.map(({
      id,
      description,
      currency,
      method,
      tag,
      value,
      exchangeRates,
    }) => (
      <tbody key={ id }>
        <tr>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{parseFloat(value).toFixed(2)}</td>
          <td>{this.checkCurrency(currency)}</td>
          <td>{parseFloat(exchangeRates[currency].ask).toFixed(2)}</td>
          <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
          <td>Real</td>
          <td>
            <button
              data-testid="edit-btn"
              type="button"
              onClick={ () => editExpense(id) }
            >
              Editar
            </button>
            <button
              data-testid="delete-btn"
              type="button"
              onClick={ () => removeExpense(id) }
            >
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    ));
  }

  render() {
    return (
      <div>
        <table className="wallet__table">
          <thead>
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
          </thead>
          { this.addExpense() }

        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (id) => dispatch(removeExpenseAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
