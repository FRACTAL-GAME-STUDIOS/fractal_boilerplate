import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ExampleContainerComponent } from "./example-container/example-container.component";
import { NuiService } from "./nui.service";

@NgModule({
	declarations: [
		AppComponent,
		ExampleContainerComponent,

	],
	imports: [
		BrowserModule,
		HttpClientModule,
	],
	providers: [
		NuiService,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
