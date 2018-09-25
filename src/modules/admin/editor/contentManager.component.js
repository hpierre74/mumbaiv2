// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const ContentManagerWrapper = styled.div``;

// const ContentSelector = styled.ul``;

// const ContentSelectorItem = styled.li``;

// const ContentEditor = styled.form``;

// class ContentManager extends Component {
//   state = {};

//   onContentSelection(e) {
//     this.setState({ [e.target.name]: e.target.elements });
//   }
//   renderSelectableContents() {
//     return Object.values(this.props.config.contents).map(content => (
//       <ContentSelectorItem onClick={this.onContentSelection} name={content.name} elements={content}>
//         {content.name}
//       </ContentSelectorItem>
//     ));
//   }

//   renderEditableContent() {
//     return Object.values(this.state.elements).map(element => {
//       Input;
//     });
//   }
//   render() {
//     return (
//       <ContentManagerWrapper>
//         <ContentSelector>{this.renderSelectableContents()}</ContentSelector>
//         <ContentEditor />
//       </ContentManagerWrapper>
//     );
//   }
// }

// ContentManager.propTypes = {
//   config: PropTypes.shape({
//     contents: PropTypes.shape({}),
//   }),
// };

// export default ContentManager;
