import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent implements OnInit, OnChanges  {
  @Input() element: { type: string; name: string; content: string };
  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChange ");
  }
}
