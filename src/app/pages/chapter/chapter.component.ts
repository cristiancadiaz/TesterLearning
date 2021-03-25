import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from '../../services/collection.service';

@Component({
  selector: 'chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  idChapter: string;

  constructor(private route: ActivatedRoute, private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.idChapter = this.route.snapshot.paramMap.get('id');
  }

}
