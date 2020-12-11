import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  itens: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.itens = firestore.collection('itens').valueChanges();
  }
}