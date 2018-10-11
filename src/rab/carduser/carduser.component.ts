import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarduserService } from '../carduser.service';

@Component({
  selector: 'app-carduser',
  templateUrl: './carduser.component.html',
  styleUrls: ['./carduser.component.css']
})
export class CarduserComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cardUserService: CarduserService) {}
  user: any[];
  ngOnInit() {
    this.route.params.subscribe(({ username }) =>
      this.cardUserService.getUser(username).subscribe((user: any[]) => (this.user = user))
    );
  }
}
