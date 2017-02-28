import './contact-list.html';
import './contact-list.css';

Template.contactList.onCreated(function () {
  self = this;
  self.autorun(function() {
    self.subscribe("users");
  });
});

Template.contactList.helpers({
  users() {
    return Meteor.users.find();
  },
});

Template.contactList.events({
  'click .contact'(e, instance) {
    const contactName = this.username;
    const contactId = this._id;
    console.log('this:', this);
    Meteor.call('conversationInsert', Meteor.userId(), contactId, (error, result) => {
      if(error){
        return alert(error);        
      }
      Session.set("converse", result);
    });
    // console.log('idConversation:', Session.get("converse"));
  },
});