import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit {

    // special;

    constructor(private elRef: ElementRef) {

        // ---------background-green------
        elRef.nativeElement.style.background = 'green';
        console.log(elRef.nativeElement);
    }
    ngOnInit(): void {

    }

}