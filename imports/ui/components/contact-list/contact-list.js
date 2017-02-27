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
  'click .contact': function(e, instance) {
    const contactName = e.target.getAttribute('name');
    const contactId = e.target.getAttribute('id');
    console.log(`contact name: ${contactName} ID: ${contactId}`);
  },
});