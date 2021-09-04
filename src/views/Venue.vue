<template>
<div>
  <div class="content-wrapper">
    <div class="content-header row"></div>
    <div class="content-body"><!-- invoice list -->
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4>Add New Lecture Venue</h4>
                    </div>
                    <div class="card-body">
                        <p class="text-success" v-if="success">Venue Added Successfully!</p>
                        <form class="form-validate" @submit.prevent="save()">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Name</label>
                                            <input type="text" class="form-control" placeholder="Venue Name" v-model="name" required>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Size</label>
                                            <input type="number" class="form-control" placeholder="Venue Size" v-model="size" required>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-danger ml-2" v-if="error">All Fields required!</p>
                            </div>
                            <button v-if="!isSaving" class="ml-0 btn btn-dark glow" type="submit">Save</button>
                            <button v-else class="ml-0 btn btn-dark glow" disabled><i class="bx bx-loader bx-spin"></i> saving..</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <h4>Venue List</h4>
                    </div>
                    <div class="card-body">
                        <section class="invoice-list-wrapper">
                            <div class="table-responsive" v-if="venues.length > 0">
                                <table class="table courses-table table-bordered table-hover" style="width:100%">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>Venue Name</th>
                                            <th>Venue Size</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="venue in venues" :key="venue.id">
                                            <td>{{venue.name}}</td>
                                            <td>{{venue.size}}</td>
                                            <td>
                                                <a href="#" @click="showEdit(venue.id)" data-toggle="modal" data-target="#editVenue" class="invoice-action-edit mr-1">
                                                    <i class="bx bx-edit"></i>
                                                </a>
                                                <a href="#" @click="deleteVenue(venue.id)" class="invoice-action-edit cursor-pointer">
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
    <div class="modal fade text-left" id="editVenue" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h4 class="modal-title text-white" id="editLabel">Edit Venue </h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i class="bx bx-x"></i>
                    </button>
                </div>
                <form action="#" @submit.prevent="update()">
                    <div class="modal-body">
                        <form class="form-validate" @submit.prevent="update()">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Name</label>
                                            <input type="text" class="form-control" placeholder="Venue Name" v-model="editName" required>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Size</label>
                                            <input type="number" class="form-control" placeholder="Venue Size" v-model="editSize" required>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-danger ml-2" v-if="errorUpdate">All Fields required!</p>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light-secondary" data-dismiss="modal">
                            <i class="bx bx-x d-block d-sm-none"></i><span class="d-none d-sm-block">Close</span>
                        </button>
                        <button v-if="!isUpdating" class="ml-1 btn btn-dark glow" type="submit">
                            <i class="bx bx-check d-block d-sm-none"></i><span class="d-none d-sm-block">Update</span>
                        </button>
                        <button v-else class="ml-0 btn btn-dark glow" disabled><i class="bx bx-loader bx-spin"></i> updating..</button>
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
  name: 'Venue',
    data(){
        return{
            id:null,
            name:null,
            size:null,
            editName:null,
            editSize:null,
            isSaving:false,
            isUpdating:false,
            error:false,
            errorUpdate:false,
            success:false
        }
    },
    created(){
        this.$store.dispatch('venues/all')
    },

    computed:{
        ...mapState('venues',['venues']),
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
            if (!this.name || !this.size) {
                this.error = true
                this.isSaving = false
            }else{
                var fdata = new FormData
                fdata.append('name',this.name)
                fdata.append('size',this.size)
                this.$store.dispatch('venues/store',fdata).then(()=>{
                    this.reset()
                    this.success = true
                    this.isSaving = false
                    this.error = false
                })
            }
        },
        showEdit(id){
            var data = this.venues.find(venue => venue.id == id)
            this.id = data.id
            this.editName = data.name
            this.editSize = data.size
            $('editVenue').modal('show')
        },
        update(){
            this.isUpdating = true
            if (!this.editName || !this.editSize) {
                this.errorUpdate = true
                this.isUpdating = false
            }else{
                var fdata = {name:this.editName, size:this.editSize}
                // this.$store.dispatch('venues/update',fdata).then(()=>{
                this.$store.dispatch('venues/update',{id:this.id,data:fdata}).then(()=>{
                    this.isUpdating = false
                    this.error = false
                    $('#editVenue').modal('hide')
                    swal('Success!','Venue Updated!.','success')
                })
            }
        },
        deleteVenue(id){
            var that = this
            swal({
                title: 'Warning',
                text: 'Are you sure you want to delete Venue ?',
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: '#dc3545',
                confirmButtonText: 'Yes Delete',
                showLoaderOnConfirm: true,
                closeOnConfirm: false
            }, function () {
                that.$store.dispatch('venues/delete',id).then(()=>{
                    swal('Success!','Venue Deleted.','success')
                })
            });
        },
        reset(){
            this.name = null
            this.size = null
        },
    }
  
}
</script>


