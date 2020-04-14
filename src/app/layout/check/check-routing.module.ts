import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckComponent } from './check.component';

const routes: Routes = [
    {
        path: '',
        component: CheckComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CheckRoutingModule {}
