import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Lesson } from '../model/lesson';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  course: Course | undefined;

  lessons: Lesson[] | undefined;

  constructor(private route: ActivatedRoute) {


  }


  ngOnInit() {
  }

}
