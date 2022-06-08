import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public postForm: FormGroup;
  constructor(
    public _postService: PostService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    // va a inicializar los campos de ese formulario
    this.postForm = this.formBuilder.group({
      componente: [''],
      descripcion: [''],
      precio: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._postService.createPost(this.postForm.value)
    this.router.navigate([''])
  }
}
