interface RouteInfo {
  readonly name: string;
  readonly parent: RouteInfo | null;
  readonly child: RouteInfo | null;
  readonly localName: string;
  readonly params: { [name: string]: unknown } | undefined;
  readonly paramNames: string[];
  readonly queryParams: { [name: string]: string };
  readonly metadata: unknown;
  find(
    predicate: (this: any, routeInfo: RouteInfo, i: number) => boolean,
    thisArg?: any
  ): RouteInfo | undefined;
}

export default class RouteInfoMock implements RouteInfo {
  name: string;
  parent: RouteInfo | null = null;
  child: RouteInfo | null = null;
  localName: string;
  params: { [name: string]: unknown } = {};
  paramNames: string[] = [];
  queryParams: { [name: string]: string } = {};
  metadata: unknown;

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

  withQueryParams(queryParams: { [name: string]: string }): RouteInfoMock {
    this.queryParams = queryParams;
    return this;
  }

  withMetadata(metadata: unknown): RouteInfoMock {
    this.metadata = metadata;
    return this;
  }

  find(
    predicate: (this: any, routeInfo: RouteInfo, i: number) => boolean,
    thisArg?: any
  ): RouteInfo | undefined {
    let current = thisArg || this;
    let i = 0;

    while (current) {
      if (predicate(current, i++)) {
        return current;
      }

      current = current.parent;
    }

    return undefined;
  }
}
