import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  conversationInsert(dId){
    check(dId, String);

    let idConversation;

    const usersIds = [Meteor.userId(), dId];
    const conversations = Conversations.find({}).fetch().filter(i => _.difference(usersIds, i.usersIds).length < 1);
    
    if (conversations.length > 0){
      idConversation = conversations[0]._id;
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
