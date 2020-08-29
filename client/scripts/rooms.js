var Rooms = {
  // this file is meant to hold an array of the chat rooms
  // this array of chat rooms will be appended to html when added

  //create an array to hold the rooms
  chatRooms: [],
  //create add method to add new rooms to the array

  initialize: () => {
    $('#option: selected').click(Rooms.refresh);
  },


  add: (room) => {
    if (!Rooms.chatRooms.includes(room)) {
      Rooms.chatRooms.push(room);
      $('#rooms select').append(`<option id="option">${room}</option>`);
    }
  },


  refresh: () => {
    $('.chat').remove();
  }



};


