 import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[playerBorderCard]'
})
export class BorderCardDirective {

	constructor(private el : ElementRef) { 
		this.setHeight(180);
		this.setBorder('#f5f5f5')
	}

	@HostListener('mouseenter') onMouseEnter(){
		this.setBorder('009688');
	}

	@HostListener('mouseleave') onMouseLeave(){
		this.setBorder('f5f5f5');
	}

	setHeight(height: number){
		// On accede a l'element du dom sur lequel appliquer la directive et modifier le style
		this.el.nativeElement.style.height = `${height}px`;
	}
	setBorder(color:string){
		this.el.nativeElement.style.border = `solid 4px ${color}`;

	}
	
}
