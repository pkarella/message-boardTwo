import Ember from 'ember';

export default Ember.Component.extend({

actions:{
    delete(inquiry) {
      if (confirm('Are you sure you would like to erase your question?')){
        this.sendAction('destroyInquiry', inquiry);
      }
      }
    }
  });
