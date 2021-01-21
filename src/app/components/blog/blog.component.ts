import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DataApiService} from '../../services/data-api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PostInterface } from '../../models/post-interface'; 
import { CategoryInterface } from '../../models/category-interface'; 
import { UserWService } from "../../services/user-w.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(
 private dataApi: DataApiService,
    private location: Location,
    private route:ActivatedRoute,
    private router: Router, 
    public _uw:UserWService
  	) { }
public posts:PostInterface;
  ngOnInit() {
  	this.getAllPosts();
  }
getAllPosts(){
        this.dataApi.getAllPosts().subscribe((res:any) => {
      if (res[0] === undefined){
        // console.log("hey");
       }else{
        this.posts=res;            
        }
     });  
    }
}
