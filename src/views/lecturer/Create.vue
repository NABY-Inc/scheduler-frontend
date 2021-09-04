<template>
<div class="modal fade text-left" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h4 class="modal-title text-white" id="addNewLabel">Add New Lecturer </h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="bx bx-x"></i>
                </button>
            </div>
            <form action="#" @submit.prevent="create()">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <div class="controls">
                                    <label>Staff ID <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Lecturer Code" v-model="lecturer.code">
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>Department <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="lecturer.department" @change="setCourses()">
                                    <option value="" selected>--Select an option--</option>
                                    <!-- <option :value="department.id" v-for="department in departments.results" :key="department.id">{{department.name}}</option> -->
                                    <option :value="department.id" v-for="department in $parent.departments" :key="department.id">{{department.name}}</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label>Course(s) Incharge <span class="text-danger">*</span></label>
                                <multiselect v-model="lecturer.courses" placeholder="Select course(s)" 
                                        :options="theCourses" :multiple="true" :close-on-select="true" 
                                        :preserve-search="true" label="name" track-by="name" />
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="form-group">
                                <div class="controls">
                                    <label>Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Lecturer Name" v-model="lecturer.name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Status <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="lecturer.status">
                                    <option value="1" selected>Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <div class="controls">
                                    <label>Profile</label>
                                    <input type="file" id="profile" class="form-control" @change="imgChange">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light-secondary" data-dismiss="modal">
                        <i class="bx bx-x d-block d-sm-none"></i><span class="d-none d-sm-block">Close</span>
                    </button>
                    <button v-if="!isSaving" type="submit" class="btn btn-primary ml-1 glow">
                        <i class="bx bx-check d-block d-sm-none"></i><span class="d-none d-sm-block">Save</span>
                    </button>
                    <button v-else class="ml-0 btn btn-primary glow" disabled><i class="bx bx-loader bx-spin"></i> saving..</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    name: 'Create_Lecturer',

    components:{
        Multiselect
    },

    data(){
        return{
            lecturer:this.lecturerData(),
            isSaving:false,
            theCourses:[],
        }
    },

    methods:{
        create(){
            this.isSaving = true
            if (!this.lecturer.code || !this.lecturer.name || !this.lecturer.department || !this.lecturer.status || this.lecturer.courses.length == 0) {
                swal('error','Lecturer code, name, department, status and Courses required','error')
                this.isSaving = false
            } else {
                var fdata = new FormData
                fdata.append('name',this.lecturer.name)
                // fdata.append('staff_id',this.lecturer.code)
                // fdata.append('department',this.lecturer.department)
                fdata.append('code',this.lecturer.code)
                fdata.append('department_id',this.lecturer.department)
                fdata.append('status',this.lecturer.status)
                fdata.append('courses',this.setCourseIds(this.lecturer.courses))
                fdata.append('profile',this.lecturer.profile)

                this.$store.dispatch('lecturers/create',fdata).then(()=>{
                    swal('Success','Lecturer Created Successfully','success')
                    this.lecturerData()
                    $('#addNew').modal('hide')
                    document.getElementById("profile").value = ""
                    this.isSaving = false
                })
            }

        },
        setCourses(){
            this.theCourses = []
            var foundCourses=[]
            foundCourses = this.$parent.courses.filter(course => course.department_id == this.lecturer.department)
            foundCourses.forEach(element => {
                this.theCourses.push({id:element.id,name:element.title})
            });
        },
        imgChange(e){
            if (!this.validateFile('profile', ['.jpg','.png','.jpeg','.JPG','.PNG','.JPEG'])) {
                swal("Oops! Invalid Image","Please select an image with extension .jpg, .png, or .jpeg!","error")
                document.getElementById("profile").value = "" // Emptying profile input
                this.lecturer.profile = null // Emptying image value
            }else{
                var img = e.target.files[0]
                if(img.size > 3145728){
                    swal("Oops! Somthing went wrong","Image should be less than 3MB","error")
                    document.getElementById("profile").value = "" // Emptying file input
                    this.lecturer.profile = null // Emptying image value
                }else{
                    this.lecturer.profile = img
                }
            }
        },

        validateFile(inputID, exts) {
            var fileName = document.getElementById(inputID).value;
            return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
        },

        lecturerData(){
            return {
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


