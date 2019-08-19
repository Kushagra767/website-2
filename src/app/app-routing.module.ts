import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AboutComponent } from './views/about/about.component';
import { EventComponent } from './views/event/event.component';
import { EventOverviewComponent } from './views/event-overview/event-overview.component';
import { environment } from '../environments/environment';

const routes: Routes = [
	{
		path: '',
		data: { seoID: 'home' },
		component: HomeComponent,
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'events',
		component: EventOverviewComponent
	},
	{
		path: 'events/:eventId',
		component: EventComponent
	},
	{
		path: 'not-found',
		component: NotFoundComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		enableTracing: environment.production !== true
	})],
	exports: [RouterModule]
})
export class RheinklangRoutingModule { }
