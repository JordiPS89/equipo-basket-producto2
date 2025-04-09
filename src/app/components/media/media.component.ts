import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  @Input() videoUrl: string = '';

  get isYoutube(): boolean {
    return this.videoUrl.includes('youtube.com') || this.videoUrl.includes('youtu.be');
  }

  get embedUrl(): string {
    let videoId = '';

    if (this.videoUrl.includes('youtube.com')) {
      const urlParams = new URL(this.videoUrl).searchParams;
      videoId = urlParams.get('v') || '';
    } else if (this.videoUrl.includes('youtu.be')) {
      videoId = this.videoUrl.split('youtu.be/')[1];
    }

    return `https://www.youtube.com/embed/${videoId}`;
  }
}

