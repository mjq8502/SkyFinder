import { Component, OnInit } from '@angular/core';
import { SkyObjectService } from '../SkyObjects.service';
import { ISkyPath2 } from '../SkyPaths2';
import { ActivatedRoute } from '@angular/router';
import { Storage} from '@ionic/storage';
import { ITelescope } from '../ITelescope';
import { ISkyObject } from '../SkyObjects';
import { async } from '@angular/core/testing';

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

  tempHours: number;
  tempMin: number;
  RADirection: string;
  DecDirection: string;
  reachedFinalObject: boolean = false;
  RAString: string;
  DecString: string;
 
  
  constructor(private skyObjectService: SkyObjectService,
              private route: ActivatedRoute,
              private storage: Storage  ) { 
    console.log('id param: ' + this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.getScopes();
    // Or to get a key/value pair
    this.storage.get('Paths').then((val) => {
      console.log('Path ', val);
      this.skyPaths2 = val;
      this.selectedPath = this.skyPaths2.find(
                              z => z.SkyPathID == +this.route.snapshot.paramMap.get('id'));
      this.currentObject = this.selectedPath.SkyObjects[this.currentObjectIndex];
      

      if (this.selectedPath.SkyObjects.length > 1){  // Make sure there are at least 2 objects
        console.log('Hey 3');
        var nextObject = this.selectedPath.SkyObjects[this.currentObjectIndex + 1];
  
        var RATotalSecondsOfNext = (nextObject.RA_Hour * 60 * 60) + (nextObject.RA_Min * 60) + nextObject.RA_Sec;
        var RATotalSecondsOfCurrent = (this.currentObject.RA_Hour * 60 * 60) + (this.currentObject.RA_Min * 60) + this.currentObject.RA_Sec;

        console.log('going to convert RA');
        this.ConvertToHHMM(RATotalSecondsOfNext, RATotalSecondsOfCurrent, this.selectedTelescope.RA_SecondsPerTurn);
        this.RAHoursToNextObject = this.tempHours;
        this.RAMinutesToNextObject = this.tempMin;
        if((RATotalSecondsOfNext - RATotalSecondsOfCurrent) > 0)
        {
          this.RADirection = 'CW';
        }
        else
        {
          this.RADirection = 'CCW';
        }

        this.RAString = this.HHMM_Display_String(this.tempHours, this.tempMin);

        
        console.log('going to convert Dec');

        var DecTotalSecondsOfNext = (nextObject.Decl_Hour * 60 * 60) + (nextObject.Decl_Min * 60) + nextObject.Decl_Sec;
        var DecTotalSecondsOfCurrent = (this.currentObject.Decl_Hour * 60 * 60) + (this.currentObject.Decl_Min * 60) + this.currentObject.Decl_Sec;

        this.ConvertToHHMM(DecTotalSecondsOfNext, DecTotalSecondsOfCurrent, this.selectedTelescope.Decl_SecondsPerTurn);
        this.DecHoursToNextObject = this.tempHours;
        this.DecMinutesToNextObject = this.tempMin;

        if((DecTotalSecondsOfNext - DecTotalSecondsOfCurrent) > 0)
        {
          this.DecDirection = 'North';
        }
        else
        {
          this.DecDirection = 'South';
        }

      }

      this.DecString = this.HHMM_Display_String(this.tempHours, this.tempMin);

    });
    this.reachedFinalObject = false;
    console.log('The end');
  }

  async getScopes() {
    let value = await this.storage.get('Telescopes');
    console.log('async Telescopes ', value);
    this.telescopes = value;
    // ID = 2 is the Celestron C4.5
    this.selectedTelescope = this.telescopes.find(z => z.TelescopeID == 2);
  }

  ConvertToHHMM(TotalSecondsOfNext: number, TotalSecondsOfCurrent: number, SecondsPerTurn: number){
    console.log('ConvertToHHMM');
    var a = (TotalSecondsOfNext - TotalSecondsOfCurrent);
    console.log('a ' + a);
    var b = a/SecondsPerTurn;
    console.log('b ' + b);

    this.tempHours = Math.abs(Math.trunc(b));

    var c = b - (Math.trunc(b));
    console.log('c ' + c);
    var d = Math.round(c*60);
    console.log('d ' + d);
    
    this.tempMin = Math.abs(d);

    console.log('H ' + this.tempHours + '  M ' + this.tempMin);

  
  }

  HHMM_Display_String(tempHours: number, tempMin: number):string {
    var x = (this.tempHours*3600) + (this.tempMin * 60);
    var date = new Date(null);
    date.setSeconds(x); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 8);
    console.log('timestring ' + timeString);
    return timeString;
  }


  button_click_Prev(){
    if(this.currentObjectIndex > 0){
      this.currentObjectIndex = this.currentObjectIndex - 1;
      this.currentObject = this.selectedPath.SkyObjects[this.currentObjectIndex];
      this.reachedFinalObject = false;
    }
  }

  button_click_Next(){
    if (this.currentObjectIndex + 1 < this.selectedPath.SkyObjects.length)
    {
      this.currentObjectIndex = this.currentObjectIndex + 1;
      this.currentObject = this.selectedPath.SkyObjects[this.currentObjectIndex];

      if(this.currentObjectIndex + 1 == this.selectedPath.SkyObjects.length)
      {
        this.reachedFinalObject = true;
      }
    }
  }


}

