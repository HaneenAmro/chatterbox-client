// this file is meant to create a message and post
// Parse server as well as prepend message in chats
// html
var MessagesView = {
  $chats: $('#chats'),


  initialize: () => {

  },

  renderMessage: (message) => {
    // send unstructured message to server
    var strucMsg;
    // console.log(message);

    // console.log(message.data);
    // structure the message

    strucMsg = MessageView.render(message);
    console.log(strucMsg);
    // render the structured message in our html
    $('#chats').prepend((strucMsg));

  }

};
