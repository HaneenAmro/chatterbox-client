var RoomsView = {
  // this file is meant to be a controller/viewer
  // when user clicks on add room button in html
  // the html should reset child elements from chats
  // then we need to append messages with the property
  // of roomname matching the selected to the html at #chats

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: () =>{
    $('#rooms button').click(RoomsView.renderRoom);
  },

  renderRoom: () =>{

    //change the roomname in messages object
    var roomName = $('#message').val();

    //rooms.add(room)
    Rooms.add(roomName);

    //rooms select on option needs to
  }

};
