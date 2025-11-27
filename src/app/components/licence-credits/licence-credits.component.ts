import { Component, OnInit } from "@angular/core";

interface ILicence {
  packages: string[];
  type: string;
  publisher: string;
  licence: string;
}
interface ILicences {
  licences: ILicence[];
}

@Component({
    selector: "app-licence-credits",
    templateUrl: "./licence-credits.component.html",
    styleUrls: ["./licence-credits.component.css"],
    standalone: false
})
export class LicenceCreditsComponent implements OnInit {
  public licences: ILicence[] = [];

  ngOnInit(): void {
    fetch("assets/licences.json", {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response: ILicences) => {
        if (!response.licences) {
          return;
        }
        for (let ix = 0; ix < response.licences.length; ix++) {
          this.licences.push(response.licences[ix]);
        }
      })
      .catch((err) => {
        console.error("Error!: ", err);
      });
  }
}
