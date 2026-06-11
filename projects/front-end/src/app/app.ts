import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected title = signal('Gestion de colis');
  protected titleMaj = computed(() => this.title().toUpperCase());
  protected titleBis = 'Gestion de colis S';

  ngOnInit() {
    setTimeout(() => {
      //this.title.set('Gestion de colis - Updated');
      this.title.update((current) => current + ' - Updated');
    }, 2000);

    this.titleBis = 'Gestion de colis S - Updated';
  }
}
