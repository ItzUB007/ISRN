import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PDFProgressData, PDFDocumentProxy, PdfViewerComponent } from 'ng2-pdf-viewer';
import { AuthService } from '../../Services/auth.service';
import { DbService } from '../../Services/db.service';


@Component({
  selector: 'app-annual-reports',
  templateUrl: './annual-reports.component.html',
  styleUrls: ['./annual-reports.component.scss']
})
export class AnnualReportsComponent implements OnInit {

  constructor(private elementRef: ElementRef, public authService: AuthService, private db:DbService) { }

  public isLoggedIn = false;
  //public pdfSrc: string = '../../assets/CSR PDFs/CompaniesAct2013.pdf'; // set this to the URL of your PDF file
  public totalPages = 0;
  public currentPage = 1;
  public maxPages = 3
  pdfViewerDiv:any;

  user:any;
  
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

  ngOnInit(): void {

    let uid = JSON.parse(localStorage.getItem('user')!).uid;

      this.db.getUserByUid(uid).subscribe(data=>{
        this.user = data;
      })

    this.db.getAnnualReports().subscribe((data:any)=>{
      this.pdfsAnnual = data;
      this.pdfsAnnual.forEach((data:any)=>{
        data.currentPage = 1;
      })
      console.log(this.pdfsAnnual);

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
    if (source.currentPage > 3 && !this.user[0].hasMembership) {
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
