import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ICat } from 'src/app/models/Icat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  implements OnInit {

  @Input() dataCat?: ICat;
  properties: any;
  loadProperties = false
  isError = false;

  constructor(private serviceCats: CatService) {
  }

  ngOnInit() {}

  getImageItem(referen_id: string): void {
    console.log('entrooo')
    this.loadProperties = !this.loadProperties
    this.serviceCats.getImageById(referen_id).subscribe((res: any) => {
      console.log('propiedades', res)
      setTimeout(() => {
        this.properties = res
        this.loadProperties = !this.loadProperties
      }, 1000);

    }, error => {
      this.loadProperties = !this.loadProperties
      this.properties = null
      this.isError = !this.isError
    })
  }





}
