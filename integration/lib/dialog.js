function Dialog(element) {
  this.element = element;
}

Dialog.prototype = {
  selectors: Object.freeze({
    text: 'p.text'
  }),

  /**
   * @return {String} text content of the dialog.
   */
  text: function() {
    return this.element.findElement(this.selectors.text).text();
  }
};

module.exports = Dialog;
