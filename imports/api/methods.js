import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Conversations from './conversations.js';
import Mensages from './mensages.js';

Meteor.methods({
  conversationInsert(dId){
    check(dId, String);

    let idConversation;

    const usersIds = [Meteor.userId(), dId];
    console.log(usersIds);
    
    const conversations = Conversations.find({usersIds: usersIds}).fetch();
    const conversations2 = Conversations.find({usersIds: usersIds.reverse()}).fetch();
    
    console.log('length', conversations.length);
    console.log('usersIds', usersIds);
    if (conversations.length > 0){
      idConversation = conversations[0]._id;
    } else if(conversations2.length) {
      idConversation = conversations2[0]._id;
    } else {
      idConversation = Conversations.insert({
        usersIds
      });
    }
    
    return idConversation;
  },
  mensageSend(idC, mensage) {
    check(idC, String);
    check(mensage, String);

    Mensages.insert({
      userName: Meteor.user().username,
      userId: Meteor.userId(),
      conversationId: idC,
      mensagem: mensage
    });
  },
  listMensages(idC) {
    check(idC, String);

    return Mensages.find({conversationId: idC}).fetch();
  }
});
