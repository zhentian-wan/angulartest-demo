
import {Component, ViewChild} from "@angular/core";
import {TemplatesService} from "./shared/services/templates.service";
@Component({
  selector: 'template-storage',
  template: `
    <template #header>
        <h1>This is header</h1>
    </template>
    <template #footer>
      <h1>This is the footer</h1>
    </template>
  `
})
export class TemplateStorageComponent {
  @ViewChild('header') headerTemplate;
  @ViewChild('footer') footerTemplate;
  constructor(private service: TemplatesService){

  }

  ngAfterViewInit() {
    this.service.templates.set('header', this.headerTemplate);
    this.service.templates.set('footer', this.footerTemplate);
  }
}
