import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  navOptions = [
    {iconSrc: "#", text: "Home"},
    {iconSrc: "#", text: "Explore"},
    {iconSrc: "#", text: "Notifications"},
    {iconSrc: "#", text: "home"},
    {iconSrc: "#", text: "home"},
    {iconSrc: "#", text: "home"},
    {iconSrc: "#", text: "home"},
    {iconSrc: "#", text: "home"}
  ]
}
