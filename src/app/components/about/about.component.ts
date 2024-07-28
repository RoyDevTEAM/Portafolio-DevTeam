import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isVisible = {
    mission: false,
    history: false,
    leaders: false
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;

    const missionElement = document.getElementById('mission');
    const historyElement = document.getElementById('history');
    const leadersElement = document.getElementById('leaders');

    if (missionElement && scrollPosition > missionElement.offsetTop + missionElement.offsetHeight / 2) {
      this.isVisible.mission = true;
    }
    if (historyElement && scrollPosition > historyElement.offsetTop + historyElement.offsetHeight / 2) {
      this.isVisible.history = true;
    }
    if (leadersElement && scrollPosition > leadersElement.offsetTop + leadersElement.offsetHeight / 2) {
      this.isVisible.leaders = true;
    }
  }

  ngOnInit() {
    this.onWindowScroll(); // Ensure visibility on refresh
  }
}
