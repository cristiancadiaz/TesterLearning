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
  public Sections: Array<Sections>;

  constructor(private route: ActivatedRoute, private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.idChapter = this.route.snapshot.paramMap.get('id');

    this.collectionService.getCollectionById(SERVICES.SECTIONS,"001").subscribe((result) =>{
      console.log('result =>', result);
      })
  }

}
