//this file is meant to format the message in a div
//for html

var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username"><%-username %></div>
        <div ><%-text%></div>
      </div>

    `)

};