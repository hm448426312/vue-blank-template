const filter = {
  demo: (value, ...args) => {
    return value + '_' + args.join(',');
  }
};
export default filter;
