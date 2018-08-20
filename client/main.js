import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/startup/client';

import { Churches } from '../imports/api/churches/churches.js';
import { Rally } from '../imports/api/rally/rally.js';

window.Churches = Churches;
window.Rally = Rally;
