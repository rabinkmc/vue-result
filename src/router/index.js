import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Student from "../views/Student.vue";
import StudentDetail from "../views/StudentDetail.vue";
import TeacherDetail from "../views/TeacherDetail.vue";
import Teacher from "../views/Teacher.vue";
import Result from "../views/Result.vue";
import Login from "../views/Login.vue";
import Subject from "../views/Subject.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/subject",
    name: "Subject",
    component: Subject,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/result/:id/",
    name: "Result",
    component: Result,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/students",
    name: "Student",
    component: Student,
  },
  {
    path: "/teacher",
    name: "Teacher",
    component: Teacher,
  },
  {
    path: "/students/:id/",
    name: "StudentDetail",
    component: StudentDetail,
  },

  {
    path: "/teachers/:id",
    name: "TeacherDetail",
    component: TeacherDetail,
    props: true,
  },

  {
    path: "/teachers",
    name: "Teacher",
    component: Teacher,
  },

  {
    path: "/result/:id",
    name: "Result",
    component: Result,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
