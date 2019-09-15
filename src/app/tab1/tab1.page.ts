import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
let data = [
  {
    id: '1',
    profile: '/assets/soberboy.jpg',
    name: 'Sober McSoberson',
    age: '20',
    bio: 'I like long walks on the beach and am totally #sober'

  },
  {
    id: '2',
    profile: '/assets/sobergal.jpg',
    name: 'Abby Abstinence',
    age: '21',
    bio: 'Just looking for a wholesome, sober time.'
  },
  {
    id: '3',
    profile: '/assets/plantboy.jpg',
    name: 'Peter Purity',
    age: '18',
    bio: 'Hydrate or diedrate (on water, of course).'
  }
];

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  profiles: any = [];
  currentindex:number= 0;
currentprofile:any= {};

  constructor(private route: ActivatedRoute, private router: Router) {
      

  }
  
  ngOnInit() {
    this.currentindex = parseInt( this.route.snapshot.paramMap.get('currentindex'));
     console.log(this.currentindex);
    if (! this.currentindex) {
          this.currentindex = 0;
      }
    this.profiles = data;
    this.currentprofile= this.profiles[this.currentindex];
   
  }
likeme(like: boolean) {
  this.currentindex = this.currentindex + 1;
  this.router.navigateByUrl(`tabs/tab1/${this.currentindex}`);
}
}
