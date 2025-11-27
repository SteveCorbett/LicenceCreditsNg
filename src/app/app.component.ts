import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `
  <div class="licenceCredits">
    <app-licence-credits />
  </div>
  `,
    styleUrls: ["./app.component.css"],
    standalone: false
})
export class AppComponent {}
