import { Component, OnInit } from '@angular/core';
import { SkyObjectService } from "../SkyObjects.service";
import { ISkyObject } from '../SkyObjects';


@Component({
  selector: 'app-sky-objects',
  templateUrl: './sky-objects.page.html',
  styleUrls: ['./sky-objects.page.scss'],
})

export class SkyObjectsPage implements OnInit {
  skyObjects: ISkyObject[] = [];
  errorMessage: string;

  constructor(private skyObjectService: SkyObjectService) { 

  }

  ngOnInit(): void {
    this.skyObjectService.getSkyObjects().subscribe(
      skyObjects => this.skyObjects = skyObjects,
      error => this.errorMessage = <any>error
    )


  }

}
