import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        body: this.get('body') ? this.get('body') : "",
        author: this.get('author') ? this.get('author') : "",
        experience: this.get('experience') ? this.get('experience') : "",
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    },
    hideForm() {
      this.set('addNewQuestion', false);
    }
  }
});
