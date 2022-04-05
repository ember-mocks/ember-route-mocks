import { module, test } from 'qunit';
import { RouteInfoMock } from 'ember-route-mocks/test-support';

module('Unit | Service | RouteInfoMock', function (hooks) {
  test('it initializes with name and localName', function (assert) {
    const routeInfoMock = new RouteInfoMock('test.dummy-name');

    assert.equal(routeInfoMock.name, 'test.dummy-name');
    assert.equal(routeInfoMock.localName, 'dummy-name');
  });

  test('it can set parent and child', function (assert) {
    const routeInfoParentMock = new RouteInfoMock('test.parent');
    const routeInfoChildMock = new RouteInfoMock('test.child');

    const routeInfoMock = new RouteInfoMock('test.dummy-name')
      .withParent(routeInfoParentMock)
      .withChild(routeInfoChildMock);

    assert.equal(routeInfoMock.parent.name, 'test.parent');
    assert.equal(routeInfoMock.child.name, 'test.child');
  });

  test('it can set params and paramNames', function (assert) {
    const routeInfoMock = new RouteInfoMock('test.dummy-name').withParams({
      dummyParam: ['dummyValue1', 'dummyValue2'],
    });

    assert.equal(routeInfoMock.paramNames, 'dummyParam');
    assert.equal(routeInfoMock.params.dummyParam?.length, 2);
  });
});
