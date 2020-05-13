import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatGridListModule,
    MatTableModule, MatListModule, MatChipsModule, MatTabsModule, MatExpansionModule, MatInputModule
} from '@angular/material';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule,
        MatTableModule,
        MatListModule,
        MatExpansionModule,
        MatChipsModule,
        MatInputModule
    ],
    exports: [
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule,
        MatTableModule,
        MatListModule,
        MatChipsModule,
        MatTabsModule,
        MatExpansionModule,
        MatInputModule
    ]
})
export class MaterialModule { }

