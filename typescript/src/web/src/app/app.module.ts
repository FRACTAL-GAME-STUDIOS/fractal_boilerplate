import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module'; // Enable this if you want to use Angular routing in your app
import { AppComponent } from './app.component';

/* ======================== CUSTOM COMPONENTS ======================= */
//import { ExampleComponent } from './components/example/example.component';

@NgModule({
	declarations: [
		AppComponent,
		//ExampleComponent
	],
	imports: [
		BrowserModule,
		//AppRoutingModule // Enable this if you want to use Angular routing in your app
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
