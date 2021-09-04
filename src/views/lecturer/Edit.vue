<template>
<div class="modal fade text-left" id="editLecturer" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h4 class="modal-title text-white" id="editLabel">Edit Lecturer </h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="bx bx-x"></i>
                </button>
            </div>
            <form action="#" @submit.prevent="update">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <div class="controls">
                                    <label>Code <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Lecturer Code" v-model="editLecturer.code" required>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Department <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="editLecturer.department" required @change="setCourses()">
                                    <option value="" selected>--Select an option--</option>
                                    <!-- <option :value="department.id" v-for="department in departments.results" :key="department.id">{{department.name}}</option> -->
                                    <option :value="department.id" v-for="department in $parent.departments" :key="department.id">{{department.name}}</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Course(s) Incharge <span class="text-danger">*</span></label>
                                <multiselect v-model="editLecturer.courses" placeholder="Select course(s)" 
                                    :options="theCourses" :multiple="true" :close-on-select="true" 
                                    :preserve-search="true" label="name" track-by="name" />
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <div class="controls">
                                    <label>Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" v-model="editLecturer.name" placeholder="Lecturer Name" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Status <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="editLecturer.status" required>
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <div class="controls">
                                    <label>Profile</label>
                                    <input type="file" id="editProfile" class="form-control" @change="imgChange">
                                </div>
                            </div>
                        </div>
                    </div>
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
</template>

<script>
import { mapState } from "vuex";
import Multiselect from 'vue-multiselect'
export default {
  name: 'Edit_Lecturer',

  components:{
    Multiselect,
  },

  data(){
      return{
        editLecturer:this.lecturerData(),
        isUpdating:false,
        theCourses:[],
      }
  },

    computed:{
        ...mapState('lecturers',['lecturers','selectedLecturer']),
    },

    watch:{
        selectedLecturer(){
            this.editLecturer.id = this.selectedLecturer.id
            this.editLecturer.code = this.selectedLecturer.code
            this.editLecturer.department = this.selectedLecturer.department_id
            this.editLecturer.name = this.selectedLecturer.name
            this.editLecturer.status = this.selectedLecturer.status
            this.editLecturer.courses = [] // Emptying to prevent duplication
            this.selectedLecturer.lecturer_courses.forEach(element => {
                this.editLecturer.courses.push({id:element.course.id,name:element.course.title})
            })
            this.setCourses()
        }
    },

    methods:{
        update(){
            this.isUpdating = true
            if (!this.editLecturer.code || !this.editLecturer.name || !this.editLecturer.department || !this.editLecturer.status || this.editLecturer.courses.length == 0) {
                swal('error','Please Fill all Mandatory Fields!','error')
                this.isUpdating = false
            } else {
                var fdata = new FormData
                fdata.append('name',this.editLecturer.name)
                // fdata.append('staff_id',this.lecturer.code)
                // fdata.append('department',this.lecturer.department)
                fdata.append('code',this.editLecturer.code)
                fdata.append('department_id',this.editLecturer.department)
                fdata.append('status',this.editLecturer.status)
                fdata.append('courses',this.setCourseIds(this.editLecturer.courses))
                fdata.append('profile',this.editLecturer.profile)
                fdata.append('oldProfile',this.selectedLecturer.profile)

                this.$store.dispatch('lecturers/update',{id:this.editLecturer.id,data:fdata}).then(()=>{
                    swal('Success','Lecturer Updated Successfully','success')
                    $('#editLecturer').modal('hide')
                    document.getElementById("editProfile").value = ""
                    this.isUpdating = false
                })
            }

        },
        setCourses(){
            this.theCourses = []
            var foundCourses=[]
            foundCourses = this.$parent.courses.filter(course => course.department_id == this.editLecturer.department)
            foundCourses.forEach(element => {
                this.theCourses.push({id:element.id,name:element.title})
            });
        },

        show(id){
            this.$store.dispatch('lecturers/activate',id)
            this.showLecturer = true
        },
        imgChange(e){
            if (!this.validateFile('editProfile', ['.jpg','.png','.jpeg','.JPG','.PNG','.JPEG'])) {
                swal("Oops! Invalid Image","Please select an image with extension .jpg, .png, or .jpeg!","error")
                document.getElementById("editProfile").value = "" // Emptying profile input
                this.editLecturer.profile = null // Emptying image value
            }else{
                var img = e.target.files[0]
                if(img.size > 3145728){
                    swal("Oops! Somthing went wrong","Image should be less than 3MB","error")
                    document.getElementById("editProfile").value = "" // Emptying file input
                    this.editLecturer.profile = null // Emptying image value
                }else{
                    this.editLecturer.profile = img
                }
            }
        },

        validateFile(inputID, exts) {
            var fileName = document.getElementById(inputID).value;
            return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
        },

        lecturerData(){
            return {
                id : null,
                code : null,
                department : null,
                courses : [],
                name : null,
                status : 1,
                profile: null
            }
        },

        setCourseIds(courses){
            var courseIds = []
            courses.forEach(e => { courseIds.push(e.id) })
            return courseIds
        },
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


