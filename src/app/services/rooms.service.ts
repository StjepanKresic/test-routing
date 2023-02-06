import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  
  rooms = [
    {
      id:1, 
      name: 'server room',
      capacity: 0,
      occupided: false
    },
    {
      id:2,
      name: 'conference room',
      capacity: 10,
      occupided: false
    },
    {
      id:3,
      name:'director',
      capacity: 1,
      occupided: false
    },
    {
      id:4,
      name:'support',
      capacity: 2,
      occupided: false
    },
    {
      id:5,
      name:'teamlead',
      capacity: 2,
      occupided: false
    },
    {
      id:6,
      name:'devs',
      capacity: 2,
      occupided: false
    },
    {
      id:7,
      name:'workers',
      capacity: 10,
      occupided: false
    },
    {
      id:8,
      name:'classroom',
      capacity: 20,
      occupided: true
    },
  ]
}
