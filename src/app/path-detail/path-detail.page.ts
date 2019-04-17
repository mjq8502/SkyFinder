import { Component, OnInit } from '@angular/core';
import { SkyObjectService } from '../SkyObjects.service';
import { ISkyPath2 } from '../SkyPaths2';
import { ActivatedRoute } from '@angular/router';
import { Storage} from '@ionic/storage';
import { ITelescope } from '../ITelescope';
import { ISkyObject } from '../SkyObjects';

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
  currentObject: ISkyObject;
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
      this.currentObject = this.selectedPath.SkyObjects[this.currentObjectIndex];
      this.storage.get('Telescopes').then((val) => {
        console.log('Telescopes ', val);
        this.telescopes = val;
        this.selectedTelescope = this.telescopes.find(z => z.TelescopeID == 2);
      });
      // ID = 2 is the Celestron C4.5

      if (this.selectedPath.SkyObjects.length > 1){  // Make sure there are at least 2 objects
        console.log('Hey 3');
        var nextObject = this.selectedPath.SkyObjects[this.currentObjectIndex + 1];
  
        var RATotalSecondsOfNext = (nextObject.RA_Hour * 60 * 60) + (nextObject.RA_Min * 60) + nextObject.RA_Sec;
        var RATotalSecondsOfCurrent = (this.currentObject.RA_Hour * 60 * 60) + (this.currentObject.RA_Min * 60) + this.currentObject.RA_Sec;
  
        console.log(RATotalSecondsOfNext);
        console.log(RATotalSecondsOfCurrent);
        //console.log(this.selectedTelescope.RA_SecondsPerTurn);
  
        this.RAHoursToNextObject = Math.trunc((RATotalSecondsOfNext - RATotalSecondsOfCurrent)/600);
        var a = (RATotalSecondsOfNext - RATotalSecondsOfCurrent);
        console.log('a ' + a);
        var b = a/600;
        console.log('b ' + b);
        var c = b - (Math.trunc(b));
        console.log('c ' + c);
        var d = Math.round(c*60);
        console.log('d ' + d);
        
        this.RAMinutesToNextObject = d;
        
        
        console.log(this.RAHoursToNextObject);
        console.log(this.RAMinutesToNextObject);
  
        this.DecHoursToNextObject = 15;
        this.DecMinutesToNextObject = 27;
      }
    });

    // this.storage.get('Telescopes').then((val) => {
    //   console.log('Telescopes ', val);
    //   this.telescopes = val;
    //   this.selectedTelescope = this.telescopes.find(z => z.TelescopeID == 2);
    // });
    // // ID = 2 is the Celestron C4.5
    // console.log('Hey 2');
    // console.log(this.selectedPath.SkyObjects.length)
    // if (this.selectedPath.SkyObjects.length > 1){  // Make sure there are at least 2 objects
    //   console.log('Hey 3');
    //   var nextObject = this.selectedPath.SkyObjects[this.currentObjectIndex + 1];

    //   var RATotalSecondsOfNext = (nextObject.RA_Hour * 60 * 60) + (nextObject.RA_Min * 60) + nextObject.RA_Sec;
    //   var RATotalSecondsOfCurrent = (this.currentObject.RA_Hour * 60 * 60) + (this.currentObject.RA_Min * 60) + this.currentObject.RA_Sec;

    //   console.log(RATotalSecondsOfNext);
    //   console.log(RATotalSecondsOfCurrent);

    //   this.RAHoursToNextObject = Math.trunc((RATotalSecondsOfNext - RATotalSecondsOfCurrent)/60);
    //   this.RAMinutesToNextObject = Math.trunc(((RATotalSecondsOfNext - RATotalSecondsOfCurrent)%60)*60);
    //   console.log(this.RAHoursToNextObject);
    //   console.log(this.RAMinutesToNextObject);

    //   this.DecHoursToNextObject = 15;
    //   this.DecMinutesToNextObject = 27;
    // }
  }

  button_click_Prev(){
    if(this.currentObjectIndex > 0){
      this.currentObjectIndex = this.currentObjectIndex - 1;
      this.currentObject = this.selectedPath.SkyObjects[this.currentObjectIndex];
    }
  }

  button_click_Next(){
    if (this.currentObjectIndex + 1 < this.selectedPath.SkyObjects.length){
      this.currentObjectIndex = this.currentObjectIndex + 1;
      this.currentObject = this.selectedPath.SkyObjects[this.currentObjectIndex];
    }
  }


}
