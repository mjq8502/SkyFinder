import { Component, OnInit } from '@angular/core';
import { ISkyPath } from '../SkyPath';
import { SkyObjectService } from '../SkyObjects.service';
import { ISkyPath2 } from '../SkyPaths2';
import { Storage} from '@ionic/storage';
import { ITelescope } from '../ITelescope';

@Component({
  selector: 'app-paths',
  templateUrl: './paths.page.html',
  styleUrls: ['./paths.page.scss'],
})
export class PathsPage implements OnInit {
  skyPaths2: ISkyPath2[] = [];
  telescopes: ITelescope[] = [];
  errorMessage: string;

  constructor(private skyObjectService: SkyObjectService,
              private storage: Storage) { 

  }

  ngOnInit(): void {
    this.skyObjectService.getSkyPaths2().subscribe(
      skyPaths2 => {
        this.skyPaths2 = skyPaths2;
        this.storage.set('Paths', this.skyPaths2);
      },
      error => this.errorMessage = <any>error
    );
    this.skyObjectService.getTelescopes().subscribe(
      telescopes => {
        this.telescopes = telescopes;
        this.storage.set('Telescopes', this.telescopes);
      },
      error => this.errorMessage = <any>error
    );



  }
  

}
