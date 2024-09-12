import { container, } from 'tsyringe';

import {
  type Injectable,
  type InjectableType,
  type InjectableScope,
  registerDependencies,
} from './core';

const dependencies: Array<Injectable> = [
  {
    token: 'random',
    provider: {
      useValue: 'RANDOM_VALUE',
    },
    type: 'ValueProvider',
  },
];

registerDependencies(container, dependencies);

export default container;

export {
  Injectable,
  InjectableType,
  InjectableScope,
};
export * from 'tsyringe';