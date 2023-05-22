import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { collection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private firestore: AngularFirestore) { }

  getGoverningBoard() {
    return this.firestore
      .collection('GoverningBoard')
      .valueChanges();
  }

  getAdvisoryBoard() {
    return this.firestore
      .collection('AdvisoryBoard')
      .valueChanges();
  }

  getMeetOurTeam() {
    return this.firestore
      .collection('MeetOurTeam')
      .valueChanges();
  }

  getTrainingPrograms() {
    return this.firestore
      .collection('TrainingPrograms')
      .valueChanges();
  }

  getAnnualReports() {
    return this.firestore
      .collection('Publications')
      .doc('07ius9PK8FdFOtmlfkOF')
      .collection('AnnualReports')
      .valueChanges()
  }

  getNewsletters() {
    return this.firestore
      .collection('Publications')
      .doc('07ius9PK8FdFOtmlfkOF')
      .collection('NewsLetters')
      .valueChanges()
  }

  getCompendium() {
    return this.firestore
      .collection('Publications')
      .doc('07ius9PK8FdFOtmlfkOF')
      .collection('Compendium')
      .valueChanges()
  }

  getAntyodayaBooks() {
    return this.firestore
      .collection('AntyodayaBooks')
      .valueChanges();
  }

  getMembersDirectory() {
    return this.firestore
      .collection('MembersDirectory')
      .valueChanges();
  }

  getCalenderEvents() {
    return this.firestore
      .collection('CalenderEvents')
      .valueChanges()
  }

  getStatesData(){
    return this.firestore
    .collection('MapStates')
    .valueChanges();
  }

  


}
