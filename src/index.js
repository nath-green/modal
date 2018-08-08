import $ from 'jquery'
import { stateToggler } from 'state-toggler'

const Modal = (function () {
  // Bind click on modal-action on import
  $('[modal-action]').click(function () {
    let action = $(this).attr('modal-action')
    // if target is not set on modal, get target from parent
    let target = $(this).attr('modal-target') || $(this).closest('.modal').attr('modal')
    Modal[action](target)
  })

  const open = target => {
    $(`[modal="${target}"]`).attr('modal-state', 'open')
  }

  const close = target => {
    $(`[modal="${target}"]`).attr('modal-state', 'closed')
  }

  const closeAll = () => {
    $('[modal]').attr('modal-state', 'closed')
  }

  const toggle = target => {
    stateToggler(`[modal="${target}"]`, {attr: 'modal-state'})
  }

  // Public API for modal actions not click bound
  return {
    open: open,
    close: close,
    closeAll: closeAll,
    toggle: toggle
  }
})()

module.exports = { Modal }
