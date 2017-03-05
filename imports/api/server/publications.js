import { check } from 'meteor/check'
import { Meteor } from 'meteor/meteor';
import Mensages from '../mensages.js';

Meteor.publish('users', function () {
  return Meteor.users.find();
});

Meteor.publish('mensages', function (conversationId) {
  console.log('publish',conversationId);
    if(conversationId) return Mensages.find({conversationId});
    return false;
});

