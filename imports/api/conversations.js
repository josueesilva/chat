import { Mongo } from 'meteor/mongo';

const Conversations = new Mongo.Collection('conversations');

Conversations.allow({
  insert(userId, doc){
    return !!userId;
  }
});

const UserId = new SimpleSchema({
  userId: {
    type: String,
  }
});

const ConversationsSchema = new SimpleSchema({
  usersIds: {
    type: [String],
  }
});

Conversations.attachSchema(ConversationsSchema);

export default Conversations;