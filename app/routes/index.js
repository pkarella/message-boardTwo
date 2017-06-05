import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('inquiry');
 },
 actions: {
    destroyInquiry(inquiry) {
      inquiry.destroyRecord();
      this.transitionTo('index');
    }
  }
});
