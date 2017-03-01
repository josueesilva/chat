import './mensage-box.html';
import './mensage-box.css';

Template.mensageBox.helpers({
  existConverse() {
    return Session.get('converse');
  },
  mensages() {
    Meteor.call('listMensages', Session.get('converse'), (error, result) => {
      if(error){
        return alert(error);        
      }     
      Session.set('listMensages',result);
    });
    return Session.get('listMensages');
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