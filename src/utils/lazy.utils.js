const getComponent = async path => {
  const module = await import(`${path}`);
  const Component = module.default;

  return Component;
};

export default getComponent;
