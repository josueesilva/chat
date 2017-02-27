
import { Meteor } from 'meteor/meteor';
import { Conversations } from '../conversations.js';
import { Mensages } from '../mensages.js';

Meteor.publish('mensages', function (cId) {
  return Mensages.find({conversationId: cId});
});

Meteor.publish('users', function () {
  return Meteor.users.find();
});
