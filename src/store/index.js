import { createStore } from "vuex";

import subjectModule from "./modules/subjects";
import teacherModule from "./modules/teachers";
import studentModule from "./modules/students";
import loginModule from "./modules/profile";

export default createStore({
  modules: {
    teachers: teacherModule,
    subjects: subjectModule,
    students: studentModule,
    login: loginModule,
  },
});
