import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/post.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup
  postRef: any
  constructor(
    public _postService: PostService,
    public formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      componente: [''],
      descripcion: [''],
      precio: ['']
    })
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')
    this._postService.getPostsById(id).subscribe(res => {
      this.postRef = res
      // captura todo lo que tiene el formulario
      this.editForm = this.formBuilder.group({
        componente: [this.postRef.componente],
        descripcion: [this.postRef.descripcion],
        precio: [this.postRef.precio]
      })
    })
  }

  onSubmit() {
    const id = this.activateRoute.snapshot.paramMap.get('id')
    console.log(this.editForm.value)
    this._postService.updatePost(this.editForm.value, id)
    this.router.navigate([''])
  }

}
