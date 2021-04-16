import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SERVICES,ROUTES } from '../../app.constants';
import { Section } from '../../models/section.model';
import { AuthService } from '../../services/auth.service';
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
  private progressPercentage: number = 100;
  private chapterProgress: any

  constructor(private route: ActivatedRoute, private collectionService: CollectionService, private authService: AuthService, private router: Router) {
    this.sections = new Array<Section>();
  }

  ngOnInit(): void {
    this.idChapter = this.route.snapshot.paramMap.get('id');
    this.collectionService.getCollection(`${SERVICES.CHAPTERS}/${this.idChapter}/${SERVICES.SECTIONS}`).then((result)=>{
      result.forEach((doc: any) =>{
        this.sections.push({key: doc.id, ...doc.data()})
      })
      this.progressPercentage = this.progressPercentage / this.sections.length;
    });
    this.getChaptersByUser();
  }

  handlerActionSection(section, index){
    let localProgress = this.progressPercentage * (index+1);
    this.chapterProgress.progress = this.chapterProgress.progress > localProgress ? this.chapterProgress.progress : localProgress;
    this.sectionActiveIndex = index;
    if(this.chapterProgress.progress >= localProgress){
      this.collectionService.updateDocument(`${SERVICES.USERS}/${this.authService.currentUser.uid}/${SERVICES.CHAPTERS}/${this.idChapter}`,this.chapterProgress);
    }
  }

  async getChaptersByUser(){
    return await this.collectionService.getCollectionById(`${SERVICES.USERS}/${this.authService.currentUser.uid}/${SERVICES.CHAPTERS}/${this.idChapter}`).then((res)=>{
      if(res.exists)
        this.chapterProgress = res.data();
    })
  }


  goToActivity(){
    this.router.navigate([`${ROUTES.CHAPTER}/${this.idChapter}${ROUTES.ACTIVITY}/ACT001`])
  }

}
