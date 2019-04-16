import { Component, OnInit } from '@angular/core';
import { SkyObjectService } from '../SkyObjects.service';
import { ISkyPath2 } from '../SkyPaths2';
import { ActivatedRoute } from '@angular/router';
import { Storage} from '@ionic/storage';
import { ITelescope } from '../ITelescope';

@Component({
  selector: 'app-path-detail',
  templateUrl: './path-detail.page.html',
  styleUrls: ['./path-detail.page.scss'],
})
export class PathDetailPage implements OnInit {
  skyPaths2: ISkyPath2[] = [];
  selectedPath: ISkyPath2;
  telescopes: ITelescope[] = [];
  selectedTelescope: ITelescope;
  errorMessage: string;
  currentObject: number;
  currentObjectIndex: number = 0;
  RAHoursToNextObject: number;
  RAMinutesToNextObject: number;
  DecHoursToNextObject: number;
  DecMinutesToNextObject: number;
  
  
  constructor(private skyObjectService: SkyObjectService,
              private route: ActivatedRoute,
              private storage: Storage  ) { 
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    console.log("ngOnInit");

    // Or to get a key/value pair
  this.storage.get('Paths').then((val) => {
    console.log('Path ', val);
    this.skyPaths2 = val;
    this.selectedPath = this.skyPaths2.find(
                            z => z.SkyPathID == +this.route.snapshot.paramMap.get('id'));
    this.currentObject = this.selectedPath.SkyObjects[this.currentObjectIndex].ObjectID;
  });

  this.storage.get('Telescopes').then((val) => {
    console.log('Telescopes ', val);
    this.telescopes = val;
    this.selectedTelescope = this.telescopes.find(
                            z => z.TelescopeID == 2);
  });
// ID = 2 is the Celestron C4.5

    this.RAHoursToNextObject = 1;
    this.RAMinutesToNextObject = 2;

    this.DecHoursToNextObject = 15;
    this.DecMinutesToNextObject = 27;
  }

  button_click_Prev(){
    if(this.currentObjectIndex > 0){
      this.currentObjectIndex = this.currentObjectIndex - 1;
      this.currentObject = this.selectedPath.SkyObjects[this.currentObjectIndex].ObjectID;
    }
  }

  button_click_Next(){
    if (this.currentObjectIndex + 1 < this.selectedPath.SkyObjects.length){
      this.currentObjectIndex = this.currentObjectIndex + 1;
      this.currentObject = this.selectedPath.SkyObjects[this.currentObjectIndex].ObjectID;
    }
  }


}
