import { Injectable } from '@angular/core';
// importaciones para la db
import { AngularFirestore } from '@angular/fire/compat/firestore';
//modelo
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _angularFirestore: AngularFirestore) { }

  getPosts() {
    return this._angularFirestore.collection("posts")
      .snapshotChanges()
  }
  getPostsById(id) {
    return this._angularFirestore.collection("posts")
      .doc(id)
      .valueChanges()
  }
  createPost(post: Post) {
    return new Promise<any>((resolve, reject) => {
      this._angularFirestore.collection("posts")
        .add(post)
        .then((response) => {
          console.log(response)
        },
          (error) => {
            reject(error)
          })
    })
  }
  updatePost(post: Post, id) {
    return this._angularFirestore.collection("posts")
      .doc(id)
      .update({
        componente: post.componente,
        descripcion: post.descripcion,
        precio: post.precio
      })
  }
  deletePost(post) {
    return this._angularFirestore.collection("posts")
      .doc(post.id)
      .delete()
  }
}
