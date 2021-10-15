// import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'; 
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatCardModule,
} from '@angular/material/card';
import {
  MatInputModule,
} from '@angular/material/input';
import {
  MatButtonModule
} from '@angular/material/button';

const modules = [
  MatCardModule,MatTableModule,MatBadgeModule,
  MatInputModule,MatIconModule,MatTooltipModule,
  MatButtonModule,MatMenuModule,MatGridListModule,
  MatToolbarModule,MatDialogModule,MatProgressSpinnerModule,MatSnackBarModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
