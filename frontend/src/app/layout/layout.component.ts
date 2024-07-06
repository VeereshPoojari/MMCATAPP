import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, ToolBarComponent, SideNavBarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  @ViewChild('sideNav') sideNavBar!: SideNavBarComponent;
  ngOnInit(): void {
  }
  onToggleSideNav() {
    this.sideNavBar.toggle();
  }
}
