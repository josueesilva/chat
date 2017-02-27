
import { Meteor } from 'meteor/meteor';
import { Conversations } from '../conversations.js';
import { Mensages } from '../mensages.js';

Meteor.publish('Mensages.all', function () {
  return Mensages.find();
});
