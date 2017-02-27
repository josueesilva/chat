
import { Meteor } from 'meteor/meteor';
import { Conversations } from '../conversations.js';
import { Mensages } from '../mensages.js';

Meteor.publish('mensages.all', function (cId) {
  return Mensages.find({conversationId: cId});
});

Meteor.publish('users.all', function () {
  return Meteor.users.find();
});
