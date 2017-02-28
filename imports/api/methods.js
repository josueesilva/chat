import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  conversationInsert(uId, dId){
    check(uId, String);
    check(dId, String);

    let idConversation;

    const usersIds = [uId, dId];
    console.log('usersIds', usersIds);
    const conversations = Conversations.find({}).fetch().filter(i => _.difference(usersIds, i.usersIds).length < 1);
    console.log(conversations);
    if(conversations.length > 0){
      idConversation = conversations[0]._id;
    } else {
      idConversation = Conversations.insert({
        usersIds
      });
    }
    
    return idConversation;
  },
  //  if(_.difference(i.usersIds, usersIds).length < 1) {
  //       idConversation = i._id;          
  //     } else {
  //        idConversation = Conversations.insert({
  //         usersIds
  //       });
  //       console.log('i.usersIds', i.usersIds);
  //       console.log('usersIds', usersIds);
  //     }
});
