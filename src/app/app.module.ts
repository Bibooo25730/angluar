import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MyText1Component } from './my-text1/my-text1.component';
import { MyText2Component } from './my-text2/my-text2.component';
import { HighDirective } from './high-self/high-self.component';
import { MyAgComponent } from './my-ag/my-ag.component';
import { MyBuildComponent } from './my-build/my-build.component';
import { MuHostComponent } from './mu-host/mu-host.component';
import { MywordPie } from "./mu-host/mu-host-prop"
import {UserListService} from "./server/user_server";
import { ServerComponent } from './my-server/my-server.component';
import { MyHttpComponent } from './my-http/my-http.component';
import { MyParamsComponent } from './my-params/my-params.component'
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MyText1Component,
    MyText2Component,
    HighDirective,
    MyAgComponent,
    MyBuildComponent,
    MuHostComponent,
    MywordPie,
    ServerComponent,
    MyHttpComponent,
    MyParamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
