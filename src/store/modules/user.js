import axios from "axios";
// const baseURL = 'https://lecturescheduler.herokuapp.com/api/'
const baseURL = 'http://localhost/schedular/api/'
// const refresh = localStorage.getItem('refresh')
// const access = localStorage.getItem('access')
const state = {
    // refresh_token:'',
    // access_token:'',
    login_error:false,
    profile:{}
}

const mutations = {
    SET_TOKEN(state,data){
        state.refresh_token = data.refresh
        state.access_token = data.access
    },
    SET_LOGIN_ERROR(state,data){
        state.login_error = data
    },
    SET_PROFILE(state,data){
        state.profile = data
    }
}

const actions = {
    async login({commit},data){
        await axios.post(baseURL+'user/login',data)
        .then((response)=>{
            if (response.status == 200) {
                // localStorage.setItem('refresh',response.data.refresh)
                // localStorage.setItem('access',response.data.access)
                // commit('SET_TOKEN',response.data)
                commit('SET_LOGIN_ERROR',false)
            }
        })
        .catch((error)=>{
            commit('SET_LOGIN_ERROR',true)
            console.log(error);
        })
    },

    logout({commit}){
        axios.post(baseURL+'logout/',{'refresh':refresh},{
            header:{
                'Authorization':access
            }
        })
        .then((response)=>{
            if (response.status == 200) {
                localStorage.removeItem('refresh')
                localStorage.removeItem('access')
                commit('SET_LOGIN_ERROR',false)
            }
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    profile({commit}){
        axios.get(baseURL+'is-useriauthenticated/',{
            header:{
                'Authorization':access,
            }
        })
        .then((response)=>{
            commit('SET_PROFILE',response.data)
        })
    }
}

const getters = {}

export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters,
}