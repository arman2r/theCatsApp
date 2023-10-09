import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';
import { ICat, ICats } from 'src/app/models/Icat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-view-cats',
  templateUrl: './view-cats.component.html',
  styleUrls: ['./view-cats.component.scss'],
})
export class ViewCatsComponent implements OnInit {
  collectionCats: any = [];
  allCats: ICat[] = [];
  initCount = 1;
  descriptions: any;
  loadCats = false;
  isErrorCats = false;
  preloadQ = [1, 2, 3, 4, 5];

  constructor(private serviceCats: CatService) {}

  ngOnInit() {
    this.getAllCats(this.initCount);
  }

  getAllCats(count: Number) {
    const items = 10 * Number(count);
    console.log('result', items);
    this.loadCats = !this.loadCats;
    this.serviceCats.getAllCats(items).subscribe(
      (res: any) => {
        setTimeout(() => {
          this.collectionCats = res;
          this.loadCats = !this.loadCats;
        }, 1500);

        //this.allCats = this.collectionCats[0];
        console.log('que traeee', this.collectionCats);
      },
      (error) => {
        this.loadCats = !this.loadCats;
        this.isErrorCats = !this.isErrorCats;
      }
    );
  }

  onIonInfinite(ev: Event): void {
    const increment = ++this.initCount;
    this.getAllCats(increment);
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 1000);
  }
}
