import { Container, } from 'inversify';

import { registerDependencies, } from '@ioc/utils';

import dependencies from './dependencies';

const container = new Container({
  defaultScope: 'Singleton',
});

registerDependencies(container, dependencies);

export { 
  container, 
};