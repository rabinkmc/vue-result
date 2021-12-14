import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Student from "../views/Student.vue";
import StudentDetail from "../views/StudentDetail.vue";
import TeacherDetail from "../views/TeacherDetail.vue";
import Teacher from "../views/Teacher.vue";
import Result from "../views/Result.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/result/:id",
    name: "Result",
    component: Result,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/student",
    name: "Student",
    component: Student,
  },

  {
    path: "/student/:id-:slug/",
    name: "StudentDetail",
    component: StudentDetail,
  },
  {
    path: "/teacher/:id-:slug/",
    name: "TeacherDetail",
    component: TeacherDetail,
  },

  {
    path: "/teacher",
    name: "Teacher",
    component: Teacher,
  },

  {
    path: "/result",
    name: "Result",
    component: Result,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
