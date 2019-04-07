import { Component, OnInit } from '@angular/core';
import { ISkyPath } from '../SkyPath';
import { SkyObjectService } from '../SkyObjects.service';
import { ISkyPath2 } from '../SkyPaths2';

@Component({
  selector: 'app-paths',
  templateUrl: './paths.page.html',
  styleUrls: ['./paths.page.scss'],
})
export class PathsPage implements OnInit {
  skyPaths2: ISkyPath2[] = [];
  errorMessage: string;

  constructor(private skyObjectService: SkyObjectService) { 

  }

  ngOnInit(): void {
    this.skyObjectService.getSkyPaths2().subscribe(
      skyPaths2 => this.skyPaths2 = skyPaths2,
      error => this.errorMessage = <any>error
    )

  }
  

}
