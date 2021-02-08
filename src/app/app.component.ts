import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "";
  titleState: boolean = true;

  constructor() {
    this.title = "WT1961 Proj 01";
  }

  titleClick() {
    this.title = this.titleState ? "No need to click this" : "WT1961 Proj 01";
    this.titleState = !this.titleState;
  }
}
