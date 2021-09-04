<template>
<div>
  <div class="content-wrapper">
    <div class="content-header row"></div>
    <div class="content-body"><!-- invoice list -->
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <h4>Show Lecture Schedule</h4>
                    </div>
                    <div class="card-body">
                        <form class="form-validate" novalidate="novalidate">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>View Schedule for:</label>
                                            <select name="" class="form-control" id="">
                                                <option value="">-- Select an Option --</option>
                                                <option value="1">Class</option>
                                                <option value="2">Lecturer</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <div class="controls">
                                            <label>Select Class/Lecturer</label>
                                            <input type="time" class="form-control" placeholder="Venue Size">
                                        </div>
                                    </div>
                                    <button class="ml-0 btn btn-success glow" type="submit">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Lecture Time List</h4>
                    </div>
                    <div class="card-body">
                        <section class="invoice-list-wrapper">
                            <div class="table-responsive">
                                <table class="table courses-table table-bordered table-hover" style="width:100%">
                                    <thead class="thead-success">
                                        <tr>
                                            <th>Start Time</th>
                                            <th>End Time</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>7:00 AM</td>
                                            <td>10:00 AM</td>
                                            <td>
                                                <a href="#" data-toggle="modal" data-target="#editVenue" class="invoice-action-edit mr-1">
                                                    <i class="bx bx-edit"></i>
                                                </a>
                                                <a href="app-invoice-edit.html" class="invoice-action-edit cursor-pointer">
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


