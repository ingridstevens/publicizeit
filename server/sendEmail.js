Meteor.methods({
  'email' : function (name, email, message) {
    Email.send({
      to: 'icklebobz@gmail.com',
      from: email,
      subject: 'New email from ' + name,
      text: message
    });
    
    console.log('New email sent!');
  }
});
