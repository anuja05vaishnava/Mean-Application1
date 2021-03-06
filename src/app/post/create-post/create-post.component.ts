import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Post } from '../post.model';
import { PostsService } from "../posts.service";
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";
  post: Post;

  private mode = 'create';
  private postId: string;


  constructor(public postsService: PostsService,
    public route: ActivatedRoute) {}

    ngOnInit(){
      this.route.paramMap.subscribe((paramMap: ParamMap) =>{
         if(paramMap.has('postId')){
           this.mode = 'edit';
           this.postId = paramMap.get('postId');

           this.postsService.getPost(this.postId).subscribe(postData => {

            this.post = {id: postData._id, title: postData.title, content: postData.content};
           });

         }else {
           this.mode = 'create';
           this.postId = null;
         }
      });
    }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }

   if(this.mode === ' create'){
    this.postsService.addPost(form.value.title, form.value.content);
   }else
   {
    this.postsService.updatePost(this.postId,form.value.title, form.value.content);
   }


    form.resetForm();
  }
}
