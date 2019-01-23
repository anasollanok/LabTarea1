import {MDCRipple} from '@material/ripple/index';
import {MDCTextField} from '@material/textfield';

const ripple = new MDCRipple(document.querySelector('.foo-button'));

console.log('hello world');

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;