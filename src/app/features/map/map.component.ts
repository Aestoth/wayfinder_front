import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  @ViewChild('canvas', {static: false}) public canvas!: ElementRef;
  @ViewChild('png', {static: false}) public imageObj!: ElementRef;

  public canvasEl:any
  public ctx!: CanvasRenderingContext2D;

  constructor( private api: ApiService) {
  }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.ctx = this.canvas.nativeElement.getContext('2d');
    
    
  }

 
  

}
