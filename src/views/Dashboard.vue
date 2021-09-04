<template>
<div>
  <div class="content-wrapper">
    <div class="content-header row">
    </div>
    <div class="content-body"><!-- Dashboard Ecommerce Starts -->
        <section id="dashboard-ecommerce">
        <div class="row">
            <!-- Greetings Content Starts -->
            <div class="col-xl-4 col-md-6 col-12 dashboard-greetings">
            <div class="card">
                <div class="card-header">
                <h3 class="text-primary font-large-0 text-bold-500">Aamusted Lectures Schedular</h3>
                <h3 class="greeting-text">Welcome {{profile.username}}!</h3>
                <p class="mb-0">
                    This is the official Aamusted Lecture schedular Control Panel.
                    In here you are allowed to schedule lectures to individual classess with assigned lecture rooms
                </p>
                </div>
            </div>
            </div>
            <div class="col-xl-8 col-12 dashboard-users">
            <div class="row  ">
                <!-- Statistics Cards Starts -->
                <div class="col-12">
                <div class="row">
                    <div class="col-sm-4 col-12 dashboard-users-success">
                    <div class="card text-center">
                        <div class="card-body py-1">
                        <div class="badge-circle badge-circle-lg badge-circle-light-success mx-auto mb-50">
                            <i class="bx bx-user font-medium-5"></i>
                        </div>
                        <div class="text-muted line-ellipsis">Registered Lecturers</div>
                        <h3 class="mb-0">{{lecturers.length > 0 ? lecturers.length : 0 }}</h3>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-4 col-12 dashboard-users-danger">
                    <div class="card text-center">
                        <div class="card-body py-1">
                        <div class="badge-circle badge-circle-lg badge-circle-light-danger mx-auto mb-50">
                            <i class="bx bx-layer font-medium-5"></i>
                        </div>
                        <div class="text-muted line-ellipsis">Registered Courses</div>
                        <h3 class="mb-0">{{courses.length > 0 ? courses.length : 0 }}</h3>
                        </div>
                    </div>
                    </div>
                    <div class="col-sm-4 col-12 dashboard-users-warning">
                    <div class="card text-center">
                        <div class="card-body py-1">
                        <div class="badge-circle badge-circle-lg badge-circle-light-warning mx-auto mb-50">
                            <i class="bx bx-buildings font-medium-5"></i>
                        </div>
                        <div class="text-muted line-ellipsis">Lecture Rooms</div>
                        <h3 class="mb-0">{{venues.length > 0 ? venues.length : 0 }}</h3>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <!-- Revenue Growth Chart Starts -->
            </div>
            </div>
        </div>
        <div class="row">
            <!-- Latest Update Starts -->
            <div class="col-xl-4 col-md-6 col-12 dashboard-latest-update">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center pb-50">
                    <h4 class="card-title">Latest Created Courses</h4>
                </div>
                <div class="card-body p-0 pb-1">
                    <ul class="list-group list-group-flush" v-if="courses.length > 0">
                        <li v-for="course in (courses).slice(0,5)" :key="course.id" class="list-group-item list-group-item-action border-0 d-flex align-items-center justify-content-between">
                            <div class="list-left d-flex">
                                <div class="list-icon mr-1">
                                    <div class="avatar bg-rgba-primary m-0">
                                        <div class="avatar-content"><i class="bx bxs-zap text-primary font-size-base"></i></div>
                                    </div>
                                </div>
                                <div class="list-content">
                                    <span class="list-title">{{course.title}}</span>
                                    <small class="text-muted d-block">Level {{course.level}}</small>
                                </div>
                            </div>
                            <span>{{course.code}}</span>
                        </li>
                    </ul>
                    <ul v-else>
                        <li>No Course Created</li>
                    </ul>
                </div>
            </div>
            </div>

            <!-- Marketing Campaigns Starts -->
            <div class="col-xl-8 col-12 dashboard-marketing-campaign">
            <div class="card marketing-campaigns">
                <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="card-title">Available venues &amp; Times</h4>
                <button class="btn btn-sm btn-primary glow mt-md-2 mb-1">View All</button>
                </div>
                <div class="table-responsive">
                <!-- table start -->
                <table id="table-marketing-campaigns" class="table table-borderless table-marketing-campaigns mb-0">
                    <thead>
                    <tr>
                        <th>Venue</th>
                        <th>Time</th>
                        <th>Day</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="py-1 line-ellipsis">
                        <img class="rounded-circle mr-1" src="/app-assets/images/icon/fs.png" alt="card" height="24"
                            width="24">Fastrack Watches
                        </td>
                        <td class="py-1">7 courses</td>
                        <td class="text-success py-1">Active</td>
                    </tr>
                    </tbody>
                </table>
                <!-- table ends -->
                </div>
            </div>
            </div>
        </div>
        </section>
        <!-- Dashboard Ecommerce ends -->

    </div>
  </div>

</div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'

import { mapState } from "vuex";
export default {
  name: 'Dashboard',

    created(){
        this.$store.dispatch('user/profile')
        this.$store.dispatch('lecturers/all')
        this.$store.dispatch('courses/all')
        this.$store.dispatch('venues/all')
    },

    computed:{
        ...mapState('lecturers',['lecturers']),
        ...mapState('courses',['courses']),
        ...mapState('venues',['venues']),
        ...mapState('user',['profile'])
    }
  
}
</script>

