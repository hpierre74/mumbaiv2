import React from 'react';

const branch = (test, LeftComponent, RightComponent) => {
  const branchHOC = props => {
    if (test(props)) {
      return <LeftComponent {...props} />;
    }

    return <RightComponent {...props} />;
  };

  branchHOC.propTypes = {};

  return branchHOC;
};

export default branch;
