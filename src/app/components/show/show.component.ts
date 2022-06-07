import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  Posts: Post[]
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    console.log(this.postService.getPosts())
    this.postService.getPosts().subscribe((res) => {
      this.Posts = [{ id: "1", "componente": "prueba", "descripcion": "prueba", "precio": 12 }]
      // this.Posts = res.map((e) => {
      //   return {
      //     id: e.payload.doc.id,
      //     ...(e.payload.doc.data() as Post)
      // sprip operator (...) simplifica la recogida de valores
      //   }
      // })
      console.log(this.Posts)
    })
  }

  deleteRow = (post) => this.postService.deletePost(post)
}
