import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[highlightDirective]',
    host: {
        '(mouseenter)': 'onMouseOver()',
        '(mouseleave)': 'onMouseLeave()'
    }
})

export class HighLightDirective {

    element!: HTMLElement;

    constructor(private elementRef: ElementRef){
        this.element = elementRef.nativeElement;
    }

    onMouseOver(){
        this.element.style.backgroundColor = "Yellow";
        this.element.style.fontWeight = "bold";
        this.element.style.fontSize = '40px';
        this.element.style.fontStyle = "italic";
    }

    onMouseLeave(){
        this.element.style.backgroundColor = 'green';
        this.element.style.fontWeight = "normal";
        this.element.style.fontSize = '20px';
        this.element.style.fontStyle = "normal";
    }
} 