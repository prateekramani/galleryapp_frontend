import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { convertCompilerOptionsFromJson } from 'typescript';
import { HomeservicesService } from '../services/homeservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService : HomeservicesService,private _snackBar: MatSnackBar) { }
  username = "admin"
  images_data = [ {
    _id : "",
    name : "",
    author : "",
    like_count : 0,
    dislike_count : 0,
    action : "No action"
  }]

  ngOnInit(): void {
    this.username = this.homeService.username || "admin"
    this.homeService.getImages().subscribe((data: any)=>{
      this.homeService.getActivity().subscribe((res:any)=>{
        if (res){
          data.forEach((image : any) => {
            res.forEach((activity : any) => {
              if(image.name == activity.image_name)
              {
                  image.action = activity.action
              }
            });
            if (!image.action){image.action = 'No action'}
          });
        }
        this.images_data = data
        console.log(this.images_data)
      })
    })
   
  }

  liked(item : any){
    var inc_like = 0 , inc_dislike =0 ;
    inc_like = item.action == 'Liked'?  -1 : 1 
    inc_dislike = item.action == 'Disliked'?  -1 : 0 
    var action = item.action == 'Liked'? 'No action' : 'Liked'
    let obj = {_id : item._id, inc_like : inc_like, inc_dislike : inc_dislike , name : item.name, user: this.username, action : action}
    this.homeService.postActivity(obj).subscribe((res: any)=>{
      this._snackBar.open(res.status, "Success", {duration : 2000});
      console.log(res.status)
      this.ngOnInit()
    })
  }

  
  disliked(item : any){
    var inc_like = 0 , inc_dislike =0 ;
    inc_dislike = item.action == 'Disliked'?  -1 : 1 
    inc_like = item.action == 'Liked'?  -1 : 0 
    var action = item.action == 'Disliked'? 'No action' : 'Disliked'
    let obj = {_id : item._id, inc_like : inc_like, inc_dislike : inc_dislike , name : item.name, user: this.username, action : action}
    this.homeService.postActivity(obj).subscribe((res: any)=>{
      this._snackBar.open(res.status, "Success", {duration : 2000});
      console.log(res.status)
      this.ngOnInit()
  })
  }
   
}
