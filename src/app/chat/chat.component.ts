import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Item { name: string; }

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) 
  {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();

    console.log(this.itemsCollection);
  }

  ngOnInit() {
    this.itemsCollection = this.afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  newMessage(message: string) 
  {

    var msg: Item = { name: message } ;
    this.itemsCollection.add(msg);
  }
}
