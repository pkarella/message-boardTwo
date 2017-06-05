import Ember from 'ember';

export default Ember.Component.extend({
  updateInquiryForm: false,
  actions: {
    updateInquiryForm() {
      this.set('updateInquiryForm', true);
    },
    update(inquiry) {
      var params = {
        author: this.get('author'),
        greatQuestion: this.get('greatQuestion'),
        notes: this.get('notes'),
      };
      this.set('updateInquiryForm', false);
      this.sendAction('update', inquiry, params);
    }
  }
});
