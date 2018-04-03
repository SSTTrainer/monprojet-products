import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductService {

  constructor() { }

  public getProduct(): Product[] {
   return  [
      {code: 'P100', libelle: 'Café', prixUnitaire: 500.5},
      {code: 'P200', libelle: 'Thé', prixUnitaire: 500.5},
      {code: 'P300', libelle: 'Jus d\'orange', prixUnitaire: 500.5},
      {code: 'P400', libelle: 'Coca Cola', prixUnitaire: 500.5},
      {code: 'P500', libelle: 'Eau gazifié', prixUnitaire: 500.5}
    ];
  }

}
