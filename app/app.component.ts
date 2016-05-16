

import { Component } from '@angular/core';

import { InfoService } from './info.service';


@Component({
	selector: 'my-app',
	templateUrl: './app/viewcomponents/welcome.html',
	styleUrls: ['./app/viewcomponents/app.component.css'],
	providers: [InfoService]
})
export class AppComponent {
	INFO: any[];
	charInput:string;
	message:string;
	blankspot:string;
	gameword: string;
	constructor(private infoService: InfoService) {
		this.INFO = infoService.getInfo();
		this.gameword = this.INFO[Math.floor((Math.random() * this.INFO.length))].state;
		this.blankspot = "";
		for (let i = 0; i < this.gameword.length;i++){
			this.blankspot += "-";
		}
	}
	logSomething(){
		console.log(this.gameword)
		if (this.gameword.indexOf(this.charInput) > -1) {
			for (let i: number = 0; i < this.blankspot.length; i++) {
				if (this.gameword[i] == this.charInput) {
					this.blankspot = this.blankspot.substr(0, i) + this.charInput + this.blankspot.substr(i + 1);
				}
			}
			this.message = "You got it";
		}
		else {
			this.message = "You didn't";
			}
		}
	}


