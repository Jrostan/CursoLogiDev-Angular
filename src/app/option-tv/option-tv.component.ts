import { Component, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import { ITv } from '../common/Models/tv.interface';
import { ColorsTv, ResolutionTv, SizaTv } from '../common/Models/tv.types';
import { CalculateService } from '../common/service/calculate.service';

@Component({
  selector: 'app-option-tv',
  templateUrl: './option-tv.component.html',
  styleUrls: ['./option-tv.component.css'],
  providers: [CalculateService]
})
export class OptionTvComponent implements OnInit {
  colors: ColorsTv[] = ['#f44336', '#e91e63', '#9c27b0'];
	sizes: SizaTv[] = ['10 pulgadas', '19 pulgadas', '24 pulgadas', '32 pulgadas', '40 pulgadas'];
	resolutions: ResolutionTv[] = ['4K ULTRA HD', 'HD', 'FULL HD', '8K'];
	optionsTv: ITv = <ITv>{};
  status = true
  constructor(
    private calculateService : CalculateService
  ) { }

  ngOnInit(): void {
  }

  handleChangeComplete(event: ColorEvent): void {
		console.log(event);
	}

  changeTamanio(): void {
    this.sendOptionTv()
	}

	changeResolution(): void {
    this.sendOptionTv()
	}

  private sendOptionTv():void{
    this.calculateService.setPropieties(this.optionsTv)
  }
}
