App.Routers.Grumbles = Backbone.Router.extend({
  routes: {
    '': 'index',
    'grumbles/new': 'newGrumble',
    'grumbles/:id/edit': 'editGrumble'
  },
  initialize: function(){
    App.Collections.grumbles = new App.Collections.Grumbles();
    App.Views.grumbleList = new App.Views.GrumbleList({collection: App.Collections.grumbles});
    App.Views.grumbleCreate = new App.Views.GrumbleCreate({collection: App.Collections.grumbles});
  },

  index: function(){
    App.Collections.grumbles.fetch();
  },
  newGrumble: function(){
    App.Collections.grumbles.fetch();
    App.Views.grumbleCreateView.toggleForm();
  },
  editGrumble: function(id){
    App.Collections.grumbles.fetch().then(function() {
      view = App.Views.listView.find(id);
      view.renderEditForm();
    });
  }

});
