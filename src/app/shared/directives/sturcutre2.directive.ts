import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
@Directive({
  selector: '[three]'
})
export class ThreeDirective {
  @Input() set three(value) {
    let num = 3;
    while (num--) {
      this.view.createEmbeddedView(this.template, {
        $implicit: 'Awesome'
      })
    }
  }

  constructor(private template: TemplateRef<any>, private view: ViewContainerRef) {

  }
}
