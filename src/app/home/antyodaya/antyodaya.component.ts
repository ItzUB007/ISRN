import { Component, OnInit } from '@angular/core';
import { PDFProgressData, PDFDocumentProxy, PdfViewerComponent } from 'ng2-pdf-viewer';
import { AuthService } from '../../Services/auth.service';
import { DbService } from '../../Services/db.service';


@Component({
  selector: 'app-antyodaya',
  templateUrl: './antyodaya.component.html',
  styleUrls: ['./antyodaya.component.scss']
})
export class AntyodayaComponent implements OnInit {

  public isLoggedIn = false;
  //public pdfSrc: string = '../../assets/CSR PDFs/CompaniesAct2013.pdf'; // set this to the URL of your PDF file
  public totalPages = 0;
  public currentPage = 1;
  public maxPages = 3
  pdfViewerDiv:any;
  antyodayaBooks:any;

  constructor(public authService: AuthService, private db:DbService) { }

  
  BannerUrl:any;

  ngOnInit(): void {

    this.db.getAntyodayaBooks().subscribe((data)=>{
      this.antyodayaBooks = data;
      this.antyodayaBooks.forEach((data:any)=>{
        data.currentPage = 1;
      })
      console.log(this.antyodayaBooks);

    })

    this.db.getBannersAntyodaya().subscribe((data: any) => {
      this.BannerUrl = data.ImageUrl;
      console.log(data)
    });

    


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
    if (source.currentPage > 3 && !this.authService.isLoggedIn) {
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
