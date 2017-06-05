import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.store.findRecord('inquiry', params.inquiry_id);
 },
 actions:{
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
