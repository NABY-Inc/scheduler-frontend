import axios from "axios";
// const baseURL = 'https://lecturescheduler.herokuapp.com/api/'
// const refresh = localStorage.getItem('refresh')
// const access = localStorage.getItem('access')
const baseURL = 'http://localhost/schedular/api/'
const state = {
    lecturers:[],
    selectedLecturer:{}
}

const mutations = {
    SET_LECTURERS(state,data){
        state.lecturers = data
    },
    SET_LECTURER(state,data){
        state.selectedLecturer = state.lecturers.find(element => element.id == data)
    }
}

const actions = {
    // all({commit},data){
    //     axios.get(baseURL+'lecturer-list/',{
    //         header:{
    //             'Authorization':access
    //         }
    //     })
    //     .then((response)=>{
    //         commit('SET_LECTURERS',response.data)
    //         // console.log(response);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },

    // async create({commit},data){
    //     await axios.post(baseURL+'add-lecturer-and-course/',data)
    //     .then((response)=>{
    //         console.log(response);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },
    all({commit},data){
        axios.get(baseURL+'lecturer',{
        })
        .then((response)=>{
            commit('SET_LECTURERS',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    async create({commit},data){
        await axios.post(baseURL+'lecturer',data)
        .then((response)=>{
            commit('SET_LECTURERS',response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    
    async update({commit},data){
        await axios.post(baseURL+'lecturer/'+data.id,data.data)
        .then((response)=>{
            commit('SET_LECTURERS',response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    async delete({commit},data){
        await axios.delete(baseURL+'lecturer/'+data)
        .then((response)=>{
            commit('SET_LECTURERS',response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    activate({commit},data){
        commit('SET_LECTURER',data)
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