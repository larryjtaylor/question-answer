import Ember from 'ember';

var questions = [{
  id: 1,
  body: "What language should I start with? It seems like there are hundreds!",
  author: "Chuck Menkin",
  experience: "total noob"
}, {
  id: 2,
  body: "Should I buy a Mac or PC to get started?",
  author: "Alex Sondheim",
  experience: "some HTML"
}, {
  id: 3,
  body: "Do I need a computer science degree to get a job?",
  author: "Sarah Rodgers",
  experience: "made my MySpace cute..."
}];

export default Ember.Route.extend({
  model() {
   return this.store.findAll('question');
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
