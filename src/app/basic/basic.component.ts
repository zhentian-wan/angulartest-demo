import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  @ViewChild("foo") template;

  constructor(private vcr: ViewContainerRef) {

  }

  ngAfterContentInit() {
     this.vcr.createEmbeddedView(this.template);
     this.vcr.createEmbeddedView(this.template);
     this.vcr.createEmbeddedView(this.template);
     this.vcr.createEmbeddedView(this.template);
  }

  ngOnInit() {
  }

}
