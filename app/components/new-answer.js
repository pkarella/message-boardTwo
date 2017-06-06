import Ember from 'ember';

export default Ember.Component.extend({
 actions: {
   saveAnswer() {
      var params = {
        name: this.get('name'),
        newAnswer: this.get('newAnswer'),
        inquiry: this.get('inquiry')
      };
      this.sendAction('saveAnswer', params);
    }
    }
});
