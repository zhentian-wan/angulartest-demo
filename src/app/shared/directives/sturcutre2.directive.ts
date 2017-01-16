import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
@Directive({
  selector: '[three]'
})
export class ThreeDirective {
  @Input() set three(value) {
    let num = 3;

    while (num--) {
      const message = {
        to: "People" + Math.random(),
        message: "Hello" + Math.random()
      };
      this.view.createEmbeddedView(this.template, {
        $implicit: message
      })
    }
  }

  constructor(private template: TemplateRef<any>, private view: ViewContainerRef) {

  }
}
