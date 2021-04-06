import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SERVICES } from 'src/app/app.constants';
import { Sections } from 'src/app/models/sections.model';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  idChapter: string;
  public sections: Array<Sections>;
  

  constructor(private route: ActivatedRoute, private collectionService: CollectionService) { 
    this.sections = new Array<Sections>();
  }

  ngOnInit(): void {
    this.idChapter = this.route.snapshot.paramMap.get('id');

    this.collectionService.getCollectionById(SERVICES.SECTIONS,"001").subscribe((result) =>{
      this.sections.push(...result['contentList'])
      console.log(this.sections);     
      })
  }

  

}
