<template>
<div>
  <div class="content-wrapper">
    <div class="content-body"><!-- users list start -->
        <section class="users-list-wrapper">
            <div class="users-list-filter px-1">
                <div class="invoice-create-btn mb-1">
                </div>
            </div>
            <div class="users-list-table">
                <div class="card">
                    <div class="card-body">
                        <a href="#" data-toggle="modal" data-target="#addNew" class="btn btn-primary glow invoice-create mb-2" role="button" aria-pressed="true">
                            Add New Lecturer
                        </a>
                        <!-- All Lecturers Table -->
                        <div class="table-responsive" v-if="lecturers.length > 0">
                            <table id="users-list-datatable" class="table">
                                <thead>
                                    <tr>
                                        <th>Code</th>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>status</th>
                                        <th class="text-center" >action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="lecturer in lecturers" :key="lecturer.id">
                                        <td>{{lecturer.code}}</td>
                                        <td><a @click="showView(lecturer.id)" data-toggle="modal" data-target="#showLecturer" href="#">{{lecturer.name}}</a></td>
                                        <td>{{lecturer.department.name}}</td>
                                        <td><span class="badge badge-light-success">Active</span></td>
                                        <td>
                                            <a class="mr-2" @click="showView(lecturer.id)" href="#" data-toggle="modal" data-target="#showLecturer" ><i class="bx bx-show"></i></a>
                                            <a class="mr-2" @click="showEdit(lecturer.id)" href="#" data-toggle="modal" data-target="#editLecturer"><i class="bx bx-edit-alt"></i></a>
                                            <a @click="deleteLecturer(lecturer.id)" href="#" class="invoice-action-edit cursor-pointer">
                                                <i class="bx bx-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- All Lecturers Table -->
                        <div v-else>
                            <p class="mt-2 text-center">No Data Found</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- users list ends -->


        <!--Lecturer Show Modal -->
        <show-lecturer />


        <!--Add Lecturer Modal -->
        <add-lecturer />
        
        <!--Edit Lecturer Modal -->
        <edit-lecturer />

    </div>
</div>

</div>
</template>

<script>
import { mapState } from "vuex";
import AddLecturer from './Create.vue'
import EditLecturer from './Edit.vue'
import ShowLecturer from './View.vue'
export default {
  name: 'Lecturers',

  components:{
    ShowLecturer,
    AddLecturer,
    EditLecturer,
  },

  data(){
      return{
        showLecturer:false,
        domain:'http://localhost/schedular/public/'

      }
  },
  created(){
        this.$store.dispatch('lecturers/all')
        this.$store.dispatch('department/all')
        this.$store.dispatch('courses/all')
    },

    computed:{
        ...mapState('lecturers',['lecturers','selectedLecturer']),
        ...mapState('department',['departments']),
        ...mapState('courses',['courses']),
    },

    methods:{
        showView(id){
            this.$store.dispatch('lecturers/activate',id)
            this.showLecturer = true
        },
        showEdit(id){
            this.$store.dispatch('lecturers/activate',id)
        },
        deleteLecturer(id){
            var that = this
            swal({
                title: 'Delete Lecturer!',
                text: 'This action is irreversible. Are You sure of this?',
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: '#dc3545',
                confirmButtonText: "Yes Delete!",
                showLoaderOnConfirm: true,
                closeOnConfirm: false
            }, function () {
                that.$store.dispatch('lecturers/delete',id).then(()=>{
                    swal('Success!','Lecturer Deleted.','success')
                })
            });
        }
    }
}
</script>