import axios from "axios";
// const baseURL = 'https://lecturescheduler.herokuapp.com/api/'
// const refresh = localStorage.getItem('refresh')
// const access = localStorage.getItem('access')
const baseURL = 'http://localhost/schedular/api/'
const state = {
    times:[]   
}

const mutations = {
    SET_TIMES(state,data){
        state.times = data
    },
}

const actions = {
    all({commit}){
        axios.get(baseURL+'timestand',{
        })
        .then((response)=>{
            commit('SET_TIMES',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    async store({commit},data){
        await axios.post(baseURL+'timestand',data)
        .then((response)=>{
            commit('SET_TIMES',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    async update({commit},data){
        await axios.put(baseURL+'timestand/'+data.id,data.data)
        .then((response)=>{
            commit('SET_TIMES',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    async delete({commit},data){
        await axios.delete(baseURL+'timestand/'+data)
        .then((response)=>{
            commit('SET_TIMES',response.data)
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