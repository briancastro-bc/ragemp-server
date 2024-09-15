import { Injectable, } from '@ioc/utils';

import { AuthUsecase, } from '@client/login/application/auth.usecase';
import { BrowserDomReadyUseCase, } from '@client/login/application/browser-dom-ready.usecase';

import { CameraImplementationService, } from '@client/shared/infrastructure/services/camera-implementation.service';
import { BrowserImplementationService, } from '@client/shared/infrastructure/services/browser-implementation.service';

export default [
  {
    token: 'cef_url',
    provider: 'package://cef/index.html',
    type: 'ConstantValue',
  },
  {
    token: 'Auth',
    provider: AuthUsecase,
    type: 'Constructor',
  },
  {
    token: 'BrowserDomReady',
    provider: BrowserDomReadyUseCase,
    type: 'Constructor',
  },
  {
    token: 'CameraService',
    provider: CameraImplementationService,
    type: 'Constructor',
  },
  {
    token: 'BrowserService',
    provider: BrowserImplementationService,
    type: 'Constructor',
  },
] as Array<Injectable>;