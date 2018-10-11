import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[];
  constructor(private githubService: GithubService) {}
  ngOnInit() {
    this.githubService.getConfig().subscribe((data: any[]) => (this.users = data));
  }
}
