import axios from "axios";
// const baseURL = 'https://lecturescheduler.herokuapp.com/api/'
const baseURL = 'http://localhost/schedular/api/'
// const refresh = localStorage.getItem('refresh')
// const access = localStorage.getItem('access')
const state = {
    departments:[],
    department:{},
}

const mutations = {
    SET_DEPARTMENTS(state,data){
        state.departments = data
    },
    ADD_DEPARTMENT(state,data){
        // state.departments.results.unshift(data)
        state.departments.unshift(data)
    },
    SET_DEPARTMENT(state,data){
        state.department = state.departments.find(element => element.id == data)
    },
}

const actions = {
    // all({commit}){
    //     const access = localStorage.getItem('access')
    //     axios.get(baseURL+'department-list-create',{
    //         header:{
    //             'Content-Type':'application/json',
    //             'accept':'application/json',
    //             'Authorization':'JWT '+ access,
                
    //         }
    //     })
    //     .then((response)=>{
    //         commit('SET_DEPARTMENTS',response.data)
    //         // console.log(response);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },
    
    // async create({commit},data){
    //     await axios.post(baseURL+'department-list-create/',data)
    //     .then((response)=>{
    //         commit('ADD_DEPARTMENT',response.data)
    //         // console.log(response);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })

    // }

    all({commit}){
        axios.get(baseURL+'department',{
        })
        .then((response)=>{
            commit('SET_DEPARTMENTS',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    
    async create({commit},data){
        await axios.post(baseURL+'department',data)
        .then((response)=>{
            commit('ADD_DEPARTMENT',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    
    setDepartment({commit},data){
        commit('SET_DEPARTMENT',data)
    },
    
    async update({commit},data){
        await axios.patch(baseURL+'department/'+data.id,{name:data.name})
        .then((response)=>{
            commit('SET_DEPARTMENTS',response.data)
            // console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },

    async delete({commit},data){
        await axios.delete(baseURL+'department/'+data)
        .then((response)=>{
            commit('SET_DEPARTMENTS',response.data)
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