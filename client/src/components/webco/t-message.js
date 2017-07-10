Slim.tag('t-message',
  `
<div class="t-message" is-new="[[isNew]]">
  <div class="t-message__avatar"></div>
  <div class="t-message__body">
    <div class="t-message__text" bind>[[text]]</div>
    <div class="t-message__date" bind>[[date]]</div>
  </div>
</div>
<style bind>
    .t-message {
        width: 334px;
        min-height: 48px;
        padding: 7px;
    }
    :host .t-message__avatar {
        float: left;
        width: 48px;
        height: 48px;
        background-size: cover;
        background-image: url('[[avatarUrl]]');
    }
    :host .t-message__body {
        margin-left: 60px;
        width: 276px;
    }
    :host .t-message__text {
        color: #444444;
    }
    :host .t-message__date {
        color: #666666;
        font-size: 12px;
    }
    :host [is-new="true"] {
        background-color: #F7FFFC;
    }
</style>
`,
  class extends Slim {
    get useShadow() { return true }

    onBeforeUpdate() {
      this.text = this.getAttribute('text');
      this.avatarUrl = this.getAttribute('avatar-url');
      this.date = this.getAttribute('date');
      this.isNew = this.getAttribute('is-new');
    }
  });

