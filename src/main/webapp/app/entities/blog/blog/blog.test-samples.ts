import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 13940,
  name: 'nor hmph',
  handle: 'incidentally dandelion scare',
};

export const sampleWithPartialData: IBlog = {
  id: 15988,
  name: 'scuttle drat sock',
  handle: 'unpleasant',
};

export const sampleWithFullData: IBlog = {
  id: 150,
  name: 'phrase',
  handle: 'ouch',
};

export const sampleWithNewData: NewBlog = {
  name: 'rudely state pace',
  handle: 'useless',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
