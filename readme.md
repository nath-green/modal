## Modali

Import the modal library with `import { Modal } from '@nath-green/modal'`. Once imported `Modal` click handlers will be initialised on all elements that have a `[modal-action]` data attribute.

### JS guide

Modals can be triggered with functions as well as being bound to HTML trigger elements.

Call one of the following functions passing the `modal-target` id as a parameter:

* `Modal.open('info')`
* `Modal.close('info')`
* `Modal.toggle('info')`

### HTML guide

#### Trigger markup

An element which triggers the opening, closing or toggling of a modal. This element needs both a `modal-action` and `modal-target` data attributes.

```
<button class="btn" modal-target="info" modal-action="open">Open modal</button>
```

Trigger options:
* open
* close
* toggle

#### Modal markup

The modal itself needs a `modal` data attribute - this works as the unique identifier for the modal.

By default the modal should have `modal-state="closed"`, this is what hides the modal. When the `modal-state` is changed to `open` this begins the animation of opening the modal.

If a close button is nested within the modal markup it does not need a `modal-target` data attribute only a `modal-action`. The `modal-target` will be the current modal parent if not specified otherwise.

```
<div class="modal" modal="info" modal-state="closed">
    <div class="modal__inner">
        <h1>New modal in town</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit commodo, nibh pharetra posuere cras congue risus litora scelerisque, ad fames ante duis magna nostra diam. Morbi mi malesuada commodo purus senectus sapien hendrerit, ullamcorper parturient magna viverra pharetra cubilia.</p>
        <button class="btn" modal-action="close">Cheers!</button>
    </div>
</div>
```