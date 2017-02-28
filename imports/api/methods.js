import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  conversationInsert(uId, dId){
    check(uId, String);
    check(dId, String);

    let idConversation;

    const usersIds = [uId, dId];
    const conversations = Conversations.find({}).fetch().filter(i => {
      if(_.difference(i.usersIds, usersIds).length < 1) {
        idConversation = i._id;          
      } else {
         idConversation = Conversations.insert({
          usersIds
        });
      }
    });
    return idConversation;
  },
});
