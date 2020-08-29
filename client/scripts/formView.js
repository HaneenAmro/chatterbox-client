// this file is meant to take input in the form field and
// call on the MessagesView.renderMessage

var FormView = {

  $form: $('form'),

  initialize: () =>{
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: (event) => {
    // Stop the browser from submitting the form
    event.preventDefault();


    var text = $('#message').val();
    // var roomName = $('#rooms select option').val();

    var messages = {
      username: window.location.search.substr(10),
      text: text,
      roomname: ''
    };
    Parse.create(messages, function () {
      console.log ('message sent');
    });
    //MessagesView.renderMessage(messages);
    // console.log(messages);
    // $('.chat').remove();

    Parse.readAll((data) => {
      // examine the response from the server request:
      for (var i = 0; i < data.results.length; i++) {
        MessagesView.renderMessage(data.results[i]);
      }
    });


    // console.log(MessagesView.renderMessage(messages));

    console.log('click!');
  },

  setStatus: (active) =>{
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};