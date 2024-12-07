import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 10123,
  name: 'while though because',
};

export const sampleWithPartialData: ITag = {
  id: 20698,
  name: 'forsaken',
};

export const sampleWithFullData: ITag = {
  id: 8798,
  name: 'inquisitively',
};

export const sampleWithNewData: NewTag = {
  name: 'boom',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
