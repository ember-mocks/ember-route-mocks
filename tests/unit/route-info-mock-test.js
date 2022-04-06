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

  test('it can set queryParams', function (assert) {
    const queryParams = {
      testParam1: 'testParam1',
      testParam2: 'testParam1',
    };
    const routeInfoMock = new RouteInfoMock('test.dummy-name').withQueryParams(
      queryParams
    );

    assert.equal(routeInfoMock.queryParams, queryParams);
  });

  test('it can set metadata', function (assert) {
    const buildRouteInfoMetadata = () => {
      return {
        dummyParam: true,
      };
    };
    const routeInfoMock = new RouteInfoMock('test.dummy-name').withMetadata(
      buildRouteInfoMetadata()
    );

    assert.equal(routeInfoMock.metadata.dummyParam, true);
  });

  test('it can use find()', function (assert) {
    const routeInfoParentMock = new RouteInfoMock('test.parent');
    const routeInfoMock = new RouteInfoMock('test.dummy-name').withParent(
      routeInfoParentMock
    );
    const predicate = (routeInfo, i) => {
      return routeInfo === routeInfoParentMock;
    };

    const foundRouteInfo = routeInfoMock.find(predicate);

    assert.equal(foundRouteInfo, routeInfoParentMock);
  });
});
