import { toggleState } from './toggle-state';

export function FeatureToggle(target: any, key: string) {
  toggleState[key] = toggleState[key] || false;

  Object.defineProperty(target, key, {
    get: () => toggleState[key]
  });
}
