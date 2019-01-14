import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { AsyncContact: () => <div /> };
  }

  componentDidMount = async () => {
    try {
      const module = await import('../../modules/contact/contact.connector');
      const AsyncContact = module.default;
      this.setState({ AsyncContact });
    } catch (e) {
      this.setState({ AsyncContact: () => <p>Houston, we got a problem</p> });
    }
  };

  render() {
    const { AsyncContact } = this.state;

    return <AsyncContact />;
  }
}

export default Contact;
