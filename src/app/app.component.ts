import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  highScores$: Observable<any[]>;

  title = 'memory-game-high-scores-list';

  constructor(_fireAuth: AngularFireAuth,  _firestore: AngularFirestore) {
    _fireAuth.auth.signInAnonymously().catch((err) => console.error(err));
    
    this.highScores$ = _firestore.collection('high-scores').valueChanges();
  }
}
