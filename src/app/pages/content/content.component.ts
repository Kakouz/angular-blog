import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from 'src/app/data/fake-data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = "0";

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit():void {
    this.route.paramMap.subscribe( value => this.id = value.get('id'))
    this.setValuesToContent(this.id);
  }

  setValuesToContent(id:string | null) {

    if(id == null) {
      return;
    }

    const result = fakeData.filter(article => article.id.toString() == id)
    if(!result) {
      return;
    }

    this.photoCover = result[0].image;
    this.contentTitle = result[0].title;
    this.contentDescription = result[0].description;
  }
}
