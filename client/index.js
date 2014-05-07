Template.home.events({
  // Fires when any element is clicked
  'click .submit-form': function (event) {
    var name = $('.name').val();
    var email = $('.email').val();
    var message = $('.message').val();

    Meteor.call('sendEmail', name, email, message);
    $('.closeButton').click();
  },
});
