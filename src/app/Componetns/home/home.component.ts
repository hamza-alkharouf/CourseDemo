import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  storeInfo:StoreData;
  isImageShown:boolean=true

  constructor() {
    this.storeInfo = new StoreData('test','https://picsum.photos/400/300',['Cairo','Alex','Qena'])
   }

  ngOnInit(): void {
  }
  isImageImage(){
    this.isImageShown=!this.isImageShown
  }

}
