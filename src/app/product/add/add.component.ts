import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router){}

   //model form
   addForm = this.fb.group({
    id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    categoryName:['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
    productName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    categoryId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    description: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    isAvailable: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    productImage: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    rating: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    review: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    vendorName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    warranty: ['', [Validators.required, Validators.pattern('[0-9]+')]],
  })
  ngOnInit(): void {
    
  }
  addProduct(){
    let path=this.addForm.value
    const newData={
    id: path.id ,
    categoryName: path.categoryName,
    productName:path.productName,
    categoryId: path.categoryId ,
    description: path.description,
    price: path.price, 
    isAvailable:path.isAvailable,
    productImage: path.productImage,
    rating:path.rating ,
    review: path.review ,
    vendorName:path.vendorName,
    warranty:path.warranty
    }

    this.ds.addNewProduct(newData).subscribe((data:any)=>
    alert('added new data'))
    this.router.navigateByUrl('product')
 }
}
