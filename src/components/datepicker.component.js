import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fr from 'date-fns/locale/fr';
import format from 'date-fns/format';
import Input from '@material-ui/core/Input';
import CircularProgress from '@material-ui/core/CircularProgress';

const dateFormat = (date, formatStr) =>
  format(date, formatStr, {
    locale: fr,
  });
class DateInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DatePicker: () => <CircularProgress />,
    };
  }

  componentDidMount = async () => {
    try {
      await import('react-datepicker/dist/react-datepicker.css');
      const module = await import('react-datepicker');
      const DatePicker = module.default;
      this.setState({ DatePicker });
    } catch (e) {
      throw new Error(e);
    }
  };

  render() {
    const { DatePicker } = this.state;

    return (
      <DatePicker
        customInput={<Input name="date" id="date" fullWidth />}
        selected={this.props.date}
        value={dateFormat(this.props.date, 'DD/MM/YYYY')}
        dateFormat="DD/MM/YYYY"
        onChange={this.props.handleChange}
      />
    );
  }
}
// const DateInput = props => (
//   <DatePicker
//     customInput={<Input name="date" id="date" fullWidth />}
//     selected={props.date}
//     value={dateFormat(props.date, 'DD/MM/YYYY')}
//     dateFormat="DD/MM/YYYY"
//     onChange={props.handleChange}
//   />
// );

DateInput.propTypes = {
  date: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DateInput;
