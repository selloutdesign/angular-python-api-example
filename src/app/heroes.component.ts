import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { JobService } from './job.service';
import { JLoaderComponent } from './j-loader/j-loader.component';

 
@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  jobs: string[] = [];
  public isRequesting: boolean;

  selectedHero: Hero;
  constructor(
    private heroService: HeroService,
    private router: Router,
    private jobService: JobService,  
  ) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getJobs(): void{
    this.jobService.getJobs().then(jobs => this.jobs = jobs) 
  }

  ngOnInit(): void {
    this.isRequesting = true;

    this.getHeroes();
    this.getJobs();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
};
