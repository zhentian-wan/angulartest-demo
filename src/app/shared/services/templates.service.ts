import {Injectable, TemplateRef} from "@angular/core";
@Injectable()
export class TemplatesService {
  templates = new Map<string, TemplateRef<any>>();
}

