import { Component, OnInit } from '@angular/core';
//import * as pdfjs from 'pdfjs-dist';


@Component({
  selector: 'app-csr',
  templateUrl: './csr.component.html',
  styleUrls: ['./csr.component.scss']
})
export class CsrComponent implements OnInit {

  imagedata: any;
  constructor() { }

  /*convertPdfToImg(url: any) {
    pdfjs.getDocument(url).promise.then((pdf) => {
      // Display the first page of the PDF document as an image

      pdf.getPage(1).then((page) => {
        // Display the first page of the PDF document as an image

        const canvas = document.createElement('canvas');
        let context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;

        if (typeof OffscreenCanvas !== 'undefined') {
          const offscreenCanvas = new OffscreenCanvas(0, 0);
          context = offscreenCanvas.getContext('2d');
        } else {
          context = canvas.getContext('2d');
        }
        if (context) {
          const viewport = page.getViewport({ scale: 1 });
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          page.render({ canvasContext: context, viewport: viewport }).promise.then(() => {
            const imageData = (canvas as HTMLCanvasElement).toDataURL();
            // Display the imageData as an image in your Angular template
          });
        } else {
          console.error('Could not get 2D context for canvas.');
        }

      });



    });
  }*/


  ngOnInit(): void {

    //this.convertPdfToImg('../../assets/CSR PDFs/CompaniesAct2013.pdf')


  }

}
