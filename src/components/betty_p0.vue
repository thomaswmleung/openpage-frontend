<template>
  <div id="chatBox" class="no-margin chat-outer-box">
      <textarea readonly
                id="chatHistory"
                class="scrollabletextbox chat-font" placeholder="Your chat will appear here"></textarea>
  <hr class="no-margin"/>
      <input id="chatInput" type="text" class="no-margin chat-box chat-font rounded-border" placeholder="Send Message" onkeypress="keypressInChatInput(event)">
      </input>
</div>
</template>

<style>

body{
  background-color: #444;
}

input[type="text"] {
             display: block;
             margin : 0 auto;
        }

.chat-outer-box {
    background-color: #fff;
    width: 210px;
    height: 270px;
}

.chat-box {
    background-color: #eee;
    float: none;
    width: 97% ;
    height: 10%;
    margin-left: 1px;
    margin-right: 1px;
    margin-top: 0px;
    border:solid 1px silver;border-radius: 4px;
  }

.scrollabletextbox {
    background-color: #fff;
    height:86%;
    width:100%;
    overflow:scroll;
    margin-bottom:0px;
    resize: none;
    border: none;
}

.chat-font {
  font-size: 100%;
  font-family: Verdana, Tahoma, Arial, Helvetica, sans-serif;
  color: #000;
}

.no-margin {
  margin-top:1px;
  margin-bottom:2px;
  margin-left:0px;
  margin-right:0px;
  padding:0px;
}


</style>

<script>
function keypressInChatInput (event) {
  var chatElement = document.getElementById("chatInput");
var chatHistory =
    document.getElementById("chatHistory");
if(chatElement == 0 ||
  chatHistory == 0)
  {
    console.log("chatElement/History not found");
  }
  else{
    var code = (event.keyCode ? event.keyCode : e.which)
    if (code == 13) { //Enter keycode
        event.preventDefault()

        var text = chatElement.value;
        chatElement.value = "";
        if(text.length > 0)
        {
            text="\r\n" +
              "BlueJeansParallel: " +
              text;
            var history = chatHistory.value;
          history+=text;
          chatHistory.value = history;
        }
    }
}
};
</script>
