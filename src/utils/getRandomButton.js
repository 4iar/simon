import _ from 'lodash';

const getRandomButton = () => {
  const colours = ['red', 'yellow', 'green', 'blue'];
  return _.sample(colours);
};

export default getRandomButton;
