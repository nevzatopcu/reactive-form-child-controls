import { ControlContainer } from '@angular/forms';
import { SkipSelf, Optional } from '@angular/core';

export const containerFactory = (container: ControlContainer) => {
  if (!container) {
    throw new Error('I need a FormGroup instance');
  }
  return container;
};

export const parentFormGroupProvider = [
  {
    provide: ControlContainer,
    useFactory: containerFactory,
    deps: [[new SkipSelf(), new Optional(), ControlContainer]],
  },
];
