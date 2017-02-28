import './mensage-box.html';
import './mensage-box.css';
// import {ReactiveDict} from 'meteor/reactive-dict';

Template.mensageBox.onCreated(function(){
  // this.idC = new ReactiveDict();
  // this.idC.set('data', Session.get('converse'));  
});

Template.mensageBox.helpers({
  existConverse(){
    // console.log('testeidC', this.idC.get('data'));
    console.log('session:', Session.get('converse'));
    return Session.get('converse');
  },
});

Template.mensageBox.events({
  'click .btn-primary': function(e, instance) {
    let mensage = instance.find('#mensage').value;
    console.log(mensage);
  },
});