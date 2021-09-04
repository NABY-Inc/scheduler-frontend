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
                            Add New Schedule
                        </a>
                        <!-- datatable start -->
                        <div class="table-responsive">
                            <table class="table table-bordered table-responsive" style="width:100%">
                                <thead class="text-center">
                                    <tr>
                                        <th style="white-space: nowrap;width:100%">Time</th>
                                        <th style="white-space: pre-wrap">Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thursday</th>
                                        <th>Friday</th>
                                    </tr>
                                </thead>
                                <tbody class="text-center">
                                    <tr>
                                        <td>7:00 - 10:00</td>
                                        <td>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                        </td>
                                        <td>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                        </td>
                                        <td>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                        </td>
                                        <td>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                        </td>
                                        <td>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10:00 - 1:00</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                        </td>
                                        <td></td>
                                        <td>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2:00 - 5:00</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5:00 - 8:00</td>
                                        <td></td>
                                        <td>
                                            <span style="font-size: 14px" class="badge badge-sm badge-light-primary p-1 mb-1">
                                                ITC 243 - ITE 200A <hr> Dr. Amuzu
                                            </span>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- datatable ends -->
                    </div>
                </div>
            </div>
        </section>
        <!-- users list ends -->

        <!--Add Lecturer Modal -->
        <div class="modal fade text-left" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-full">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <h4 class="modal-title text-white" id="addNewLabel">Schedule New Lecture </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="bx bx-x"></i>
                        </button>
                    </div>
                    <form action="#">
                        <div class="modal-body">
                            <form class="form-validate" novalidate="novalidate">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <div class="form-group">
                                            <div class="controls">
                                                <label>Code</label>
                                                <input type="text" class="form-control" placeholder="Lecturer Code">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Department</label>
                                            <select class="form-control">
                                                <option>Active</option>
                                                <option>Banned</option>
                                                <option>Close</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label>Course(s) Incharge</label>
                                            <select class="form-control">
                                                <option>Active</option>
                                                <option>Banned</option>
                                                <option>Close</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="form-group">
                                            <div class="controls">
                                                <label>Name</label>
                                                <input type="text" class="form-control" placeholder="Lecturer Name">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Status</label>
                                            <select class="form-control">
                                                <option>Active</option>
                                                <option>Banned</option>
                                                <option>Close</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <div class="controls">
                                                <label>Profile</label>
                                                <input type="file" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="table-responsive">
                                            <table class="table mt-1">
                                                <thead>
                                                    <tr>
                                                        <th colspan="3">Selected Courses</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ITC 241</td>
                                                        <td>Technology Entrepreneurship</td>
                                                        <td>ITE 300</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light-secondary" data-dismiss="modal">
                                <i class="bx bx-x d-block d-sm-none"></i>
                                <span class="d-none d-sm-block">Close</span>
                            </button>
                            <button type="button" class="btn btn-primary ml-1 glow" data-dismiss="modal">
                                <i class="bx bx-check d-block d-sm-none"></i>
                                <span class="d-none d-sm-block">Save</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <!--Edit Lecturer Modal -->
        <div class="modal fade text-left" id="editLecturer" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <h4 class="modal-title text-white" id="editLabel">Edit Lecturer </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <i class="bx bx-x"></i>
                        </button>
                    </div>
                    <form action="#">
                        <div class="modal-body">
                            <form class="form-validate" novalidate="novalidate">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <div class="form-group">
                                            <div class="controls">
                                                <label>Code</label>
                                                <input type="text" class="form-control" placeholder="Lecturer Code">
                                            </div>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Department</label>
                                            <select class="form-control">
                                                <option>Active</option>
                                                <option>Banned</option>
                                                <option>Close</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label>Course(s) Incharge</label>
                                            <select class="form-control">
                                                <option>Active</option>
                                                <option>Banned</option>
                                                <option>Close</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="form-group">
                                            <div class="controls">
                                                <label>Name</label>
                                                <input type="text" class="form-control" placeholder="Lecturer Name">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Status</label>
                                            <select class="form-control">
                                                <option>Active</option>
                                                <option>Banned</option>
                                                <option>Close</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <div class="controls">
                                                <label>Profile</label>
                                                <input type="file" class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="table-responsive">
                                            <table class="table mt-1">
                                                <thead>
                                                    <tr>
                                                        <th colspan="3">Selected Courses</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>ITC 241</td>
                                                        <td>Technology Entrepreneurship</td>
                                                        <td>ITE 300</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light-secondary" data-dismiss="modal">
                                <i class="bx bx-x d-block d-sm-none"></i><span class="d-none d-sm-block">Close</span>
                            </button>
                            <button type="button" class="btn btn-primary ml-1 glow" data-dismiss="modal">
                                <i class="bx bx-check d-block d-sm-none"></i><span class="d-none d-sm-block">Update</span>
                            </button>
                            <button type="button" class="btn btn-danger ml-1 glow" data-dismiss="modal">
                                <i class="bx bx-x d-block d-sm-none"></i><span class="d-none d-sm-block">Delete</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</div>

</div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'

export default {
  name: 'Courses',
  
}
</script>


