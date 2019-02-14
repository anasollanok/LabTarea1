import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
import {MDCList} from "@material/list";

const ripple = new MDCRipple(document.querySelector('.foo-button'));

const mail = new MDCTextField(document.querySelector('.mail'));
const msg = new MDCTextField(document.querySelector('.msg'));

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
