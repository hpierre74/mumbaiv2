import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fr from 'date-fns/locale/fr';
import format from 'date-fns/format';
import Input from '@material-ui/core/Input';
import CircularProgress from '@material-ui/core/CircularProgress';

const dateFormat = (date, formatStr) => format(date, formatStr, { locale: fr });
class DateInput extends Component {
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = { DatePicker: () => <CircularProgress /> };
  }

  componentDidMount = async () => {
    this.mounted = true;
    try {
      await import('react-datepicker/dist/react-datepicker.css');
      const module = await import('react-datepicker');
      module.registerLocale('fr', fr);
      module.setDefaultLocale('fr');
      const DatePicker = module.default;

      if (!this.mounted) {
        return;
      }
      this.setState({ DatePicker });
    } catch (e) {
      throw new Error(e);
    }
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  filterDates = date => {
    const day = new Date(date).getDay();
    return day !== 0 && day !== 6;
  };

  render() {
    const { DatePicker } = this.state;

    return (
      <DatePicker
        customInput={<Input name="date" id="date" fullWidth />}
        selected={this.props.date}
        value={dateFormat(this.props.date, 'dd/MM/yyyy')}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        onChange={this.props.handleChange}
        filterDate={this.filterDates}
      />
    );
  }
}

DateInput.defaultProps = {
  placeholderText: '',
};

DateInput.propTypes = {
  date: PropTypes.shape({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
};

export default DateInput;
