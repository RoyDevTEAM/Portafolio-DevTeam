import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isVisible = {
    mission: false,
    history: false,
    leaders: false
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
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
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.onWindowScroll(); 
    }
  }
}
