import { Component } from "@angular/core";
import   template    from "./template.html"

var TextFieldComponent = Component({
  selector: "shine-text-field",
  template: template,
  inputs: [
    "object",
    "field_name",
    "label",
    "pattern",
    "compact",
    "addon"
  ]
}).Class({
  constructor: [
    function() {
      this.object     = null;
      this.field_name = null;
      this.label      = null;
      this.pattern    = null;
      this.compact    = null;
      this.addon      = null;
    }
  ],
  modelValid: function(model) {
    return !(model.invalid && model.dirty);
  },
  validationPattern: function() {
    if (this.pattern) {
      return this.pattern;
    }
    else {
      return "^.*$";
    }
  },
});
export { TextFieldComponent };
