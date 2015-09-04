App.Collections.Grumbles = Backbone.Collection.extend({
  model: App.Models.Grumble,
  url: "http://localhost:3000/grumbles"
});
