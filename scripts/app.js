import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

const ripple = new MDCRipple(document.querySelector('.foo-button'));

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));

if(document.querySelector('.phone')){
  const phone = new MDCTextField(document.querySelector('.phone'));
  const email = new MDCTextField(document.querySelector('.email'));
  const address = new MDCTextField(document.querySelector('.address'));
  const city = new MDCTextField(document.querySelector('.city'));
  const state = new MDCTextField(document.querySelector('.state'));
}
else{
  const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
  const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
  formField.input = checkbox;
}
const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
