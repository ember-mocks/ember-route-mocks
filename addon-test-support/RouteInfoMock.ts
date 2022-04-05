interface RouteInfo {
  readonly name: string;
  readonly parent: RouteInfo | null;
  readonly child: RouteInfo | null;
  readonly localName: string;
  readonly params: { [name: string]: unknown } | undefined;
  readonly paramNames: string[];
  // readonly queryParams: Dict<unknown>;
  // readonly metadata: unknown;
  // find(
  //   predicate: (this: any, routeInfo: RouteInfo, i: number) => boolean,
  //   thisArg?: any
  // ): RouteInfo | undefined;
}

export default class RouteInfoMock implements RouteInfo {
  name: string;
  parent: RouteInfo | null = null;
  child: RouteInfo | null = null;
  localName: string;
  params: { [name: string]: unknown } = {};
  paramNames: string[] = [];

  constructor(name: string) {
    this.name = name;
    this.localName = name.split('.').pop()!;
  }

  withParent(parent: RouteInfo): RouteInfoMock {
    this.parent = parent;
    return this;
  }

  withChild(child: RouteInfo): RouteInfoMock {
    this.child = child;
    return this;
  }

  withParams(params: { [name: string]: unknown }): RouteInfoMock {
    this.params = params;
    this.paramNames = Object.keys(params);

    return this;
  }
}
