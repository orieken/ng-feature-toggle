import { FeatureToggle } from './feature-toggle';
import { toggleState } from './toggle-state';

class Foo {
  @FeatureToggle public bar: boolean;
}

describe('FeatureToggle', () => {
  it('should create the state entry with the default false value', () => {
    expect(toggleState['bar']).toBe(false);
  });

  it('should return the value from toggleState', () => {
    toggleState['bar'] = true;
    expect(new Foo().bar).toBe(true);
  });
});
