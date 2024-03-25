import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink,NgFor,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  products:any[]=[];
  

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/products.json').subscribe((productsdata:any)=>{
      this.products=productsdata;
    });
   
  }
}
