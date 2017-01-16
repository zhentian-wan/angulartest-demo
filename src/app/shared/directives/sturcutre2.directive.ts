import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
@Directive({
  selector: '[three]'
})
export class ThreeDirective {
  @Input() set threeFrom({one, two, three}) {
    let num = 3;

    this.view.createEmbeddedView(this.template, {
      $implicit: {
        to: "People" + Math.random(),
        message: two
      }
    });

    this.view.createEmbeddedView(this.template, {
      $implicit: {
        to: "People" + Math.random(),
        message: three
      }
    });

    this.view.createEmbeddedView(this.template, {
      $implicit: {
        to: "People" + Math.random(),
        message: one
      }
    });
  }

  constructor(private template: TemplateRef<any>, private view: ViewContainerRef) {

  }
}
