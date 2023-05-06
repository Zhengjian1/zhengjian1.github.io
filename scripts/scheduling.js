$(function (){
    new Vue({
        el: '#vueArea',
        data() {
            return {
                activeNames: ['1'],
                formInline: {
                    type: 1,
                    department: 1,
                    workShop: 1
                },
                searchFormData: {
                    type:{
                        options: [
                            {
                                value: 1,
                                label: '资源视图'
                            },
                            {
                                value: 0,
                                label: '列表视图'
                            }
                        ],
                    },
                    department:{
                        options: [
                            {
                                value: 1,
                                label: '资源视图'
                            }
                        ],
                    },
                    workShop:{
                        options: [
                            {
                                value: 1,
                                label: '05'
                            }
                        ],
                    }

                },
                tagData: {
                    mainProcess: {
                        title: '主工序',
                        data:[
                            { label: '未开工',style: { background: '#eee' }},
                            { label: '执行中',style:{ background: '#8bc34a' }},
                            { label: '暂停',style: {background: '#e2ec23' }},
                            { label: '已报工',style: {background: '#7cfb04' }},
                            { label: '停工',style:{background: '#9e9e9e' }},

                        ]
                    },
                    detailProcess: {
                        title: '明细工序',
                        data:[
                            { label: '未开工',style: { background: '#eee' }},
                            { label: '执行中',style:{ background: '#8bc34a' }},
                            { label: '暂停',style: {background: '#e2ec23' }},
                            { label: '已报工',style: {background: '#7cfb04' }},
                            { label: '异常',style:{background: '#f00' }},

                        ]
                    }
                },
                schedulerData: {
                    sections:[
                        {key:1, label:"101", room_no: "101", room_type: "1 bed", room_status: "Ready", color: "#43a047"},
                        {key:2, label:"102", room_no: "102", room_type: "1 bed", room_status: "Clean up", color: "#ffb300"},
                        {key:3, label:"103", room_no: "103", room_type: "1 bed", room_status: "Ready", color: "#43a047"},
                        {key:4, label:"104", room_no: "104", room_type: "1 bed", room_status: "Ready", color: "#43a047"},
                        {key:5, label:"105", room_no: "105", room_type: "2 beds", room_status: "Dirty", color: "#e53935"},
                        {key:6, label:"201", room_no: "201", room_type: "2 beds", room_status: "Ready", color: "#43a047"},
                        {key:7, label:"202", room_no: "202", room_type: "2 beds", room_status: "Dirty", color: "#e53935"},
                        {key:8, label:"203", room_no: "203", room_type: "1 bed", room_status: "Ready", color: "#43a047"},
                        {key:9, label:"204", room_no: "204", room_type: "1 bed", room_status: "Dirty", color: "#e53935"},
                        {key:10, label:"301", room_no: "301", room_type: "3 beds", room_status: "Ready", color: "#43a047"},
                        {key:11, label:"302", room_no: "302", room_type: "1 bed", room_status: "Clean up", color: "#ffb300"},
                        {key:12, label:"303", room_no: "303", room_type: "1 bed", room_status: "Ready", color: "#43a047"}
                    ],
                    searchInput: '',
                    datePickerVal: this.getFullMonthDay()
                }
            };
        },
        beforeMount: function (){

        },
        mounted: function (){
            scheduler.plugins({
                timeline: true,
                collision: true
            });
            scheduler.locale.labels.timeline_tab = "Timeline";
            scheduler.locale.labels.section_custom="Section";
            scheduler.config.details_on_create=true;

            scheduler.createTimelineView({
                fit_events: true,
                name: "timeline",
                y_property:	"section_id",
                render: 'bar',
                x_unit: "day",
                x_date: "%d",
                x_size: 31,
                x_start:24,
                dy: 52,
                event_dy: 48,
                section_autoheight: false,
                round_position: true,
                y_unit:  this.schedulerData.sections,
                columns: [
                    { label: "辆号",  width: 70, template: function(obj){ return obj.room_no; } },
                    { label: "类型",  width: 90, template: function(obj){ return obj.room_type; } },
                ]
            });

            var eventDateFormat = scheduler.date.date_to_str("%d %M %Y");
            scheduler.templates.event_bar_text = function (start, end, event) {
                var startDate = eventDateFormat(event.start_date);
                var endDate = eventDateFormat(event.end_date);
                return [event.text + "<br />",
                    startDate + " - " + endDate].join("");
            };

            scheduler.init('scheduler_here',new Date(2022,4),"timeline");
            scheduler.parse([
                { start_date: "2022-05-30 09:00", end_date: "2022-05-32 12:00", text:"A-12458", section_id:1},
                { start_date: "2022-05-30 10:00", end_date: "2022-05-34 16:00", text:"A-89411", section_id:2},
                { start_date: "2022-05-30 10:00", end_date: "2022-05-33 14:00", text:"A-64168", section_id:7},
                { start_date: "2022-05-30 16:00", end_date: "2022-05-36 19:00", text:"A-46598", section_id:4},
               
            ]);

            scheduler.config.drag_resize = false;
            scheduler.showLightbox = function(){}
            scheduler.createDataProcessor(function(entity, action, data){

                switch(action) {
                    case "create":

                        console.log("create",data);
                        return new scheduler.Promise(function (resolve, reject) {
                            // $.post(
                            //     "api.php",
                            //     { action: "test", data: data },
                            //     function (result) {
                            //         return resolve({
                            //             action: result.action,
                            //             tid: result.tid,
                            //             data: result.task,
                            //         });
                            //     },
                            //     "json"
                            // );
                        });
                        break;
                    case "update":
                        console.log("update",data);
                        return new scheduler.Promise(function (resolve, reject) {
                            // $.post(
                            //     "api.php",
                            //     { action: "test", data: data },
                            //     function (result) {
                            //         return resolve({ action: result.action });
                            //     },
                            //     "json"
                            // );
                        });
                        break;
                    case "delete":
                        console.log("delete",data);
                        return new scheduler.Promise(function (resolve, reject) {
                            // $.post(
                            //     "api.php",
                            //     { action: "test", data: id },
                            //     function (result) {
                            //         return resolve({ action: result.action });
                            //     },
                            //     "json"
                            // );
                        });
                        break;
                }
            });
        },
        methods: {
            getMonthDayNum(){
                const currentDate = new Date();
                const currentY = currentDate.getFullYear();
                const currentM = currentDate.getMonth()+1;
                const MonthDayNum = new Date(currentY,currentM,0).getDate();
                return MonthDayNum;
            },
            getFullMonthDay(){
                const currentDate = new Date();
                const currentY = currentDate.getFullYear();
                const currentM = currentDate.getMonth()+1;
                return currentY + '-' + currentM + '-' + this.getMonthDayNum();
            },
            onSubmit() {
                console.log('submit!',this.formInline);
            },
            resetForm(formName) {
                console.log(formName)
                this.$refs[formName].resetFields();
            },

            handleSchedulerSearch(){


            },
            handleDatePicker(){


            }
        }
    })
})