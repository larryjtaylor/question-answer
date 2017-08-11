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
    return questions;
  }
});