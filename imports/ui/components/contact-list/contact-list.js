import './contact-list.html';

Template.contactList.onCreated(function () {
  self = this;
  self.autorun(function() {
    self.subscribe("users");
  });
});


Template.contactList.helpers({
  users:() => {
    return Meteor.users.find();
  },
});