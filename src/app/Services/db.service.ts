import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { collection } from '@angular/fire/firestore';
import { AuthService } from './auth.service'


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

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

  getUserByUid(uid:any){
    return this.firestore
    .collection('users', ref => ref.where('uid', '==', uid).limit(1))
    .valueChanges();
  }


  getHomePageSlideshow(){
    return this.firestore
    .collection('HomePageSlideshow')
    .valueChanges()
  }
  
  getBlogsById(blogId:any){
    return this.firestore
    .collection('blogs')
    .doc(blogId)
    .valueChanges()
  }

  getBlogs(){
    return this.firestore
    .collection('blogs')
    .valueChanges({ idField: 'id' })
  }

  getRollingNumbers(){
    return this.firestore
    .collection('RollingNumbers')
    .valueChanges();
  }

  getC20Slider(){
    return this.firestore
    .collection('C20Slider')
    .valueChanges();
  }


  getAgricultureSlider1(){
    return this.firestore
    .collection('AgricultureSlider1')
    .valueChanges();
  }

  getAgricultureSlider2(){
    return this.firestore
    .collection('AgricultureSlider2')
    .valueChanges();
  }

}
