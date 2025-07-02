import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

// Help source: https://medium.com/@biplavmazumdar5/angular-17-routing-cc4a20cc4d8c#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjZmOTc3N2E2ODU5MDc3OThlZjc5NDA2MmMwMGI2NWQ2NmMyNDBiMWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTYyOTYwMzU4MzQtazFrNnFlMDYwczJ0cDJhMmphbTRsamRjbXMwMHN0dGcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDc4MTM4NzcwNTA5NTk3NzgwODEiLCJlbWFpbCI6InJvY2tzdGFyNDQwMEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzA5NzY2ODE3LCJuYW1lIjoiQWxiZXJ0byBEZWwgQW5nZWwiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSmRYM2xXUDhNd2lkMUpkc1F4aW1tNGRSdmQ0aUJJNk9zMjJyVE5kR2lHd1E9czk2LWMiLCJnaXZlbl9uYW1lIjoiQWxiZXJ0byIsImZhbWlseV9uYW1lIjoiRGVsIEFuZ2VsIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE3MDk3NjcxMTcsImV4cCI6MTcwOTc3MDcxNywianRpIjoiZjNmODVhYTU1NThlZTRkNWI4NTFjNWI2YWRmZTBjN2QyNjU0YjRkNCJ9.MjjsRCMh9eLvwvUMKa13q4FRTBHngn5jPXT6ogpRBVxEe8bJ8DqoulnAuADUyzGF3TUYIIvDZ4cSFYKXkLgsZZMklLi2828s2QniVXGT_hH08ZoQ-XgrI7vTH5nsHBfKPr_CRvuKljdDwU2Hf_aFF9jyFP9DwQRXWT_LXuaBAvh_4I1oD86JHyqpH_8CTEUXwuNCB2cX7UD9LeWoP0cslNKku3T2DBc11VFeBTEHdMJwXcI7oy-oGXEvI9rxQq54UT8HtLzUOYjexoBl1bOG2Cow40PUPbx3eaAZObYxINaIWNYijZI7Xk23J8Sjpu58YsTzBKNcb9EKS3XgXwN_Sw

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ServerComponent, 
    ServersComponent
  ],
  templateUrl: './app.component.html',
  styles: [`
      h3 
        color: dodgerblue
      
  `]
})
export class AppComponent {
  title = 'the-basis01';
}
