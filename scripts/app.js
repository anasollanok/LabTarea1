import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCFormField} from '@material/form-field';
import {MDCChipSet} from '@material/chips';

const serial = new MDCTextField(document.querySelector('.serial'));
if(document.querySelector('.modulo3')){
  const msg = new MDCTextField(document.querySelector('.msg'));
  const mail = new MDCTextField(document.querySelector('.mail'));
  const send = new MDCRipple(document.querySelector('.send'));
}
const verify = new MDCRipple(document.querySelector('.verify'));
const chipSetEl = document.querySelector('.mdc-chip-set');
const chipSet = new MDCChipSet(chipSetEl);
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
