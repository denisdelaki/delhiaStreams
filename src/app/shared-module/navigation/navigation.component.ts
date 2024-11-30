import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-navigation',
  standalone: false,
  
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @ViewChild('menu') menu!: MatMenu;
  searchControl = new FormControl('');
}
