import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user";
import lecturers from "./modules/lecturers";
import venues from "./modules/venues";
import courses from "./modules/courses";
import department from "./modules/department";
import timestand from "./modules/timestand";

Vue.use(Vuex)

export default new Vuex.Store({

  modules:{
    user,
    lecturers,
    venues,
    courses,
    department,
    timestand,
  }
})
