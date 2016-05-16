

import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: './app/viewcomponents/welcome.html'
})
export class AppComponent {
	charInput:string;
	message:string;
	blankspot:string;
	gameword: string;
	constructor() {
		this.gameword = ["hello,world", "apple", "banana","whatever"][Math.floor((Math.random() * 4))];
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
				this.message = "You got it"
		}
		else {
			this.message = "You didn't"
			}
		}
	}


