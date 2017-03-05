import './mensage-box.html';
import './mensage-box.css';
import Mensages from '../../../api/mensages.js';

Template.mensageBox.onCreated(function () {
  self = this;
  self.autorun(function() {
      const subMensages = self.subscribe("mensages", Session.get('converse'));
      console.log('lalala',subMensages);
      console.log(subMensages.ready());
  });
});

Template.mensageBox.helpers({
  existConverse() {
    return Session.get('converse');
  },
  mensages() {
    console.log('dad',Mensages.find({conversationId: Session.get('converse')}).fetch());
    return Mensages.find({conversationId: Session.get('converse')}).fetch();
    // return Session.get('listMensages');
  }
});

Template.mensageBox.events({
  'click .btn-primary': function(e, instance) {
    let mensage = instance.find('#mensage').value;
    Meteor.call('mensageSend', Session.get('converse'), mensage, (error) => {
        if(error) {
          return alert(error);
        }
        instance.find('#mensage').value = "";
    });
  },
});