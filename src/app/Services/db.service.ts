import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { collection } from '@angular/fire/firestore';
import { AuthService } from './auth.service'


@Injectable({
  providedIn: 'root'
})
export class DbService {

  banners:any;

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

  getInterns(){
    return this.firestore
    .collection("Interns")
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

  getHealthSlider(){
    return this.firestore
    .collection('HealthSlider')
    .valueChanges();
  }

  getHealthSlider2(){
    return this.firestore
    .collection('HealthSlider2')
    .valueChanges();
  }

  getHealthSlider3(){
    return this.firestore
    .collection('HealthSlider3')
    .valueChanges();
  }

  getHealthSlider4(){
    return this.firestore
    .collection('HealthSlider4')
    .valueChanges();
  }
  getNGOClinicSlider(){
    return this.firestore
    .collection('NGOClinicSlider')
    .valueChanges();
  }

  getUpcomingEventPic(){
    return this.firestore
    .collection('UpcomingEventPic')
    .valueChanges();
  }

  getBannersWhatWeDo(){
    return this.firestore
    .collection('MainBanners')
    .doc('WhatWeDo')
    .valueChanges();
  }

  getBannersPublications(){
    return this.firestore
    .collection('MainBanners')
    .doc('Publications')
    .valueChanges();
  }

  getBannersWhoWeAre(){
    return this.firestore
    .collection('MainBanners')
    .doc('WhoweAre')
    .valueChanges();
  }

  getBannersMrite(){
    return this.firestore
    .collection('MainBanners')
    .doc('Mrite')
    .valueChanges();
  }

  getBannersMembership(){
    return this.firestore
    .collection('MainBanners')
    .doc('Membership')
    .valueChanges();
  }

  getBannersISRNInitiatives(){
    return this.firestore
    .collection('MainBanners')
    .doc('ISRNInitiatives')
    .valueChanges();
  }

  getBannersGetInvolved(){
    return this.firestore
    .collection('MainBanners')
    .doc('GetInvolved')
    .valueChanges();
  }

  getBannersCovid19(){
    return this.firestore
    .collection('MainBanners')
    .doc('Covid19')
    .valueChanges();
  }

  getBannersContactUs(){
    return this.firestore
    .collection('MainBanners')
    .doc('ContactUs')
    .valueChanges();
  }

  getBannersCSR(){
    return this.firestore
    .collection('MainBanners')
    .doc('CSR')
    .valueChanges();
  }

  getBannersC20(){
    return this.firestore
    .collection('MainBanners')
    .doc('C20')
    .valueChanges();
  }

  getBannersBlogs(){
    return this.firestore
    .collection('MainBanners')
    .doc('Blogs')
    .valueChanges();
  }

  getBannersAntyodaya(){
    return this.firestore
    .collection('MainBanners')
    .doc('Antyodaya')
    .valueChanges();
  }

  getBannersDonate(){
    return this.firestore
    .collection('MainBanners')
    .doc('Donate')
    .valueChanges();
  }

  getBannersFPIPV(){
    return this.firestore
    .collection('MainBanners')
    .doc('FP-IPV')
    .valueChanges();
  }

  getPartners(){
    return this.firestore
    .collection('Partners')
    .valueChanges();
  }

  getFPIPVGallery(){
    return this.firestore
    .collection('FP-IPV Gallery')
    .valueChanges();
  }


  

}
