export default [
  {
    link: '/getting-started',
    label: 'Getting started'
  },
  {
    link: '/theory',
    label: 'Theory',
    submenu: [
      {
        link: 'introduction',
        label: 'Introduction'
      },
      {
        link: 'observing',
        label: 'Observing'
      },
      {
        link: 'managing-objects',
        label: 'Managing objects'
      },
      {
        link: 'example',
        label: 'Example'
      },
      {
        link: 'optimizations',
        label: 'Optimizations'
      },
      {
        link: 'ignoring',
        label: 'Ignoring'
      },
      {
        link: 'observing-proxies',
        label: 'Observing proxies'
      }
    ]
  },
  {
    link: '/api',
    label: 'API',
    submenu: [
      {
        link: 'Mvc',
        label: 'new Mvc()'
      },
      {
        link: 'mvc.mount',
        label: 'mvc.mount()'
      },
      {
        link: 'mvc.unmount',
        label: 'mvc.unmount()'
      },
      {
        link: 'mvc.isMounted',
        label: 'mvc.isMounted'
      },
      {
        link: 'Mvc.controller',
        label: 'Mvc.controller()'
      },
      {
        link: 'Mvc.observe',
        label: 'Mvc.observe()'
      },
      {
        link: 'object.pending',
        label: 'object.pending'
      },
      {
        link: 'object.isPending',
        label: 'object.isPending'
      },
      {
        link: 'Mvc.ignore',
        label: 'Mvc.ignore()'
      },
      {
        link: 'Mvc.root',
        label: 'Mvc.root()'
      },
      {
        link: 'Mvc.unroot',
        label: 'Mvc.unroot()'
      },
      {
        link: 'Mvc.addObservedChild',
        label: 'Mvc.addObservedChild()'
      },
      {
        link: 'Mvc.removeObservedChild',
        label: 'Mvc.removeObservedChild()'
      }
    ]
  },
  {
    link: '/router',
    label: 'Router',
    children: [
      {
        link: '/router',
        label: 'Getting started'
      },
      {
        link: '/router/theory',
        label: 'Theory',
        submenu: [
          {
            link: 'the-router',
            label: 'The router'
          },
          {
            link: 'input-route-fragments-paths',
            label: 'Input route fragments paths'
          },
          {
            link: 'input-route-fragments',
            label: 'Input route fragments'
          },
          {
            link: 'route-fragments',
            label: 'Route fragments'
          },
          {
            link: 'matching',
            label: 'Matching'
          },
          {
            link: 'transitioning',
            label: 'Transitioning'
          },
          {
            link: 'refresh',
            label: 'Refresh'
          },
          {
            link: 'router-manager',
            label: 'Router manager'
          },
          {
            link: 'lazy-loading',
            label: 'Lazy loading'
          },
          {
            link: 'observed-controller-objects',
            label: 'Observed controller objects'
          }
        ]
      },
      {
        link: '/router/api',
        label: 'API',
        submenu: [
          {
            link: 'Router',
            label: 'new Router()'
          },
          {
            link: 'controllerObject.onEnter',
            label: 'controllerObject.onEnter()'
          },
          {
            link: 'controllerObject.onLeave',
            label: 'controllerObject.onLeave()'
          },
          {
            link: 'router.basePath',
            label: 'router.basePath'
          },
          {
            link: 'router.isCaseInsensitive',
            label: 'router.isCaseInsensitive'
          },
          {
            link: 'router.url',
            label: 'router.url'
          },
          {
            link: 'router.params',
            label: 'router.params'
          },
          {
            link: 'router.isTransitioning',
            label: 'router.isTransitioning'
          },
          {
            link: 'router.currentRouteFragment',
            label: 'router.currentRouteFragment'
          },
          {
            link: 'router.currentRouteFragments',
            label: 'router.currentRouteFragments'
          },
          {
            link: 'router.targetRouteFragment',
            label: 'router.targetRouteFragment'
          },
          {
            link: 'router.isMounted',
            label: 'router.isMounted'
          },
          {
            link: 'router.transitionTo',
            label: 'router.transitionTo()'
          },
          {
            link: 'router.mount',
            label: 'router.mount()'
          },
          {
            link: 'router.unmount',
            label: 'router.unmount()'
          },
          {
            link: 'router.refresh',
            label: 'router.refresh()'
          },
          {
            link: 'router.onBeforeChange',
            label: 'router.onBeforeChange()'
          },
          {
            link: 'router.offBeforeChange',
            label: 'router.offBeforeChange()'
          },
          {
            link: 'router.onSearchChange',
            label: 'router.onSearchChange()'
          },
          {
            link: 'router.offSearchChange',
            label: 'router.offSearchChange()'
          },
          {
            link: 'router.onChange',
            label: 'router.onChange()'
          },
          {
            link: 'router.offChange',
            label: 'router.offChange()'
          },
          {
            link: 'router.onUrlHandle',
            label: 'router.onUrlHandle()'
          },
          {
            link: 'router.offUrlHandle',
            label: 'router.offUrlHandle()'
          },
          {
            link: 'router.isPathActive',
            label: 'router.isPathActive()'
          },
          {
            link: 'router.isDescendantPathActive',
            label: 'router.isDescendantPathActive()'
          },
          {
            link: 'router.list',
            label: 'router.list()'
          },
          {
            link: 'router.get',
            label: 'router.get()'
          },
          {
            link: 'router.has',
            label: 'router.has()'
          },
          {
            link: 'router.add',
            label: 'route.add()'
          },
          {
            link: 'router.remove',
            label: 'router.remove()'
          },
          {
            link: 'routeFragment.path',
            label: 'routeFragment.path'
          },
          {
            link: 'routeFragment.normalizedPath',
            label: 'routeFragment.normalizedPath'
          },
          {
            link: 'routeFragment.abstractPath',
            label: 'routeFragment.abstractPath'
          },
          {
            link: 'routeFragment.urlPath',
            label: 'routeFragment.urlPath'
          },
          {
            link: 'routeFragment.normalizedUrlPath',
            label: 'routeFragment.normalizedUrlPath'
          },
          {
            link: 'routeFragment.canCaseVary',
            label: 'routeFragment.canCaseVary'
          },
          {
            link: 'routeFragment.component',
            label: 'routeFragment.component'
          },
          {
            link: 'routeFragment.controller',
            label: 'routeFragment.controller'
          },
          {
            link: 'routeFragment.controllerObject',
            label: 'routeFragment.controllerObject'
          },
          {
            link: 'routeFragment.parent',
            label: 'routeFragment.parent'
          },
          {
            link: 'routeFragment.router',
            label: 'routeFragment.router'
          },
          {
            link: 'routeFragment.onSearchChange',
            label: 'routeFragment.onSearchChange()'
          },
          {
            link: 'routeFragment.offSearchChange',
            label: 'routeFragment.offSearchChange()'
          },
          {
            link: 'routeFragment.refresh',
            label: 'routeFragment.refresh()'
          },
          {
            link: 'routerManager.list',
            label: 'routerManager.list()'
          },
          {
            link: 'routerManager.get',
            label: 'routerManager.get()'
          },
          {
            link: 'routerManager.has',
            label: 'routerManager.has()'
          },
          {
            link: 'routerManager.add',
            label: 'routerManager.add()'
          },
          {
            link: 'routerManager.remove',
            label: 'routerManager.remove()'
          },
          {
            link: 'Link',
            label: 'Link'
          },
          {
            link: 'Router.fallbackRoute',
            label: 'Router.fallbackRoute()'
          }
        ]
      }
    ]
  },
  {
    link: '/form',
    label: 'Form',
    children: [
      {
        link: '/form',
        label: 'Getting started'
      },
      {
        link: '/form/theory',
        label: 'Theory',
        submenu: [
          {
            link: 'introduction',
            label: 'Introduction'
          },
          {
            link: 'example',
            label: 'Example'
          },
          {
            link: 'inputs',
            label: 'Inputs'
          },
          {
            link: 'validation',
            label: 'Validation'
          },
          {
            link: 'blocking',
            label: 'Blocking'
          },
          {
            link: 'result',
            label: 'Result'
          }
        ]
      },
      {
        link: '/form/api',
        label: 'API',
        submenu: [
          {
            link: 'Form',
            label: 'new Form()'
          },
          {
            link: 'input.name',
            label: 'input.name'
          },
          {
            link: 'input.value',
            label: 'input.value'
          },
          {
            link: 'input.initialValue',
            label: 'input.initialValue'
          },
          {
            link: 'input.children',
            label: 'input.children'
          },
          {
            link: 'input.parent',
            label: 'input.parent'
          },
          {
            link: 'input.root',
            label: 'input.root'
          },
          {
            link: 'input.isDirty',
            label: 'input.isDirty'
          },
          {
            link: 'input.isTouched',
            label: 'input.isTouched'
          },
          {
            link: 'input.isSubmitted',
            label: 'input.isSubmitted'
          },
          {
            link: 'input.isInputPending',
            label: 'input.isInputPending'
          },
          {
            link: 'input.hasErrors',
            label: 'input.hasErrors'
          },
          {
            link: 'input.errors',
            label: 'input.errors'
          },
          {
            link: 'input.actions',
            label: 'input.actions'
          },
          {
            link: 'input.pending',
            label: 'input.pending'
          },
          {
            link: 'input.isPending',
            label: 'input.isPending'
          },
          {
            link: 'input.isPendingBlocked',
            label: 'input.isPendingBlocked'
          },
          {
            link: 'input.isBlocked',
            label: 'input.isBlocked'
          },
          {
            link: 'input.getValue',
            label: 'input.getValue()'
          },
          {
            link: 'input.setValue',
            label: 'input.setValue()'
          },
          {
            link: 'input.onChange',
            label: 'input.onChange()'
          },
          {
            link: 'input.validate',
            label: 'input.validate()'
          },
          {
            link: 'input.submit',
            label: 'input.submit()'
          },
          {
            link: 'input.getResult',
            label: 'input.getResult()'
          },
          {
            link: 'input.onBlur',
            label: 'input.onBlur()'
          },
          {
            link: 'input.onFormChange',
            label: 'input.onFormChange()'
          },
          {
            link: 'input.onStartPending',
            label: 'input.onStartPending()'
          },
          {
            link: 'input.get',
            label: 'input.get()'
          },
          {
            link: 'input.add',
            label: 'input.add()'
          },
          {
            link: 'input.addChild',
            label: 'input.addChild()'
          },
          {
            link: 'input.remove',
            label: 'input.remove()'
          },
          {
            link: 'input.removeChild',
            label: 'input.removeChild()'
          },
          {
            link: 'input.reset',
            label: 'input.reset()'
          },
          {
            link: 'input.clear',
            label: 'input.clear()'
          },
          {
            link: 'Form.asyncValidationError',
            label: 'Form.asyncValidationError'
          },
          {
            link: 'Input',
            label: 'new Input()'
          },
          {
            link: 'validation',
            label: 'validation()'
          },
          {
            link: 'validation.validate',
            label: 'validation.validate()'
          },
          {
            link: 'validation.required',
            label: 'validation.required()'
          },
          {
            link: 'validation.min',
            label: 'validation.min()'
          },
          {
            link: 'validation.max',
            label: 'validation.max()'
          },
          {
            link: 'validation.minLength',
            label: 'validation.minLength()'
          },
          {
            link: 'validation.maxLength',
            label: 'validation.maxLength()'
          },
          {
            link: 'validation.async',
            label: 'validation.async()'
          }
        ]
      },
      {
        link: '/form/input-component',
        label: 'Input component'
      }
    ]
  },
  {
    link: '/tools',
    label: 'Tools'
  }
];
