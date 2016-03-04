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
        var h0 = new Date(2015, 11, 11)
            , h1 = new Date(2015, 11, 9)
            , h2 = new Date(2015, 11, 3)
            , h3 = new Date(2015, 11, 10)
            , h4 = new Date(2015, 10, 30)
            , h5 = new Date(2015, 11, 16)
            , h6 = new Date(2015, 11, 6)
            , calendar0 = [h0, h1, h2, h3, h4, h5, h6];

        var c0 = new Date(2015, 11, 11);

        var d0 = new Date(2015, 11, 16)
            , d1 = new Date(2015, 11, 17)
            , d2 = new Date(2015, 11, 17)
            , d3 = new Date(2015, 10, 30)
            , d4 = new Date(2015, 12, 1)
            , disabledDates = [d0, d1, d2, d3, d4];

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

            //btnTodayShow: true,
            btnToday: 'Today',
            btnTodayClass: 'button-clear button-dark',

            //btnClearShow: true,
            btnClear: 'Clear',
            btnClearClass: 'button-clear button-dark',

            selectType: 'PERIOD', // SINGLE | PERIOD | MULTI

            tglSelectByWeekShow: false, // true | false (default)
            //tglSelectByWeek: 'By week',
            isSelectByWeek: true, // true (default) | false
            selectByWeekMode: 'NORMAL', // INVERSION (default), NORMAL
            tglSelectByWeekClass: 'toggle-positive',
            titleSelectByWeekClass: 'positive positive-border',

            accessType: 'WRITE', // READ | WRITE
            //errorLanguage: 'EN', // EN | RU

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

            callback: function (dates) {  //Mandatory
                retSelectedDates(dates);
            }
        };

        var retSelectedDates = function (dates) {
            $scope.selectedDates.length = 0;

            if (dates.length !== 0) {
                $scope.isVisible = false;
                $scope.isDisplayDates = true;
                $scope.selectedDates.push(angular.copy(dates[0]));
                $scope.selectedDates.push(angular.copy(dates[(dates.length) - 1]));
            }
        }
    })
// << Controller << main <<

;
