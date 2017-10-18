export const toggleState: { [key: string]: boolean } = {};

export function FeatureToggle(target: any, key: string) {
  toggleState[key] = toggleState[key] || false;

  Object.defineProperty(target, key, {
    get: () => toggleState[key]
  });
}
