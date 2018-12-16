// import React from 'react';
// import PropTypes from 'prop-types';

// class FileUploader extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//     this.state = {
//       active: false,
//       imageSrc: '',
//       loaded: false,
//     };

//     this.onDragEnter = this.onDragEnter.bind(this);
//     this.onDragLeave = this.onDragLeave.bind(this);
//     this.onDrop = this.onDrop.bind(this);
//     this.onFileChange = this.onFileChange.bind(this);
//   }

//   onDragEnter() {
//     this.setState({ active: true });
//   }

//   onDragLeave() {
//     this.setState({ active: false });
//   }

//   onDrop(e) {
//     e.preventDefault();
//     this.setState({ active: false });
//     this.onFileChange(e, e.dataTransfer.files[0]);
//   }

//   onFileChange(e, input) {
//     const file = input || e.target.files[0];

//     const pattern = /image-*/;

//     const reader = new FileReader();

//     if (!file.type.match(pattern)) {
//       /* eslint-disable-next-line no-console */
//       console.log('Unexpected file format');

//       return;
//     }

//     this.setState({ loaded: false });

//     reader.onload = e => {
//       this.setState({
//         imageSrc: reader.result,
//         loaded: true,
//       });
//     };

//     reader.readAsDataURL(file);
//   }

//   getFileObject() {
//     return this.inputRef.input.files[0];
//   }

//   getFileString() {
//     return this.state.imageSrc;
//   }

//   render() {
//     const { loaded, active, imageSrc } = this.state;

//     const baseColor = 'gray';
//     const activeColor = 'green';

//     const labelClass = `uploader ${loaded && 'loaded'}`;

//     const borderColor = active ? activeColor : baseColor;

//     return (
//       <label
//         htmlFor="file-input"
//         className={labelClass}
//         onDragEnter={this.onDragEnter}
//         onDragLeave={this.onDragLeave}
//         onDragOver={e => e.preventDefault()}
//         onDrop={this.onDrop}
//         style={{ outlineColor: borderColor }}
//       >
//         <img src={imageSrc} alt="File input" className={loaded && 'loaded'} />

//         <input id="file-input" type="file" accept="image/*" onChange={this.onFileChange} innerRef={this.inputRef} />
//       </label>
//     );
//   }
// }
// FileUploader.defaultProps = {
//   baseColor: 'gray',
//   activeColor: 'green',
//   overlayColor: 'rgba(255,255,255,0.3)',
// };

// FileUploader.propTypes = {
//   baseColor: PropTypes.string,
//   activeColor: PropTypes.string,
//   overlayColor: PropTypes.string,
// };

// export default FileUploader;
// // FileUploader
