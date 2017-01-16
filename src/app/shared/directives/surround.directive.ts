
import {Directive, TemplateRef, ViewContainerRef} from "@angular/core";
import {TemplatesService} from "../services/templates.service";
@Directive({
  selector: '[surround]'
})
export class SurroundDirective {
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef,
    private service: TemplatesService
  ){}

  ngAfterViewInit(){
      this.view.createEmbeddedView(this.service.templates.get('header'));
      this.view.createEmbeddedView(this.template);
      this.view.createEmbeddedView(this.service.templates.get('footer'));
  }
}
