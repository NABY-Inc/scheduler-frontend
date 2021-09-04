import axios from "axios";
// const baseURL = 'https://lecturescheduler.herokuapp.com/api/'
const baseURL = 'http://localhost/schedular/api/'
// const refresh = localStorage.getItem('refresh')
// const access = localStorage.getItem('access')
const state = {
    courses:[],
    course:{},
}

const mutations = {
    SET_COURSES(state,data){
        state.courses = data
    },
    ADD_COURSE(state,data){
        state.courses.unshift(data)
    },
    SET_COURSE(state,data){
        state.course = state.courses.find(element => element.id == data)
    },
}

const actions = {
    // all({commit}){
    //     axios.get(baseURL+'courses-list',{
    //         header:{
    //             'Authorization':access
    //         }
    //     })
    //     .then((response)=>{
    //         commit('SET_COURSES',response.data)
    //         // console.log(response);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },

    // async store({commit},data){
    //     await axios.post(baseURL+'courses-list/',data)
    //     .then((response)=>{
    //         commit('ADD_COURSE',response.data)
    //         // console.log(response);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },
    all({commit}){
        axios.get(baseURL+'courses')
        .then((response)=>{
            commit('SET_COURSES',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    async store({commit},data){
        // await axios.post(baseURL+'courses-list/',data)
        await axios.post(baseURL+'courses',data)
        .then((response)=>{
            // commit('ADD_COURSE',response.data)
            commit('SET_COURSES',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    setCourse({commit},data){
        commit('SET_COURSE',data)
    },

    async update({commit},data){
        await axios.patch(baseURL+'courses/'+data[0],data[1])
        .then((response)=>{
            commit('SET_COURSES',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    async delete({commit},data){
        await axios.delete(baseURL+'courses/'+data)
        .then((response)=>{
            commit('SET_COURSES',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
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