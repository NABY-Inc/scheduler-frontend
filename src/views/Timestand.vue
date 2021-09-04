<template>
<div>
  <div class="content-wrapper">
    <div class="content-header row"></div>
    <div class="content-body"><!-- invoice list -->
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4>Add New Lecture Time</h4>
                    </div>
                    <div class="card-body">
                        <form class="form-validate" @submit.prevent="save()">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Start Time</label>
                                            <input type="time" class="form-control" v-model="start" required>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>End Time</label>
                                            <input type="time" class="form-control" v-model="due" required>
                                        </div>
                                    </div>
                                    <p class="text-danger ml-2" v-if="error">All Fields required!</p>
                                </div>
                                <button v-if="!isSaving" class="ml-0 btn btn-success glow" type="submit">Save</button>
                                <button v-else class="ml-0 btn btn-success glow" disabled><i class="bx bx-loader bx-spin"></i> saving..</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h4>Lecture Time List</h4>
                    </div>
                    <div class="card-body">
                        <section class="invoice-list-wrapper">
                            <div class="table-responsive" v-if="times.length > 0">
                                <table class="table courses-table table-bordered table-hover" style="width:100%">
                                    <thead class="thead-success">
                                        <tr>
                                            <th>Start Time</th>
                                            <th>End Time</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="time in times" :key="time.id">
                                            <td>{{moment(time.start,['h:m a']).format('h:mm a')}}</td>
                                            <td>{{moment(time.due,['h:m a']).format('h:mm a')}}</td>
                                            <td>
                                                <a @click="showEdit(time.id)" href="#" data-toggle="modal" data-target="#editTime" class="invoice-action-edit mr-1">
                                                    <i class="bx bx-edit"></i>
                                                </a>
                                                <a @click.prevent="deleteTime(time.id)" href="#" class="invoice-action-edit cursor-pointer">
                                                    <i class="bx bx-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-else>
                                <p class="mt-2 text-center">No Data Found</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Edit Course Modal -->
    <div class="modal fade text-left" id="editTime" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header bg-success">
                    <h4 class="modal-title text-white" id="editLabel">Edit Lecture Time </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="bx bx-x"></i>
                    </button>
                </div>
                <form action="#" @submit.prevent="update()">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <div class="controls">
                                        <label>Start Time</label>
                                        <input type="time" class="form-control" v-model="editStart" required>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <div class="controls">
                                        <label>End Time</label>
                                        <input type="time" class="form-control" v-model="editDue" required>
                                    </div>
                                </div>
                                <p class="text-danger ml-2" v-if="errorUpdate">All Fields required!</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light-secondary" data-dismiss="modal">
                            <i class="bx bx-x d-block d-sm-none"></i><span class="d-none d-sm-block">Close</span>
                        </button>
                        <button v-if="!isUpdating" class="ml-1 btn btn-success glow" type="submit">
                            <i class="bx bx-check d-block d-sm-none"></i><span class="d-none d-sm-block">Update</span>
                        </button>
                        <button v-else class="ml-0 btn btn-success glow" disabled><i class="bx bx-loader bx-spin"></i> updating..</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>

</div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'
import { mapState } from "vuex";
var moment = require('moment');
export default {
  name: 'Courses',

  data(){
        return{
            moment:moment,
            id:null,
            start:null,
            due:null,
            editStart:null,
            editDue:null,
            isSaving:false,
            isUpdating:false,
            error:false,
            errorUpdate:false,
            success:false
        }
    },
    created(){
        this.$store.dispatch('timestand/all')
    },

    computed:{
        ...mapState('timestand',['times']),
    },

    watch:{
        success(){
            if (this.success) {
                setTimeout(() => {
                    this.success = false 
                }, 5000);
            }
        },
        error(){
            if (this.error) {
                setTimeout(() => {
                    this.error = false 
                }, 5000);
            }
        },

    },

    methods:{
        save(){
            this.isSaving = true
            if (!this.start || !this.due) {
                this.error = true
                this.isSaving = false
            }else{
                var fdata = new FormData
                fdata.append('start',this.start)
                fdata.append('due',this.due)
                this.$store.dispatch('timestand/store',fdata).then(()=>{
                    this.reset()
                    this.success = true
                    this.isSaving = false
                    this.error = false
                })
            }
        },
        showEdit(id){
            var data = this.times.find(time => time.id == id)
            this.id = data.id
            this.editStart = data.start
            this.editDue = data.due
            $('editTime').modal('show')
        },
        update(){
            this.isUpdating = true
            if (!this.editStart || !this.editDue) {
                this.errorUpdate = true
                this.isUpdating = false
            }else{
                var fdata = {start:this.editStart, due:this.editDue}
                // this.$store.dispatch('timestand/update',fdata).then(()=>{
                this.$store.dispatch('timestand/update',{id:this.id,data:fdata}).then(()=>{
                    this.isUpdating = false
                    this.error = false
                    $('#editTime').modal('hide')
                    swal('Success!','Timestand Updated!.','success')
                })
            }
        },
        deleteTime(id){
            var that = this
            swal({
                title: 'Warning',
                text: 'Are you sure you want to delete Time?',
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: '#dc3545',
                confirmButtonText: 'Yes Delete',
                showLoaderOnConfirm: true,
                closeOnConfirm: false
            }, function () {
                that.$store.dispatch('timestand/delete',id).then(()=>{
                    swal('Success!','Timestand Deleted.','success')
                })
            });
        },
        reset(){
            this.start = null
            this.due = null
        },
    }
  
}
</script>


