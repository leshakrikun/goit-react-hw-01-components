import PropTypes from 'prop-types';
import Transaction from './transaction';
import s from './Transaction.module.css';
export default function TransactionList({ items }) {
  return (
    <table className={s.history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr key={transaction.id} className="item">
            <Transaction
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
Transaction.propTypes = {
  id: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
  currency: PropTypes.string,
};
