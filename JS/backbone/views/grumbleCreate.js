App.Views.GrumbleCreate = Backbone.View.extend({
  el: "#createGrumble",

  events: {
    'click .new':    'toggleForm',
    'click .cancel': 'toggleForm',
    'click .submit': 'createGrumble'
  },

  initialize: function(){

    this.template = Handlebars.compile($("#grumbleFormTemplate").html());

    this.$(".formContainer").html(this.template({}));
    this.$(".formContainer").hide();
  },

  toggleForm: function(){
    this.toggleButton(this.$(".new").text());
    this.toggleUrlState(this.$(".new").text());
    event.preventDefault();
    this.$(".formContainer").slideToggle();
  },

  toggleButton: function(state){
    if(state === "New Grumble"){
      this.$(".new").text("Hide Form");
    }else{
      this.$(".new").text("New Grumble");
    }
  },

  toggleUrlState: function(state){
    if(state === "New Grumble"){
      App.Routers.grumblesRouter.navigate('');
    } else{
      App.Routers.grumblesRouter.navigate('grumbles/new');
    }
  },

  createGrumble: function(){
    event.preventDefault();
    var data = {
      title: this.$("[name='title']").val(),
      authorName: this.$("[name='authorName']").val(),
      content: this.$("[name='content']").val(),
      photoUrl: this.$("[name='photoUrl']").val()
    };
    this.collection.create(data);

    this.$el.find("input, textarea").val("");
    this.toggleForm();
  },


});
