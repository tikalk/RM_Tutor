declare var Slim;

Slim.tag('t-stars',
`
<ul class="rating">
  <li id="1" class="star" click="handleClick">&star;</li>
  <li id="2" class="star" click="handleClick">&star;</li>
  <li id="3" class="star" click="handleClick">&star;</li>
  <li id="4" class="star" click="handleClick">&star;</li>
  <li id="5" class="star" click="handleClick">&star;</li>
</ul>
<style>
    li {
  cursor: default;
  display: inline-block;
  font-size: 100px;
  list-style-type: none;
}


.star {
  color: black;
}

.star.selected{
  color: red;
}

</style>
    `
,class extends Slim {

    get UseShadow() { return true; }

    static get observedAttributes() {
        return ['value'];
    }

    onBeforeUpdate() {
        this.value = this.getAttribute('value');
        this.colorStars(parseInt(this.value));

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'value') {
            this.colorStars(newValue);
        }
    }
    handleClick(e) {

        let id = parseInt(e.target.id);
        this.dispatchEvent(new CustomEvent('valueChanged', { 'detail': {
            'oldVal': parseInt(this.value),
            'newVal': id
            }
        }));


    }

    colorStars(id) {
        const selectedCssClass = 'selected';

        this.findAll('li').forEach(li => {
            if (parseInt(li.id) <= id) li.classList.add(selectedCssClass);
            else li.classList.remove(selectedCssClass);
        });
    }
});