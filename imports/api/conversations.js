
import { Mongo } from 'meteor/mongo';
Conversations = new Mongo.Collection('conversations');

UserId = new SimpleSchema({
  userId: {
    type: String,
  }
});


ConversationsSchema = new SimpleSchema({
  usersIds: {
    type: [UserId],
  }
});