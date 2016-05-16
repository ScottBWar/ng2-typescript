import { Injectable } from '@angular/core';

import { INFO } from './mock_info';

@Injectable()
export class InfoService{
	getInfo(){
		return INFO;

	}
}