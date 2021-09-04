<template>
<div>
  
  <div class="content-wrapper">
    <div class="content-header row"></div>
    <div class="content-body"><!-- invoice list -->
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4>Create New Department</h4>
                    </div>
                    <div class="card-body">
                        <p class="text-success" v-if="success">Department Added Successfully!</p>
                        <form class="form-validate" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Name</label>
                                            <input type="text" class="form-control" placeholder="Department Name" v-model="departmentName">
                                            <small class="text-danger mb-2" v-if="error">This Field is required!</small>
                                        </div>
                                    </div>
                                    
                                    <button v-if="!isSaving" @click.prevent="store" class="ml-0 btn btn-info glow" type="submit">Save</button>
                                    <button v-else class="ml-0 btn btn-info glow" disabled><i class="bx bx-loader bx-spin"></i> saving..</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h4>Department List</h4>
                    </div>
                    <div class="card-body">
                        <section class="invoice-list-wrapper">
                            <div class="table-responsive">
                                <table class="table department-table table-bordered table-hover" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Department Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- <tr v-for="department in departments.results" :key="department.id"> -->
                                        <tr v-for="department in departments" :key="department.id">
                                            <td>{{department.name}}</td>
                                            <td>
                                                <a href="#" @click="showEdit(department.id)" data-toggle="modal" data-target="#editDepartment" class="invoice-action-edit mr-1">
                                                    <i class="bx bx-edit"></i>
                                                </a>
                                                <a @click="deleteDepartment(department.id)" href="#" class="invoice-action-edit cursor-pointer">
                                                    <i class="bx bx-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--Edit Course Modal -->
    <div class="modal fade text-left" id="editDepartment" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header bg-info">
                    <h4 class="modal-title text-white" id="editLabel">Edit Department </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="bx bx-x"></i>
                    </button>
                </div>
                <form action="#" @submit.prevent="update">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <div class="controls">
                                        <label>Name</label>
                                        <input type="text" class="form-control" placeholder="Department Name" v-model="editDepartmentName" required>
                                        <small class="text-danger mb-2" v-if="errorUpdate">This Field is required!</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light-secondary" data-dismiss="modal">
                            <i class="bx bx-x d-block d-sm-none"></i><span class="d-none d-sm-block">Close</span>
                        </button>
                        <button v-if="!isUpdating" class="ml-1 btn btn-info glow" type="submit">
                            <i class="bx bx-check d-block d-sm-none"></i><span class="d-none d-sm-block">Update</span>
                        </button>
                        <button v-else class="ml-0 btn btn-info glow" disabled><i class="bx bx-loader bx-spin"></i> updating..</button>
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
export default {
  name: 'Department',
  data(){
      return{
          isSaving:false,
          isUpdating:false,
          error:false,
          errorUpdate:false,
          success:false,
          departmentName:null,
          editDepartmentName:null,
          departmentId:null
      }
  },
  created(){
        this.$store.dispatch('department/all')
    },

    computed:{
        ...mapState('department',['departments','department']),
    },
    watch:{
        success(){
            if (this.success) {
                setTimeout(() => {
                   this.success = false 
                }, 5000);
            }
        },
        department(){
            this.editDepartmentName = this.department.name
            this.departmentId = this.department.id
        }
    },

    methods:{
        store(){
            this.isSaving = true
            if (!this.departmentName) {
                this.error = true
                this.isSaving = false
            } else {
                this.error = false
                this.$store.dispatch('department/create',{name:this.departmentName}).then(()=>{
                    this.departmentName = null
                    this.success = true
                    this.isSaving = false
                })
            }
        },
        showEdit(id){
            this.$store.dispatch('department/setDepartment',id)
        },
        update(){
            this.isUpdating = true
            if (!this.editDepartmentName) {
                this.errorUpdate = true
                this.isUpdating = false
            } else {
                this.errorUpdate = false
                this.$store.dispatch('department/update',{id:this.departmentId,name:this.editDepartmentName}).then(()=>{
                    $('#editDepartment').modal('hide')
                    swal('success','Department Name Updated!','success')
                    this.isUpdating = false
                })
            }
        },
        deleteDepartment(id){
            var that = this
            swal({
                title: 'Delete Department!',
                text: 'This will permanently delete department. You sure of this?',
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: '#dc3545',
                confirmButtonText: "Yes Delete!",
                showLoaderOnConfirm: true,
                closeOnConfirm: false
            }, function () {
                that.$store.dispatch('department/delete',id).then(()=>{
                    swal('Success!','Department Deleted.','success')
                })
            });
        }
    }
}
</script>


