import { Mongo } from 'meteor/mongo';
Mensages = new Mongo.Collection('mensages');

MensagesSchema = new SimpleSchema({
  userName: {
    type: String,
    label: 'user name'
  },
  userId: {
    type: String,
    label:  'Id usuario'
  },
  conversationId:{
    type:String,
  },
  mensagem:{
    type: String,
    label: 'Mensagem'
  },
  dateSend:{
    type: Date,
    label: "Enviado as",
    autoValue: function() {
      return  new Date()
    },
  }
});

Mensages.attachSchema(MensagesSchema);