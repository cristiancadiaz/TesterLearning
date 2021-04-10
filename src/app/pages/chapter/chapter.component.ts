import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SERVICES } from 'src/app/app.constants';
import { Section } from 'src/app/models/section.model';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  idChapter: string;
  public sections: Array<Section>;

  public sectionActiveIndex: number = 0;
  

  constructor(private route: ActivatedRoute, private collectionService: CollectionService) { 
    this.sections = new Array<Section>();
  }

  ngOnInit(): void {
    this.idChapter = this.route.snapshot.paramMap.get('id');

    this.collectionService.getCollection(`${SERVICES.CHAPTERS}/${this.idChapter}/${SERVICES.SECTIONS}`).subscribe((result)=>{
      result.forEach((chapterData: any) =>{
        this.sections.push({key: chapterData.payload.doc.id, ...chapterData.payload.doc.data()})
      })
      console.log('ngOnInit =>',this.sections);
    });
  }

  handlerActionSection(index){
    this.sectionActiveIndex = index;
  }
  

}
