import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hola-mundo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hola-mundo');
    assert.ok(route);
  });
});
