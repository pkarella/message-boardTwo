import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('inquiry');
 },
 actions: {
    saveInquiry(params) {
      var newInquiry = this.store.createRecord('inquiry', params);
      newInquiry.save();
      this.transitionTo('index');
    },
    update(inquiry, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          inquiry.set(key,params[key]);
        }
      });
      inquiry.save();
      this.transitionTo('index');
    },

  destroyInquiry(inquiry) {
      inquiry.destroyRecord();
      this.transitionTo('index');
    }
  }
});
