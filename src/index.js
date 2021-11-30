import _ from 'lodash';
import './style.css';
import { displayTask } from './utils/utils.js';

export const items = [
  {
    description: 'Doctor appointment at 10AM',
    completed: false,
    index: 0,
  },
  {
    description: 'Visit friends home at 12PM',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete project for Microverse',
    completed: false,
    index: 2,
  },
  {
    description: 'Take programming tutorials on udemy',
    completed: false,
    index: 3,
  },
  {
    description: 'Dinner plan with family at hotel',
    completed: false,
    index: 4,
  },
];

displayTask();
