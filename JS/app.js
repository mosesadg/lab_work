App = {
  Models: {},
  Views: {
    grumbleViews: []
  },
  Collections: {},
  Routers: {}
};

$(document).ready(function() {
  App.Routers.grumblesRouter = new App.Routers.Grumbles();
  Backbone.history.start();
});
