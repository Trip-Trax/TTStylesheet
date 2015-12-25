import expect from 'unexpected';
import jsdom from './browser';
import TPStylesheet from '../source';
import ChromeStyles from './ChromeStyles';

describe('TPStylesheet.js', function () {
  var Stylesheet;

  jsdom();

  beforeEach(function() {
    Stylesheet = new TPStylesheet({
      win: global.window
    });

    Stylesheet._BROWSER_STYLES = [].slice.call(ChromeStyles);
  });

  it('is a object', function () {
    expect(Stylesheet, 'to be a', 'object');
  });

  describe('Private methods', function () {
    describe('_isString', function () {
      it('is a function', function () {
        expect(Stylesheet._isString, 'to be a', 'function');
      });

      it('detects string', function () {
        expect(Stylesheet._isString(''), 'to be true');
        expect(Stylesheet._isString('test123'), 'to be true');
      });

      it('does not pass other types', function () {
        expect(Stylesheet._isString(new Date()), 'to be false');
        expect(Stylesheet._isString(/test/i), 'to be false');
        expect(Stylesheet._isString(function () {}), 'to be false');
        expect(Stylesheet._isString([]), 'to be false');
        expect(Stylesheet._isString({}), 'to be false');
        expect(Stylesheet._isString(123), 'to be false');
        expect(Stylesheet._isString(true), 'to be false');
        expect(Stylesheet._isString(undefined), 'to be false');
        expect(Stylesheet._isString(null), 'to be false');
      });
    });

    describe('_isObject', function () {
      it('is a function', function () {
        expect(Stylesheet._isObject, 'to be a', 'function');
      });

      it('detects object', function () {
        expect(Stylesheet._isObject({}), 'to be true');
        expect(Stylesheet._isObject({test: 123}), 'to be true');
      });

      it('does not pass other types', function () {
        expect(Stylesheet._isObject(new Date()), 'to be false');
        expect(Stylesheet._isObject(/test/i), 'to be false');
        expect(Stylesheet._isObject(function () {}), 'to be false');
        expect(Stylesheet._isObject([]), 'to be false');
        expect(Stylesheet._isObject(''), 'to be false');
        expect(Stylesheet._isObject(123), 'to be false');
        expect(Stylesheet._isObject(true), 'to be false');
        expect(Stylesheet._isObject(undefined), 'to be false');
        expect(Stylesheet._isObject(null), 'to be false');
      });
    });

    describe('_isArray', function () {
      it('is a function', function () {
        expect(Stylesheet._isArray, 'to be a', 'function');
      });

      it('detects array', function () {
        expect(Stylesheet._isArray([]), 'to be true');
        expect(Stylesheet._isArray(['test', 123]), 'to be true');
      });

      it('does not pass other types', function () {
        expect(Stylesheet._isArray(new Date()), 'to be false');
        expect(Stylesheet._isArray(/test/i), 'to be false');
        expect(Stylesheet._isArray(function () {}), 'to be false');
        expect(Stylesheet._isArray({}), 'to be false');
        expect(Stylesheet._isArray(''), 'to be false');
        expect(Stylesheet._isArray(123), 'to be false');
        expect(Stylesheet._isArray(true), 'to be false');
        expect(Stylesheet._isArray(undefined), 'to be false');
        expect(Stylesheet._isArray(null), 'to be false');
      });
    });

    describe('_isElement', function () {
      it('is a function', function () {
        expect(Stylesheet._isElement, 'to be a', 'function');
      });

      it('detects single node', function () {
        var div = document.createElement('div');

        expect(Stylesheet._isElement(div), 'to be true');
      });

      it('does not pass other types', function () {

        expect(Stylesheet._isElement(new Date()), 'to be false');
        expect(Stylesheet._isElement(/test/i), 'to be false');
        expect(Stylesheet._isElement(function () {}), 'to be false');
        expect(Stylesheet._isElement({}), 'to be false');
        expect(Stylesheet._isElement(''), 'to be false');
        expect(Stylesheet._isElement(123), 'to be false');
        expect(Stylesheet._isElement(true), 'to be false');
        expect(Stylesheet._isElement(undefined), 'to be false');
        expect(Stylesheet._isElement(null), 'to be false');
        expect(Stylesheet._isElement([]), 'to be false');
      });
    });

    describe('_isBoolean', function () {
      it('is a function', function () {
        expect(Stylesheet._isBoolean, 'to be a', 'function');
      });

      it('detects boolean', function () {
        expect(Stylesheet._isBoolean(true), 'to be true');
        expect(Stylesheet._isBoolean(false), 'to be true');
      });

      it('does not pass other types', function () {
        expect(Stylesheet._isBoolean(new Date()), 'to be false');
        expect(Stylesheet._isBoolean(/test/i), 'to be false');
        expect(Stylesheet._isBoolean(function () {}), 'to be false');
        expect(Stylesheet._isBoolean({}), 'to be false');
        expect(Stylesheet._isBoolean(''), 'to be false');
        expect(Stylesheet._isBoolean(123), 'to be false');
        expect(Stylesheet._isBoolean(undefined), 'to be false');
        expect(Stylesheet._isBoolean(null), 'to be false');
        expect(Stylesheet._isBoolean([]), 'to be false');
      });
    });

    describe('_initializeStyleElement', function () {
      it('is a function', function () {
        expect(Stylesheet._initializeStyleElement, 'to be a', 'function');
      });
    });

    describe('_dasherize', function () {
      it('is a function', function () {
        expect(Stylesheet._dasherize, 'to be a', 'function');
      });

      it('should return correct properties', function () {
        expect(Stylesheet._dasherize('userSelect'), 'to be', 'user-select');
        expect(Stylesheet._dasherize('backgroundColor'), 'to be', 'background-color');
        expect(Stylesheet._dasherize('backfaceVisibility'), 'to be', 'backface-visibility');
        expect(Stylesheet._dasherize('backfaceVisibility'), 'to be', 'backface-visibility');
        expect(Stylesheet._dasherize('listStyleImage'), 'to be', 'list-style-image');
        expect(Stylesheet._dasherize('mozBorderTopColors'), 'to be', 'moz-border-top-colors');
      });
    });

    describe('_normalizeProperty', function () {
      it('is a function', function () {
        expect(Stylesheet._normalizeProperty, 'to be a', 'function');
      });

      it('should return correct properties', function () {
        expect(Stylesheet._normalizeProperty('userSelect'), 'to be', 'user-select');
        expect(Stylesheet._normalizeProperty('backgroundColor'), 'to be', 'background-color');
        expect(Stylesheet._normalizeProperty('backfaceVisibility'), 'to be', 'backface-visibility');
        expect(Stylesheet._normalizeProperty('backfaceVisibility'), 'to be', 'backface-visibility');
        expect(Stylesheet._normalizeProperty('listStyleImage'), 'to be', 'list-style-image');

        expect(Stylesheet._CACHED_STYLES, 'to have properties', {
          userSelect: 'user-select',
          backgroundColor: 'background-color',
          backfaceVisibility: 'backface-visibility',
          listStyleImage: 'list-style-image'
        });
      });
    });

    describe('_parseStyles', function () {
      it('is a function', function () {
        expect(Stylesheet._parseStyles, 'to be a', 'function');
      });

      it('should return correct styles', function () {
        expect(Stylesheet._parseStyles({
          color: '#333',
          fontSize: '16px'
        }), 'to be', 'color:#333;font-size:16px;');
        expect(Stylesheet._parseStyles({
          userSelect: 'none',
          color: '#333',
          fontSize: '16px'
        }), 'to be', 'user-select:none;color:#333;font-size:16px;');
      });

      it('should work on empty and non-object argument', function () {
        expect(Stylesheet._parseStyles(), 'to be empty');
        expect(Stylesheet._parseStyles('test123'), 'to be', 'test123');
      });
    });

    describe('_insertRule', function () {
      it('is a function', function () {
        expect(Stylesheet._insertRule, 'to be a', 'function');
      });
    });

    describe('_insertObjectRules', function () {
      it('is a function', function () {
        expect(Stylesheet._insertObjectRules, 'to be a', 'function');
      });
    });

    describe('_insertStringAndObjectRules', function () {
      it('is a function', function () {
        expect(Stylesheet._insertStringAndObjectRules, 'to be a', 'function');
      });
    });

    describe('_getCSSText', function () {
      it('is a function', function () {
        expect(Stylesheet._getCSSText, 'to be a', 'function');
      });
    });

    describe('_disableStylesheet', function () {
      it('is a function', function () {
        expect(Stylesheet._disableStylesheet, 'to be a', 'function');
      });

      it('should disable stylesheet', function () {
        Stylesheet._disableStylesheet();
        expect(Stylesheet._styleSheetEnabled, 'to be false');
      });
    });

    describe('_enableStylesheet', function () {
      it('is a function', function () {
        expect(Stylesheet._enableStylesheet, 'to be a', 'function');
      });

      it('should enable stylesheet', function () {
        Stylesheet._enableStylesheet();
        expect(Stylesheet._styleSheetEnabled, 'to be true');
      });
    });
  });

  describe('Public methods', function () {
    describe('add', function () {
      it('is a function', function () {
        expect(Stylesheet.add, 'to be a', 'function');
      });

      it('should return object', function () {
        expect(Stylesheet.add(), 'to be' , Stylesheet);

        Stylesheet.add('h2', 'color: #333;');

        Stylesheet.add('h1', {
          color: '#777',
          fontSize: '33px'
        });

        Stylesheet.add({
          'h3': {
            color: 'duck',
            backgroundColor: 'hello'
          },
          'blockquote': {
            borderRadius: '3px',
            border: '1px solid #ccc'
          }
        });

        Stylesheet.add({
          'h3': {
            color: 'duck',
            backgroundColor: 'hello'
          },
          'blockquote': {
            borderRadius: '3px',
            border: '1px solid #ccc'
          }
        }, true);
      });
    });

    describe('disable', function () {
      it('is a function', function () {
        expect(Stylesheet.disable, 'to be a', 'function');
      });

      it('should return object', function () {
        expect(Stylesheet.disable(), 'to be' , Stylesheet);
      });

      it('should disable stylesheet', function () {
        Stylesheet.disable();
        expect(Stylesheet._styleSheetEnabled, 'to be false');
      });
    });

    describe('enable', function () {
      it('is a function', function () {
        expect(Stylesheet.enable, 'to be a', 'function');
      });

      it('should return object', function () {
        expect(Stylesheet.enable(), 'to be' , Stylesheet);
      });

      it('should enable stylesheet', function () {
        Stylesheet.enable();
        expect(Stylesheet._styleSheetEnabled, 'to be true');
      });
    });

    describe('CSSText', function () {
      it('is a function', function () {
        expect(Stylesheet.CSSText, 'to be a', 'function');
      });

      it('should return string', function () {
        expect(Stylesheet.CSSText(), 'to be empty');
      });

      it('should return expected string', function () {
        Stylesheet.add('h2', 'color: #333;');

        expect(Stylesheet.CSSText(), 'to be', 'h2 {color: #333;}');
      });
    });
  });
});
