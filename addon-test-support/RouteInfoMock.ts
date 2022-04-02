interface RouteInfo {
  readonly name: string;
  readonly parent: RouteInfo | null;
  readonly child: RouteInfo | null;
  readonly localName: string;
  // readonly params: Dict<unknown> | undefined;
  // readonly paramNames: string[];
  // readonly queryParams: Dict<unknown>;
  // readonly metadata: unknown;
  // find(
  //   predicate: (this: any, routeInfo: RouteInfo, i: number) => boolean,
  //   thisArg?: any
  // ): RouteInfo | undefined;
}

export default class RouteInfoMock implements RouteInfo {
    name: string;
    parent: RouteInfo | null;
    child: RouteInfo | null;
    localName: string;

    constructor(name: string) {
        this.name = name;
    }

    withName(name: string): RouteInfoMock {
      this.name = name;
      return this;
    }

    withParent(parent: RouteInfo): RouteInfoMock {
      this.parent = parent;
      return this;
    }

    withChild(child: RouteInfo): RouteInfoMock {
      this.child = child;
      return this;
    }

    withLocalName(localName: string): RouteInfoMock {
      this.localName = localName;
      return this;
    }
}
