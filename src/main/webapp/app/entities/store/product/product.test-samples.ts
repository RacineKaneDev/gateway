import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 23388,
  title: 'pish traffic willfully',
  price: 9168.88,
};

export const sampleWithPartialData: IProduct = {
  id: 16531,
  title: 'supposing',
  price: 20345.68,
};

export const sampleWithFullData: IProduct = {
  id: 19338,
  title: 'unnaturally',
  price: 15637.76,
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  title: 'strange',
  price: 1494.81,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
