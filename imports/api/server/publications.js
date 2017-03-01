
import { Meteor } from 'meteor/meteor';
import { Conversations } from '../conversations.js';
import { Mensages } from '../mensages.js';

Meteor.publish('users', function () {
  return Meteor.users.find();
});
