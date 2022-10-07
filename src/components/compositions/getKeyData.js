export const getKeyData = () => {
 const keyData = [
  {
    key: 'Backquote',
    value: '`',
    newValue: '˜',
    keyCode: 229,
    type: 'value'
  },
  {
    key: 'Digit1',
    value: '1',
    newValue: '!',
    keyCode: 49,
    type: 'value'
  },
  {
    key: 'Digit2',
    value: '2',
    newValue: '@',
    keyCode: 50,
    type: 'value'
  },
  {
    key: 'Digit3',
    value: '3',
    newValue: '#',
    keyCode: 51,
    type: 'value'
  },
  {
    key: 'Digit4',
    value: '4',
    newValue: '$',
    keyCode: 52,
    type: 'value'
  },
  {
    key: 'Digit5',
    value: '5',
    newValue: '%',
    keyCode: 53,
    type: 'value'
  },
  {
    key: 'Digit6',
    value: '6',
    newValue: 'ˆ',
    keyCode: 54,
    type: 'value'
  },
  {
    key: 'Digit7',
    value: '7',
    newValue: '&',
    keyCode: 55,
    type: 'value'
  },
  {
    key: 'Digit8',
    value: '8',
    newValue: '*',
    keyCode: 56,
    type: 'value'
  },
  {
    key: 'Digit9',
    value: '9',
    newValue: '(',
    keyCode: 57,
    type: 'value'
  },
  {
    key: 'Digit0',
    value: '0',
    newValue: ')',
    keyCode: 48,
    type: 'value'
  },
  {
    key: 'Minus',
    value: '-',
    newValue: '_',
    keyCode: 189,
    type: 'value'
  },
  {
    key: 'Equal',
    value: '=',
    newValue: '+',
    keyCode: 187,
    type: 'value'
  },
  {
    key: 'Backspace',
    value: 'Backspace',
    newValue: null,
    keyCode: 8,
    type: 'action'
  },
  {
    key: 'Tab',
    value: 'Tab',
    newValue: null,
    keyCode: 9,
    type: 'action'
  },
  {
    key: 'KeyQ',
    value: 'q',
    newValue: 'Q',
    keyCode: 81,
    type: 'value'
  },
  {
    key: 'KeyW',
    value: 'w',
    newValue: 'W',
    keyCode: 87,
    type: 'value'
  },
  {
    key: 'KeyE',
    value: 'e',
    newValue: 'E',
    keyCode: 69,
    type: 'value'
  },
  {
    key: 'KeyR',
    value: 'r',
    newValue: 'R',
    keyCode: 82,
    type: 'value'
  },
  {
    key: 'KeyT',
    value: 't',
    newValue: 'T',
    keyCode: 84,
    type: 'value'
  },
  {
    key: 'KeyY',
    value: 'y',
    newValue: 'Y',
    keyCode: 89,
    type: 'value'
  },
  {
    key: 'KeyU',
    value: 'u',
    newValue: 'U',
    keyCode: 85,
    type: 'value'
  },
  {
    key: 'KeyI',
    value: 'i',
    newValue: 'I',
    keyCode: 73,
    type: 'value'
  },
  {
    key: 'KeyO',
    value: 'o',
    newValue: 'O',
    keyCode: 79,
    type: 'value'
  },
  {
    key: 'KeyP',
    value: 'p',
    newValue: 'P',
    keyCode: 80,
    type: 'value'
  },
  {
    key: 'BracketLeft',
    value: '[',
    newValue: '{',
    keyCode: 219,
    type: 'value'
  },
  {
    key: 'BracketRight',
    value: ']',
    newValue: '}',
    keyCode: 221,
    type: 'value'
  },
  {
    key: 'Backslash',
    value: '\\',
    newValue: '|',
    keyCode: 220,
    type: 'value'
  },
  {
    key: 'CapsLock',
    value: 'CapsLock',
    newValue: null,
    keyCode: 20,
    type: 'action'
  },
  {
    key: 'KeyA',
    value: 'a',
    newValue: 'A',
    keyCode: 65,
    type: 'value'
  },
  {
    key: 'KeyS',
    value: 's',
    newValue: 'S',
    keyCode: 83,
    type: 'value'
  },
  {
    key: 'KeyD',
    value: 'd',
    newValue: 'D',
    keyCode: 68,
    type: 'value'
  },
  {
    key: 'KeyF',
    value: 'f',
    newValue: 'F',
    keyCode: 70,
    type: 'value'
  },
  {
    key: 'KeyG',
    value: 'g',
    newValue: 'G',
    keyCode: 71,
    type: 'value'
  },
  {
    key: 'KeyH',
    value: 'h',
    newValue: 'H',
    keyCode: 72,
    type: 'value'
  },
  {
    key: 'KeyJ',
    value: 'j',
    newValue: 'J',
    keyCode: 74,
    type: 'value'
  },
  {
    key: 'KeyK',
    value: 'k',
    newValue: 'K',
    keyCode: 75,
    type: 'value'
  },
  {
    key: 'KeyL',
    value: 'l',
    newValue: 'L',
    keyCode: 76,
    type: 'value'
  },
  {
    key: 'Semicolon',
    value: ';',
    newValue: ':',
    keyCode: 186,
    type: 'value'
  },
  {
    key: 'Quote',
    value: '\'',
    newValue: '"',
    keyCode: 229,
    type: 'value'
  },
  {
    key: 'Enter',
    value: 'Enter',
    newValue: null,
    keyCode: 13,
    type: 'action'
  },
  {
    key: 'ShiftLeft',
    value: 'Shift',
    newValue: null,
    keyCode: 16,
    type: 'action'
  },
  {
    key: 'KeyZ',
    value: 'z',
    newValue: 'Z',
    keyCode: 90,
    type: 'value'
  },
  {
    key: 'KeyX',
    value: 'x',
    newValue: 'X',
    keyCode: 88,
    type: 'value'
  },
  {
    key: 'KeyC',
    value: 'c',
    newValue: 'C',
    keyCode: 67,
    type: 'value'
  },
  {
    key: 'KeyV',
    value: 'v',
    newValue: 'V',
    keyCode: 86,
    type: 'value'
  },
  {
    key: 'KeyB',
    value: 'b',
    newValue: 'B',
    keyCode: 66,
    type: 'value'
  },
  {
    key: 'KeyN',
    value: 'n',
    newValue: 'N',
    keyCode: 78,
    type: 'value'
  },
  {
    key: 'KeyM',
    value: 'm',
    newValue: 'M',
    keyCode: 77,
    type: 'value'
  },
  {
    key: 'Comma',
    value: ',',
    newValue: '<',
    keyCode: 188,
    type: 'value'
  },
  {
    key: 'Period',
    value: '.',
    newValue: '>',
    keyCode: 190,
    type: 'value'
  },
  {
    key: 'Slash',
    value: '/',
    newValue: '?',
    keyCode: 191,
    type: 'value'
  },
  {
    key: 'ShiftRight',
    value: 'Shift',
    newValue: null,
    keyCode: 16,
    type: 'action'
  },
  {
    key: 'ControlLeft',
    value: 'Ctrl',
    newValue: null,
    keyCode: 17,
    type: 'action'
  },
  {
    key: 'MetaLeft',
    value: 'Win Key',
    newValue: null,
    keyCode: 91,
    type: ''
  },
  {
    key: 'AltLeft',
    value: 'Alt',
    newValue: null,
    keyCode: 18,
    type: ''
  },
  {
    key: 'Space',
    value: ' ',
    newValue: null,
    keyCode: 32,
    type: 'value'
  },
  {
    key: 'AltRight',
    value: 'Alt',
    newValue: null,
    keyCode: 18,
    type: ''
  },
  {
    key: 'MetaRight',
    value: 'Win Key',
    newValue: null,
    keyCode: 93,
    type: ''
  },
  {
    key: 'Menu',
    value: 'Menu',
    newValue: null,
    keyCode: '',
    type: ''
  },
  {
    key: 'ControlRight',
    value: 'Ctrl',
    newValue: null,
    keyCode: 17,
    type: 'action'
  },
 ];

 return keyData;
}