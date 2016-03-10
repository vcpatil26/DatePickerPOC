// Ionic Starter App
ionic.Gestures.gestures.Hold.defaults.hold_threshold = 20;

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic-multi-date-picker'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

// >> Controller >> main >>
    .controller('mainCtrl', function ($scope) {

        var weekDaysList = ["S", "M", "T", "W", "T", "F", "S"];
        var monthList = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

        var disabledDates = [];

        
         $scope.selectedDates = [];
        $scope.placeholder = 'Select the dates';
        $scope.isVisible = true;
        $scope.isDisplayDates = false;

        $scope.datepickerObject = {
            templateType: 'POPUP', // POPUP | MODAL
            modalFooterClass: 'bar-light',
            //header: 'multi-date-picker',
            headerClass: 'royal-bg light',

            btnsIsNative: false,

            btnOk: 'OK',
            btnOkClass: 'button-clear cal-green',

            btnCancel: 'Cancel',
            btnCancelClass: 'button-clear button-dark',

            btnTodayShow: false,

            btnClearShow: false,

            selectType: 'PERIOD', // SINGLE | PERIOD | MULTI

            tglSelectByWeekShow: false, // true | false (default)
            isSelectByWeek: true, // true (default) | false
            selectByWeekMode: 'NORMAL', // INVERSION (default), NORMAL
            tglSelectByWeekClass: 'toggle-positive',
            titleSelectByWeekClass: 'positive positive-border',

            accessType: 'WRITE', // READ | WRITE

            //fromDate: new Date(2015, 9),
            //toDate: new Date(2016, 1),

            selectedDates: $scope.selectedDates,
            viewMonth: $scope.selectedDates,
            disabledDates: disabledDates,

            conflictSelectedDisabled: 'DISABLED', // SELECTED | DISABLED

            closeOnSelect: false,

            mondayFirst: false,
            weekDaysList: weekDaysList,
            monthList: monthList,

           callback: function(dates) {
              if (dates.length > 0) {
                $scope.selectedDates[0] = dates[0];
                $scope.selectedDates[1] = dates[1];
                setSelectedDates(moment(dates[0]), moment(dates[1]));
              }
            }
        };

        function setSelectedDates(startDate, endDate) {
          $scope.formattedDates = [
            startDate.format("MM/DD/YYYY"),
            endDate.format("MM/DD/YYYY")
          ].join(' - ');
        }
    })
// << Controller << main <<

;
