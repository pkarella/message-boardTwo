import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('inquiry');
 },
 actions: {
    saveInquiry(params) {
      var newInquiry = this.store.createRecord('inquiry', params);
      newInquiry.save();
    }
  }
});
