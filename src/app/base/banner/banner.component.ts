import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BannerService } from '../../core/services/banner.service';
import { IBanner } from '../../core/models/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  constructor(private bannerService: BannerService) {}

  bannerSub!: Subscription;
  banner: IBanner | null = null;
  ngOnInit(): void {
    this.bannerSub = this.bannerService.banner$.subscribe({
      next: (resBanner: any) => {
        this.banner = resBanner;
        console.log(resBanner);
        console.log(this.banner);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  close() {
    this.bannerService.close();
  }

  ngOnDestroy(): void {
    this.bannerSub?.unsubscribe();
  }
}
