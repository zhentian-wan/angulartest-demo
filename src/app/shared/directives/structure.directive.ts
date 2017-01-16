import {Directive, TemplateRef, ElementRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[structure]'
})
export class StructureDirective {

  @Input('structure') num;
  @Input() set three(value) {
    this.view.createEmbeddedView(this.template, {
      $implicit: 'Awesome'
    })
  }

  constructor(private template: TemplateRef<any>,
              private view: ViewContainerRef) {
  }

  ngAfterContentInit() {

    let num: number = Number(this.num);
    if (num > 0) {
      while (num --){
        this.view.createEmbeddedView(this.template, {
          $implicit: 'Good'
        });
      }
    }

  }
}
