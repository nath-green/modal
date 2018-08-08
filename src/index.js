import $ from 'jquery'
import { stateToggler } from 'state-toggler'

export class Modal {
  static init () {
    $('[modal-action]').click(function () {
      let action = $(this).attr('modal-action')
      // if target is not set on modal, get target from parent
      let target = $(this).attr('modal-target') || $(this).closest('.modal').attr('modal')
      Modal[action](target)
    })
  }

  static open (target) {
    $(`[modal="${target}"]`).attr('modal-state', 'open')
  }

  static close (target) {
    $(`[modal="${target}"]`).attr('modal-state', 'closed')
  }

  static closeAll () {
    $('[modal]').attr('modal-state', 'closed')
  }

  static toggle (target) {
    stateToggler(`[modal="${target}"]`, {attr: 'modal-state'})
  }
}
