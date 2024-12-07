import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 20634,
  title: 'gladly foolishly where',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-12-07T05:07'),
};

export const sampleWithPartialData: IPost = {
  id: 14930,
  title: 'mostly appropriate',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-12-06T15:28'),
};

export const sampleWithFullData: IPost = {
  id: 20553,
  title: 'bonnet yuck',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-12-06T13:01'),
};

export const sampleWithNewData: NewPost = {
  title: 'fax',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-12-07T01:11'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
