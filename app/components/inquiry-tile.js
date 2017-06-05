import Ember from 'ember';

export default Ember.Component.extend({

actions:{
  update(inquiry, params) {
     this.sendAction('update', inquiry, params);
   },
    delete(inquiry) {
      if (confirm('Are you sure you would like to erase your question?')){
        this.sendAction('destroyInquiry', inquiry);
      }
      }
    }
  });
