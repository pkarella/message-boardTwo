import Ember from 'ember';

export default Ember.Component.extend({
  addNewInquiry: false,
  actions: {
    inquiryFormShow() {
      this.set('addNewInquiry', true);
    },
    delete(inquiry) {
      if (confirm('Are you sure you would like to erase your question?')){
        this.sendAction('destroyInquiry', inquiry);
      }
      }
    }
  });
