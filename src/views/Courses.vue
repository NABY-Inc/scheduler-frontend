<template>
<div>
  <div class="content-wrapper">
    <div class="content-header row"></div>
    <div class="content-body"><!-- invoice list -->
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4>Create New Course</h4>
                    </div>
                    <div class="card-body">
                        <p class="text-success" v-if="success">Course Added Successfully!</p>
                        <form class="form-validate" @submit.prevent="save()">
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Code</label>
                                            <input type="text" class="form-control" placeholder="Course Code" v-model="code" required>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Department</label>
                                        <select class="form-control" v-model="department" required>
                                            <option value="" disabled selected>--Select an option--</option>
                                            <!-- <option :value="department.id" v-for="department in departments.results" :key="department.id">{{department.name}}</option> -->
                                            <option :value="department.id" v-for="department in departments" :key="department.id">{{department.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Name</label>
                                            <input type="text" class="form-control" placeholder="Course Name" v-model="name" required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Class Level</label>
                                        <select class="form-control" v-model="level" required>
                                            <option value="" disabled selected>--Select an option--</option>
                                            <option value="100">Level 100</option>
                                            <option value="200">Level 200</option>
                                            <option value="300">Level 300</option>
                                            <option value="400">Level 400</option>
                                        </select>
                                    </div>
                                    
                                </div>
                                <p class="text-danger ml-2" v-if="error">All Fields required!</p>
                            </div>
                            <button v-if="!isSaving" class="btn btn-primary glow" type="submit">Save</button>
                            <button v-else class="ml-0 btn btn-primary glow" disabled><i class="bx bx-loader bx-spin"></i> saving..</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4>Courses List</h4>
                    </div>
                    <div class="card-body">
                        <section class="invoice-list-wrapper">
                            <div class="table-responsive" v-if="courses.length > 0">
                                <table class="table courses-table table-bordered table-light table-hover" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Title</th>
                                            <th>Department</th>
                                            <th>Class</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="course in courses" :key="course.id">
                                            <td>{{course.code}}</td>
                                            <td>{{course.title}}</td>
                                            <td>{{course.department.name}}</td>
                                            <td>Level {{course.level}}</td>
                                            <td>
                                                <a @click="showEdit(course.id)" href="#" data-toggle="modal" data-target="#editCourse" class="invoice-action-edit mr-1">
                                                    <i class="bx bx-edit"></i>
                                                </a>
                                                <a @click="deleteCourse(course.id)" href="#" class="invoice-action-edit cursor-pointer">
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
    <div class="modal fade text-left" id="editCourse" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title text-white" id="editLabel">Edit Course </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="bx bx-x"></i>
                    </button>
                </div>
                <form class="form-validate" @submit.prevent="update" novalidate>
                    <div class="modal-body">
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Code</label>
                                            <input type="text" class="form-control" placeholder="Course Code" v-model="edit.code" required>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label>Department</label>
                                        <select class="form-control" v-model="edit.department" required>
                                            <option value="" disabled selected>--Select an option--</option>
                                            <!-- <option :value="department.id" v-for="department in departments.results" :key="department.id">{{department.name}}</option> -->
                                            <option :value="department.id" v-for="department in departments" :key="department.id">{{department.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Name</label>
                                            <input type="text" class="form-control" placeholder="Course Name" v-model="edit.name" required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Class Level</label>
                                        <select class="form-control" v-model="edit.level" required>
                                            <option value="" disabled selected>--Select an option--</option>
                                            <option value="100">Level 100</option>
                                            <option value="200">Level 200</option>
                                            <option value="300">Level 300</option>
                                            <option value="400">Level 400</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        <p class="text-danger ml-2" v-if="errorUpdate">All Fields required!</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light-secondary" data-dismiss="modal">
                            <i class="bx bx-x d-block d-sm-none"></i><span class="d-none d-sm-block">Close</span>
                        </button>
                        <button v-if="!isUpdating" class="ml-1 btn btn-primary glow" type="submit">
                            <i class="bx bx-check d-block d-sm-none"></i><span class="d-none d-sm-block">Update</span>
                        </button>
                        <button v-else class="ml-0 btn btn-primary glow" disabled><i class="bx bx-loader bx-spin"></i> updating..</button>
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
    name: 'Courses',

    data(){
        return{
            code:null,
            name:null,
            level:null,
            department:null,
            isSaving:false,
            isUpdating:false,
            error:false,
            errorUpdate:false,
            success:false,
            edit:this.editData(),
        }
    },

    created(){
        this.$store.dispatch('courses/all')
        this.$store.dispatch('department/all')
    },

    computed:{
        ...mapState('courses',['courses','course']),
        ...mapState('department',['departments']),
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
        course(){
            this.edit.id = this.course.id
            this.edit.code = this.course.code
            this.edit.level = this.course.level
            this.edit.name = this.course.title
            this.edit.department = this.course.department_id
        }

    },

    methods:{
        save(){
            this.isSaving = true
            if (!this.code || !this.name || !this.department || !this.level) {
                this.error = true
                this.isSaving = false
            }else{
                var fdata = new FormData
                fdata.append('code',this.code)
                fdata.append('title',this.name)
                fdata.append('level',this.level)
                // fdata.append('department',this.department)
                fdata.append('department_id',this.department)
                this.$store.dispatch('courses/store',fdata).then(()=>{
                    this.reset()
                    this.success = true
                    this.isSaving = false
                    this.error = false
                })
            }
        },

        showEdit(id){
            this.$store.dispatch('courses/setCourse',id)
        },

        update(){
            this.isUpdating = true
            if (!this.edit.code || !this.edit.name || !this.edit.department || !this.edit.level) {
                this.errorUpdate = true
                this.isUpdating = false
            }else{
                var fdata = new FormData
                fdata.append('code',this.edit.code)
                fdata.append('title',this.edit.name)
                fdata.append('level',this.edit.level)
                // fdata.append('department',this.department)
                fdata.append('department_id',this.edit.department)
                this.$store.dispatch('courses/update',[this.edit.id,
                {
                    'code':this.edit.code,
                    'title':this.edit.name,
                    'level':this.edit.level,
                    'department_id':this.edit.department
                }
                ]).then(()=>{
                    $('#editCourse').modal('hide')
                    swal('success','Course Updated!','success')
                    this.isUpdating = false
                    this.errorUpdate = false
                })
            }
        },
        
        deleteCourse(id){
            var that = this
            swal({
                title: 'Delete Course!',
                text: 'This will permanently delete course. You sure of this?',
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: '#dc3545',
                confirmButtonText: "Yes Delete!",
                showLoaderOnConfirm: true,
                closeOnConfirm: false
            }, function () {
                that.$store.dispatch('courses/delete',id).then(()=>{
                    swal('Success!','Course Deleted.','success')
                })
            });
        },
        
        reset(){
            this.code = null
            this.name = null
            this.level = null
            this.department = null
        },

        editData(){
            return{
                id:null,
                code:null,
                name:null,
                level:null,
                department:null,
            }
        }

    }
  
}
</script>


