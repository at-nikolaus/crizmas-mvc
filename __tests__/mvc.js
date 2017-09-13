const React = require('react');

const Mvc = require('../src/mvc.js');

describe('mvc', () => {
  describe('Mvc', () => {
    test('The result of the Mvc constructor is an mvc instance', () => {
      const mvc = new Mvc({
        component: () => false,
        domElement: document.createElement('div')
      });

      expect(typeof mvc).toBe('object');
      expect(typeof mvc.mount).toBe('function');
    });

    test('The mvc instance is automatically mounted', () => {
      const mockFn = jest.fn();

      new Mvc({
        component: class extends React.Component {
          render() {
            mockFn();

            return false;
          }
        },
        domElement: document.createElement('div')
      });

      expect(mockFn.mock.calls.length).toBe(1);
    });

    test('If a domElement option is not passed it throws', () => {
      expect.assertions(1);
    });

    test('If no element, no component and no router are passed it throws', () => {
      expect.assertions(1);
    });

    test('If both an element and a component are passed it throws', () => {
      expect.assertions(1);
    });

    test('Mount', () => {
      expect.assertions(1);
    });

    test('Unmount', () => {
      expect.assertions(1);
    });
  });

  describe('observe', () => {
    test('Observe promise', () => {
      expect.assertions(1);
    });

    test('Observed promise (not from method) is ignored', () => {
      expect.assertions(1);
    });

    test('Observe function call', () => {
      expect.assertions(1);
    });

    test('Observe function\'s resulted promise', () => {
      expect.assertions(1);
    });

    test('Observed function is reused for the same input function', () => {
      expect.assertions(1);
    });

    test('Observed function is not reobserved', () => {
      expect.assertions(1);
    });

    test('Returned observed promise from different observed functions is observed only once',
      () => {
        expect.assertions(1);
      });

    test('Returned thenable is converted to a promise', () => {
      expect.assertions(1);
    });

    test('Observed object\'s functions are observed', () => {
      expect.assertions(1);
    });

    test('Observed object\'s prototype is not observed', () => {
      expect.assertions(1);
    });

    test('Observed function\'s static methods are observed', () => {
      expect.assertions(1);
    });

    test('Observe constructor call', () => {
      expect.assertions(1);
    });

    test('Observe object resulted from constrctor call', () => {
      expect.assertions(1);
    });

    test('Observe object after fulfilling the returned promise from constructor call', () => {
      expect.assertions(1);
    });

    test('Observed function\'s prototype object property is observed', () => {
      expect.assertions(1);
    });

    test('Observed function\'s prototype function property is not observed', () => {
      expect.assertions(1);
    });

    test('Observed function\'s prototype thenable property is not observed', () => {
      expect.assertions(1);
    });

    test('Observed object has a \'pending\' object property with a \'has\' method'
      + ' which is non-enumerable, non-writable and configurable', () => {
      expect.assertions(1);
    });

    test('Observed object has an \'isPending\' property which is non-enumerable,'
      + ' writable and configurable', () => {
      expect.assertions(1);
    });

    test('Observing an object that already has a pending property throws', () => {
      expect.assertions(1);
    });

    test('Observing an object that already has an isPending property throws', () => {
      expect.assertions(1);
    });

    test('Observed object under a root is pending while it has associated pending operations',
      () => {
        expect.assertions(1);
      });

    test('Observed object\'s pending object reports the pending operation associated'
      + ' with it when the object is not under a root', () => {
      expect.assertions(1);
    });

    test('Observed object\'s pending object reports the pending operation associated'
      + ' with it when the object is under a root', () => {
      expect.assertions(1);
    });

    test('Observed object under a root is pending while child observed objects are pending', () => {
      expect.assertions(1);
    });

    test('Observed object that is not under a root is not pending while it has associated'
      + ' pending operations', () => {
      expect.assertions(1);
    });

    test('Observed child object under an observed parent object is still a child'
      + ' observed object of that parent object even if it\'s not a value of a property'
      + ' of that object', () => {
      expect.assertions(1);
    });

    test('Already observed promise causes rerendering when returned from observed function', () => {
      expect.assertions(1);
    });
  });

  describe('root', () => {

  });

  describe('unroot', () => {

  });

  describe('ignore', () => {

  });

  describe('isObservedObject', () => {

  });

  describe('addObservedChild', () => {

  });

  describe('removeObservedChild', () => {

  });

  describe('controller', () => {

  });
});
