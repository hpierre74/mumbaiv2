import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    padding: '5%',
    margin: '2.5% 0',
  },
};

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    if (!this.state.value && this.props.value) {
      this.setState({ value: this.props.value });
    }
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.updateContent(this.props.path, { [this.props.contentName]: this.state.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <form>
          <h3>{this.props.contentName.toUpperCase()}</h3>
          <p>{this.props.currentContent}</p>

          <TextField
            id="standard-multiline-static"
            name={this.props.contentName}
            label="Edit"
            multiline={this.state.value.length > 100}
            value={this.state.value}
            onChange={this.handleInputChange}
            rows="4"
            margin="normal"
            fullWidth
          />
          <Button onClick={this.handleSubmit} variant="contained" color="primary">
            Submit Change
          </Button>
        </form>
      </Card>
    );
  }
}

EditForm.propTypes = {
  currentContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  contentName: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  updateContent: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(EditForm);
