import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { AddItemComponent } from '../components/add-item/add-item.component';
import { ViewListComponent } from '../components/view-list/view-list.component';
const appRoutes: Routes = [
	{
		path : '',
		redirectTo: '/login',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
    {
		path:'home-page',
		component:HomePageComponent 
	},
	{
		path:'add-item',
		component:AddItemComponent 
	},
	{
		path:'view-list',
		component:ViewListComponent
	}
	

	
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);