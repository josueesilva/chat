
import { Mongo } from 'meteor/mongo';
Conversations = new Mongo.Collection('conversations');

Conversations.allow({
  insert(userId, doc){
    return !!userId;
  }
});

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