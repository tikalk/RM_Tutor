Slim.tag('t-message-box',
    `
<div class="t-message-box">
  <div class="t-message-box__header">
    Messages
  </div>
  <div class="t-message-box__body">
    <t-message slim-repeat="messages"
               slim-repeat-as="message"
               text="[[message.text]]"
               date="[[message.date]]"
               is-new="[[message.isNew]]"
               avatar-url="[[message.avatarUrl]]"></t-message>
 </div>
</div>
<style>
    .t-message-box {
        position: relative;
        width: 350px;
        font-family: Arial;
        border: 1px solid #dddddd;
        border-radius: 3px;
        -webkit-box-shadow: -7px 9px 18px -3px rgba(0,0,0,0.75);
        -moz-box-shadow: -7px 9px 18px -3px rgba(0,0,0,0.75);
        box-shadow: -7px 9px 18px -3px rgba(0,0,0,0.75);
    }
    
    .t-message-box:before {
        position: absolute;
        top: -24px;
        right: 5px;
        transform: rotate(270deg);
        content: "";
        display: block;
        position: absolute;
        width: 0px;
        height: 0px;
        border-top-width: 12px;
        border-left-width: 12px;
        border-bottom-width: 12px;
        border-right-width: 12px;
        border-style: solid;
        border-color: transparent transparent transparent #35444D;
    }
    
    .t-message-box__header {
        width: 340px;
        background: #35444D;
        color: #ffffff;
        padding: 5px;
        text-align: center;
    }
    
    .t-message-box__body {
        width: 100%;
        min-height: 100px;
        max-height: 400px;
        overflow-y: auto;
    }
    
    t-message {
        display: block;
        border-bottom: 1px solid #eeeeee;
    }
    
    t-message:last-child {
        border-bottom: 0;
    }
</style>
`,
    class extends Slim {
        get useShadow() {
            return true
        }
    });

