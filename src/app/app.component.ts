import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userData = {
    email: "jeet@gmail.com"
  };
  name = "Angular " + VERSION.major;
  onSubmit(data) {
    console.log(data);
  }
}
