import { Component, OnInit } from '@angular/core';
import { SkyObjectService } from '../SkyObjects.service';
import { ISkyPath2 } from '../SkyPaths2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-path-detail',
  templateUrl: './path-detail.page.html',
  styleUrls: ['./path-detail.page.scss'],
})
export class PathDetailPage implements OnInit {
  skyPaths2: ISkyPath2[] = [];
  selectedPath: ISkyPath2;
  errorMessage: string;
  
  constructor(private skyObjectService: SkyObjectService,
              private route: ActivatedRoute  ) { 
                console.log(this.route.snapshot.paramMap.get('id'));
              }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.skyObjectService.getSkyPaths2().subscribe(
      skyPaths2 => {
        this.skyPaths2 = skyPaths2;
        this.selectedPath = this.skyPaths2.find(
          z => z.SkyPathID == +this.route.snapshot.paramMap.get('id'));
      },
      error => this.errorMessage = <any>error
    );
  }



}
