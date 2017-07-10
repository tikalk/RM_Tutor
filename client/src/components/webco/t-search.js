Slim.tag('t-search',
    `<div>
<input  type="text"
        value="[[text]]" 
        placeholder="search ..."
        keydown="onKeyDown" />
<span class="icon"></span>
</div>
<style bind>
    :host div {
        height: 27px;
    }
    :host .icon {
        display: inline-block;
        width: 25px;
        height: 25px;
        background-size: cover;
        background-image: url('[[iconUrl]]');
        vertical-align: middle;
    }    
    :host input {
        height: 27px;
        width: calc(100% - 40px);
        border-radius: 4px;
        padding-left: 5px;
        outline: none;
        border: 1px solid #ddd;
    }
    
    :host input:focus {
        border-radius: 4px;
        border-color: #009cff;
    }
    
</style>
`,
    class extends Slim {
        get useShadow() {
            return true;
        }

        onBeforeUpdate() {
            this.iconUrl = this.getAttribute('icon-url');
            this.text = this.getAttribute('text') || ' ';

        }

        onKeyDown(e) {
            console.log(e)
            this.dispatchEvent(new CustomEvent('searchValueChanged', { 'value': this.text }));
        }

    });
