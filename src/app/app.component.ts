import { Component } from '@angular/core';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clinica-dental-test-ordenaris-front';

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.fetchToken().subscribe(data => {
      this.tokenService.setToken(data.uuid);
    });
  }
}
