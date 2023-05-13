import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PDFProgressData, PDFDocumentProxy, PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }


  public isLoggedIn = false;
  //public pdfSrc: string = '../../assets/CSR PDFs/CompaniesAct2013.pdf'; // set this to the URL of your PDF file
  public totalPages = 0;
  public currentPage = 1;
  public maxPages = 3
  pdfViewerDiv:any;

  pdfsAnnual = [
    {
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
    }

  ]

  newsletter = [
    {
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
    }

  ]

  condenium = [
    {
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
    }

  ]

  ngOnInit(): void {

    //this.pdfViewerDiv = document.querySelectorAll('.pdf-container');

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
    if (source.currentPage > 3 && !this.isLoggedIn) {
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
