import { 
  Provider, 
  Lifecycle,
  InjectionToken,
  RegistrationOptions,
  DependencyContainer,
  ValueProvider,
  FactoryProvider,
  TokenProvider,
  ClassProvider,
} from 'tsyringe';

export type InjectableScope = Lifecycle;

export type InjectableType = 'ValueProvider'
| 'FactoryProvider'
| 'TokenProvider'
| 'ClassProvider';

export type Injectable<T = any> = {
  token: InjectionToken<T>;
  provider: Provider;
  type: InjectableType;
  options?: RegistrationOptions;
};

function registerDependency(container: DependencyContainer, dependency: Injectable): void {
  const actions: {
    [K in InjectableType]: () => void;
  } = {
    'ValueProvider': () => container
      .register<any>(dependency.token, dependency.provider as ValueProvider<any>),
    'FactoryProvider': () => container
      .register<any>(dependency.token, dependency.provider as FactoryProvider<any>),
    'TokenProvider': () => container
      .register<any>(dependency.token, dependency.provider as TokenProvider<any>, dependency.options),
    'ClassProvider': () => container
      .register<any>(dependency.token, dependency.provider as ClassProvider<any>, dependency.options),
  };

  actions[dependency.type]();
}

export function registerDependencies(container: DependencyContainer, dependencies: Array<Injectable>): void {
  dependencies.forEach(dependency => {
    if (container.isRegistered(dependency.token)) 
      return;

    registerDependency(container, dependency);
  });
}