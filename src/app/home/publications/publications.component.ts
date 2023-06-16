import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PDFProgressData, PDFDocumentProxy, PdfViewerComponent } from 'ng2-pdf-viewer';
import { AuthService } from '../../Services/auth.service';
import { DbService } from '../../Services/db.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';



@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  constructor(private elementRef: ElementRef, public authService: AuthService, private db:DbService, private storage:AngularFireStorage) { }


  public isLoggedIn = false;
  //public pdfSrc: string = '../../assets/CSR PDFs/CompaniesAct2013.pdf'; // set this to the URL of your PDF file
  public totalPages = 0;
  public currentPage = 1;
  public maxPages = 3
  pdfViewerDiv:any;
  user:any;
  uid: any;
  
  pdfsAnnual:any = [
    /*{
      pdfSrc: '../../assets/CSR PDFs/CompaniesAct2013.pdf',
      currentPage: 1
    },
    {
      pdfSrc: '../../assets/CSR PDFs/CompaniesAct2013.pdf',
      currentPage: 1
    },
    {
      pdfSrc: '../../assets/CSR PDFs/CompaniesAct2013.pdf',
      currentPage: 1
    }*/

  ]

  newsletter:any = [
  /*{
      pdfSrc: '../../assets/CSR PDFs/CompaniesAct2013.pdf',
      currentPage: 1
    },
    {
      pdfSrc: '../../assets/CSR PDFs/CompaniesAct2013.pdf',
      currentPage: 1
    },
    {
      pdfSrc: '../../assets/CSR PDFs/CompaniesAct2013.pdf',
      currentPage: 1
    }*/

  ]

  condenium:any = [
    /*{
      pdfSrc: '../../assets/CSR PDFs/CompaniesAct2013.pdf',
      currentPage: 1
    },
    {
      pdfSrc: '../../assets/CSR PDFs/CompaniesAct2013.pdf',
      currentPage: 1
    },
    {
      pdfSrc: '../../assets/CSR PDFs/CompaniesAct2013.pdf',
      currentPage: 1
    }*/

  ]

  hasMembership:any;

  BannerUrl:any;

  ngOnInit(): void {

    //this.pdfViewerDiv = document.querySelectorAll('.pdf-container');
    this.db.getBannersPublications().subscribe((data:any)=>{
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });

    //console.log(JSON.parse(localStorage.getItem('user')!));
    console.log(localStorage.getItem('user'))

    if(this.authService.userData){
      console.log('chala')
    let uid = JSON.parse(localStorage.getItem('user')!).uid;

    this.db.getUserByUid(uid).subscribe((data:any)=>{
      this.user = data;
      this.hasMembership = data[0].hasMembership;
    })
    }
      
    

    this.db.getAnnualReports().subscribe((data:any)=>{
      this.pdfsAnnual = data;
      this.pdfsAnnual.forEach((data:any)=>{
        data.currentPage = 1;
      })
      console.log(this.pdfsAnnual);

    })

    this.db.getNewsletters().subscribe((data:any)=>{
      this.newsletter = data;

      this.newsletter.forEach((data:any)=>{
        data.currentPage = 1;
      })
      console.log(this.newsletter);
    })

    this.db.getCompendium().subscribe((data:any)=>{
      this.condenium = data;
      this.condenium.forEach((data:any)=>{
        data.currentPage = 1;
      })
      console.log(this.condenium);
    })


    
    
    

    

    

  }

  onFileLoadComplete(pdf: PDFDocumentProxy): void {
    this.totalPages = pdf.numPages;
    this.pdfViewerDiv = document.querySelectorAll('.pdf-container');
  }

  onPageChange(event: any, source:any, index:any): void {
    console.log("page changes")
    source.currentPage = event?.pageNumber;
    console.log(source.currentPage)
    console.log(index)
    if (source.currentPage > 3 && !this.hasMembership) {
      // display a prompt to log in
      this.pdfViewerDiv[index].classList.add('blur')
      this.maxPages = 3;
    }
    else if (source.currentPage < 3) {
      // display a prompt to log in
      this.pdfViewerDiv[index].classList.remove('blur')
    }
  }

  

}
