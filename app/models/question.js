import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  author: DS.attr(),
  experience: DS.attr(),
  answers: DS.hasMany('answer', { async: true })

});
