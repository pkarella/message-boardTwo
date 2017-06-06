import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    delete(answer){
      this.sendAction('destroyAnswer', answer);
    },
    showUpdateAnswer() {
      this.set('updateAnswerForm', true);
    },
    updateAnswer(answer) {
      var params = {
        name: this.get('updateName'),
        newAnswer: this.get('updateNewAnswer'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
