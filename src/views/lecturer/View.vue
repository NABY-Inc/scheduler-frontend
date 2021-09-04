<template>
<div class="modal fade" id="showLecturer" tabindex="-1" role="dialog" aria-labelledby="showLecturerTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
        <div class="modal-content" v-if="$parent.showLecturer">
            <div class="modal-body">
                <section class="users-view">
                    <!-- users view media object start -->
                    <div class="row">
                        <div class="col-12 col-sm-7">
                            <div class="media mb-2">
                            <a class="mr-1" href="javascript:void(0);">
                                <img :src="domain + 'uploads/lecturers/'+$parent.selectedLecturer.profile" alt="users view avatar"
                                class="users-avatar-shadow rounded-circle" height="64" width="64">
                            </a>
                            <div class="media-body pt-25">
                                <h4 class="media-heading"><span class="users-view-name">{{$parent.selectedLecturer.name}} </span></h4>
                                <span>Code:</span>
                                <span class="users-view-id">{{$parent.selectedLecturer.code}}</span>
                            </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-5 px-0 d-flex justify-content-end align-items-center px-1 mb-2">
                            <a  class="btn btn-sm btn-danger ml-50" data-dismiss="modal" aria-label="Close">Close</a>
                        </div>
                    </div>
                    <!-- users view media object ends -->
                    <!-- users view card data start -->
                    <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-md-4">
                                <table class="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td>Department:</td>
                                            <td class="users-view-role">{{$parent.selectedLecturer.department.name}}</td>
                                        </tr>
                                        <tr>
                                            <td>Registered:</td>
                                            <td>{{moment($parent.selectedLecturer.created_at).format('Do MMM, YYYY')}}</td>
                                        </tr>
                                        <tr>
                                            <td>Status:</td>
                                            <td><span :class="$parent.selectedLecturer.status == 1  ? 'badge badge-light-success users-view-status':'badge badge-light-danger users-view-status'">
                                                {{$parent.selectedLecturer.status == 1  ? 'Active' : 'Inactive'}}</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-12 col-md-8">
                                <div class="table-responsive">
                                    <table class="table mb-0">
                                        <thead>
                                            <tr>
                                                <th colspan="3">Course(s) Incharge</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="course in $parent.selectedLecturer.lecturer_courses" :key="course.id">
                                                <td>{{course.course.code}}</td>
                                                <td>{{course.course.title}}</td>
                                                <td>Level {{course.course.level}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <!-- users view card data ends -->
                    <!-- users view card details start -->
                    <div class="card">
                    <div class="card-body">
                        <div class="row bg-primary bg-lighten-5 rounded mb-2 mx-25 text-center text-lg-left">
                            <div class="col-12 col-sm-12 p-0">
                                <h6 class="text-center text-primary mb-0"><span class="font-large-1 align-middle">Lecture Schedule</span></h6>
                            </div>
                        </div>
                        <div class="col-12">
                            <table class="table table-bordered table-responsive" style="white-space: nowrap;width:100%">
                                <thead class="text-center">
                                    <tr>
                                        <th scope="col">Time</th>
                                        <th scope="col">Monday</th>
                                        <th scope="col">Tuesday</th>
                                        <th scope="col">Wednesday</th>
                                        <th scope="col">Thursday</th>
                                        <th scope="col">Friday</th>
                                    </tr>
                                </thead>
                                <tbody class="text-center">
                                    <tr>
                                        <td>7:00 - 10:00</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <span style="font-size: 16px" class="badge badge-sm badge-light-primary">ITC 243 - ITE 200A</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10:00 - 1:00</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <span style="font-size: 16px" class="badge badge-sm badge-light-primary">ITC 452 - ITE 400A</span>
                                        </td>
                                        <td></td>
                                        <td></td>
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
                                            <span style="font-size: 16px" class="badge badge-sm badge-light-primary">ITC 121 - ITE 100C</span>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                    <!-- users view card details ends -->
                </section>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from "vuex";
var moment = require('moment');
export default {
    name: 'Show_Lecturer',

    data(){
        return{
            moment:moment,
            domain:'http://localhost/schedular/public/'
        }
    },

    methods:{

    }
}
</script>