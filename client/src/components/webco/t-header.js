Slim.tag('t-header',
`<div class="header-container">
    <div class="logo-img"></div>
    <div class="logo-name" bind>[[logoName]]</div>
    
    <div class="user-name" bind>[[userName]]</div>
    <div class="user-image"></div>
    <div class="openMessages" click="toggleMsg"></div>
    <t-message-box slim-if="displayMessages" messages="[[messages]]"></t-message-box>   

</div>
<style bind>

    .header-container {
        width: 100%;
        position: sticky;
        background-color: cadetblue;
        height: 4rem;
    }
        
    :host .logo-img {
        width: 8rem;
        height: 100%;
        background-size: contain;
        background-image: url(../assets/logo.png);
        background-repeat: no-repeat;
        margin: auto 1rem;
        display: inline-block;
        float: left;
    }
    
    :host .user-image {
        width: 3.6rem;
        height: 3.6rem;
        margin-top: 0.2rem;
        background-size: cover;
        background-image: url(../assets/avatar.jpg);
        border-radius: 100%;
        display: inline-block;
        float: right;
        margin-right: 1rem;

    }
    
    .logo-name {
        font-family: "Calibri Light";
        line-height: 4rem;
        font-size: 2rem;
        display: inline-block;
        float: left;
    }
    
    .user-name {
        font-family: "Calibri Light";
        line-height: 4rem;
        font-size: 2rem;
        display: inline-block;
        float: right;
        margin-right: 1rem;

    }
    
    .openMessages{
        background: red;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        display: inline-block;
        float: right;
        margin-top: 1.5rem;
        margin-right: 1rem;
    }
    
    t-message-box  {
        position: absolute;
        top: 5rem;
        right: 12.5rem;
    }
    
    
</style>`,
class extends Slim {

    get useShadow() { return true; }

    onBeforeCreated() {
        this.displayMessages = false;
        this.logoName = this.getAttribute('logo-name');
        this.logoUrl = this.getAttribute('logo-url');
        this.userUrl = this.getAttribute('user-url');
        this.userName = this.getAttribute('user-name');
        this.messages = [
            {
                avatarUrl: 'https://avatars1.githubusercontent.com/u/681169?v=3',
                text: 'this is the message',
                date: '27/8/16',
                isNew: true
            },
            {
                avatarUrl: 'https://avatars1.githubusercontent.com/u/681169?v=3',
                text: 'another message another message',
                date: '26/8/16',
                isNew: false
            }]

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'user-url' && oldValue != newValue) {
            this.userUrl = newValue;

        }
        if (name === 'user-name' && oldValue != newValue) {
            this.userName = newValue;

        }
    }

    toggleMsg() {
        this.displayMessages = !this.displayMessages;
    }


});