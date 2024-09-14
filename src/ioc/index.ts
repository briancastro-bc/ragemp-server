import { container, } from 'tsyringe';

import {
  type Injectable,
  type InjectableType,
  type InjectableScope,
  registerDependencies,
} from './core';

const dependencies: Array<Injectable> = [
  {
    token: 'cef_url',
    provider: {
      useValue: 'package://cef/index.html',
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