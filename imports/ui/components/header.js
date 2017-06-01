import "./header.html";
import "./header.css";

Template.header.events({
  "click #header-profile-button": function() {
    $("#header-profile-menu").toggleClass("menu-hidden");
  },
  "click #header-notification-button": function() {
    $("#header-notification-menu").toggleClass("menu-hidden");
  }
});
