import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHttpComponent } from "../app/my-http/my-http.component"
import { MyText2Component } from "../app/my-text2/my-text2.component"
import { MyParamsComponent} from "../app/my-params/my-params.component"
const routes: Routes = [
  { path: 'hello', component: MyHttpComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: 'params/:id', component: MyParamsComponent },
  { path: '**', component: MyText2Component },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
