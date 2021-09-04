import axios from "axios";
// const baseURL = 'https://lecturescheduler.herokuapp.com/api/'
// const refresh = localStorage.getItem('refresh')
// const access = localStorage.getItem('access')
const baseURL = 'http://localhost/schedular/api/'
const state = {
    venues:[]   
}

const mutations = {
    SET_VENUES(state,data){
        state.venues = data
    },
    ADD_VENUE(state,data){
        state.venues.unshift(data)
    }
}

const actions = {
    // all({commit},data){
    //     axios.get(baseURL+'venue-list/',{
    //         header:{
    //             'Authorization':access
    //         }
    //     })
    //     .then((response)=>{
    //         commit('SET_VENUES',response.data)
    //         // console.log(response);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },

    // async store({commit},data){
    //     await axios.post(baseURL+'venue-list/',data)
    //     .then((response)=>{
    //         commit('ADD_VENUE',response.data)
    //         // console.log(response);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },

    // async update({commit},data){
    //     await axios.post(baseURL+'venue-list/',data)
    //     .then((response)=>{
    //         commit('ADD_VENUE',response.data)
    //         // console.log(response);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },

    // async delete({commit},data){
    //     await axios.post(baseURL+'venue-list/',data)
    //     .then((response)=>{
    //         commit('ADD_VENUE',response.data)
    //         // console.log(response);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },
    all({commit},data){
        axios.get(baseURL+'venue',{
        })
        .then((response)=>{
            commit('SET_VENUES',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    async store({commit},data){
        await axios.post(baseURL+'venue',data)
        .then((response)=>{
            commit('SET_VENUES',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    async update({commit},data){
        await axios.put(baseURL+'venue/'+data.id,data.data)
        .then((response)=>{
            commit('SET_VENUES',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    async delete({commit},data){
        await axios.delete(baseURL+'venue/'+data)
        .then((response)=>{
            commit('SET_VENUES',response.data)
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