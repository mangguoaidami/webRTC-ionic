function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-web-rtcview-web-rtcview-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/web-rtcview/web-rtcview.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/web-rtcview/web-rtcview.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWebRtcviewWebRtcviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>会议详情</ion-title>\n    <ion-button slot=\"end\">\n\n    </ion-button>\n\n  </ion-toolbar>\n\n</ion-header> -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>会议详情</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content  class=\"contener\">\n  \n  <ion-list class=\"conference_list\">\n    <ion-item-sliding>\n      <div class=\"conference_itemTitle\">\n        <p class=\"h4\">200330-500kV变压器出厂签收会议</p>\n        <div class=\"conference_itemContent\">\n          <div class=\"conference_itemContentinnerhead\">\n            <div class=\"conference_avatar\">\n              <img src=\"./../../../assets/icon/initCAvatar.png\">\n            <p>张京华</p>\n            </div>\n            \n            <div class=\"conference_words\">\n              <p class=\"ri\">已有3份文档</p>\n            </div>\n          </div>\n          <div class=\"innercon\">\n            <div class=\"le_text\">\n              <h2>16:00</h2>\n              <p>2020年4月3日</p>\n            </div>\n            <div class=\"mid_text\">\n              <div class=\"le_bar\"></div>\n              <div class=\"ri_bar\"></div>\n              <p class=\"time\">1小时30分</p>\n              <p class=\"start\">待开始</p>\n            </div>\n            <div class=\"ri_text\">\n              <h2>17:30</h2>\n              <p>2020年4月3日</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"conference_itemFooter\">\n          <p>会议号</p>\n          <p>682 689 996</p>\n        </div>\n      </div>\n      \n    </ion-item-sliding>\n  \n  </ion-list>\n\n  <div class=\"conference_peope\">\n    <div class=\"title\">\n      <p>参会人员 (3人)</p>\n    </div>\n    <div class=\"conference_peopeitem\">\n      <div class=\"add\">\n        <div class=\"add_boxer\">\n          <img src=\"./../../../assets/icon/addPeope.png\">\n        </div>\n        <p>添加人员</p>\n      </div>\n      <div class=\"right_list_peope\">\n        <div class=\"peopeItem\">\n          <div class=\"avatar\">\n            <img src=\"./../../../assets/icon/avatar3.png\">\n          </div>\n          <p>张京华</p>\n        </div>\n        <div class=\"peopeItem\">\n          <div class=\"avatar\">\n            <img src=\"./../../../assets/icon/avatar2.png\">\n          </div>\n          <p>张京华</p>\n        </div>\n        <div class=\"peopeItem\">\n          <div class=\"avatar\">\n            <img src=\"./../../../assets/icon/initCAvatar.png\">\n          </div>\n          <p>张京华</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/web-rtcview/web-rtcview.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/web-rtcview/web-rtcview.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWebRtcviewWebRtcviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contener {\n  --ion-background-color:#F5F5F5;\n}\n.contener .conference_list {\n  background-color: #fff;\n  margin-top: 1.3rem;\n  padding: 0 1.6rem;\n}\n.contener .conference_list .conference_itemTitle {\n  display: flex;\n  flex-direction: column;\n}\n.contener .conference_list .conference_itemTitle .h4 {\n  height: 3.8rem;\n  padding: 0;\n  margin: 0;\n  line-height: 3.8rem;\n  color: #595959;\n  font-size: 1.1rem;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent {\n  border-top: 0.04rem solid #d9d9d9;\n  border-bottom: 1px solid #d9d9d9;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .conference_itemContentinnerhead {\n  display: flex;\n  flex-direction: row;\n  height: 1.7rem;\n  margin: 1.2rem 0;\n  display: flex;\n  justify-content: space-between;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .conference_itemContentinnerhead .conference_avatar {\n  flex: 1;\n  display: flex;\n  align-items: center;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .conference_itemContentinnerhead .conference_avatar img {\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .conference_itemContentinnerhead .conference_avatar p {\n  height: 1.32rem;\n  font-size: 0.9rem;\n  font-family: Microsoft YaHei;\n  font-weight: 400;\n  line-height: 1.32rem;\n  color: #595959;\n  margin: 0;\n  padding: 0;\n  margin-left: 0.4rem;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .conference_itemContentinnerhead .conference_words {\n  flex: 1;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .conference_itemContentinnerhead .conference_words .ri {\n  font-size: 0.9rem;\n  margin: 0;\n  padding: 0;\n  text-align: right;\n  color: #2D9670;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .innercon {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 0.7rem;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .innercon .le_text h2, .contener .conference_list .conference_itemTitle .conference_itemContent .innercon .ri_text h2 {\n  height: 2.39rem;\n  --font-size:2rem;\n  font-weight: 400;\n  line-height: 2.39rem;\n  color: #595959;\n  margin: 0;\n  padding: 0;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .innercon .le_text p, .contener .conference_list .conference_itemTitle .conference_itemContent .innercon .ri_text p {\n  font-size: 0.39rem;\n  color: #595959;\n  margin: 0;\n  padding: 0;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .innercon .mid_text {\n  position: relative;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .innercon .mid_text .time {\n  width: 4.71rem;\n  height: 1.04rem;\n  font-size: 0.79rem;\n  font-family: Microsoft YaHei;\n  font-weight: 400;\n  line-height: 1.04rem;\n  color: #2d9670;\n  background-color: #EDFCF4;\n  text-align: center;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .innercon .mid_text .start {\n  width: 3.36rem;\n  height: 1.07rem;\n  font-size: 0.79rem;\n  font-family: Roboto;\n  font-weight: 400;\n  line-height: 0.96rem;\n  color: #ff6c60;\n  padding: 0;\n  margin: 0 auto;\n  text-align: center;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .innercon .mid_text .le_bar {\n  width: 2rem;\n  height: 0rem;\n  border-bottom: 0.04rem solid #d9d9d9;\n  position: absolute;\n  left: -3rem;\n  top: 1.2rem;\n}\n.contener .conference_list .conference_itemTitle .conference_itemContent .innercon .mid_text .ri_bar {\n  width: 2rem;\n  height: 0rem;\n  border-bottom: 0.04rem solid #d9d9d9;\n  position: absolute;\n  right: -3rem;\n  top: 1.2rem;\n}\n.contener .conference_list .conference_itemTitle .conference_itemFooter {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.contener .conference_peope {\n  background-color: #ffffff;\n  margin-top: 1rem;\n  padding: 1.29rem 1.43rem;\n}\n.contener .conference_peope .title {\n  border-bottom: 1px solid #d9d9d9;\n}\n.contener .conference_peope .title p {\n  margin-bottom: 1.25;\n  margin-top: 0;\n  padding: 0;\n}\n.contener .conference_peope .conference_peopeitem {\n  display: flex;\n  padding-top: 1.4rem;\n}\n.contener .conference_peope .conference_peopeitem .add .add_boxer {\n  width: 3.3rem;\n  height: 3.3rem;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 1px solid #d9d9d9;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n.contener .conference_peope .conference_peopeitem .add .add_boxer img {\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.contener .conference_peope .conference_peopeitem .add p {\n  font-size: 1rem;\n  color: #595959;\n  margin-top: 0.25rem;\n  margin-bottom: 0;\n}\n.contener .conference_peope .conference_peopeitem .right_list_peope {\n  display: flex;\n  flex: 1;\n  flex-direction: row-reverse;\n}\n.contener .conference_peope .conference_peopeitem .right_list_peope .peopeItem {\n  display: flex;\n  width: 4rem;\n  flex-direction: column;\n}\n.contener .conference_peope .conference_peopeitem .right_list_peope .peopeItem .avatar {\n  width: 3.3rem;\n  height: 3.3rem;\n  border-radius: 50%;\n  display: flex;\n  overflow: hidden;\n  background-color: #ccc;\n  align-items: center;\n  justify-content: center;\n}\n.contener .conference_peope .conference_peopeitem .right_list_peope .peopeItem .avatar img {\n  width: 3.3rem;\n  height: 3.3rem;\n}\n.contener .conference_peope .conference_peopeitem .right_list_peope .peopeItem p {\n  font-size: 1rem;\n  color: #595959;\n  margin-top: 0.25rem;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2ViLXJ0Y3ZpZXcvRDpcXENYcHJvamVjdFxcbXlGaXJzdEFwcGEvc3JjXFxhcHBcXHBhZ2VzXFx3ZWItcnRjdmlld1xcd2ViLXJ0Y3ZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dlYi1ydGN2aWV3L3dlYi1ydGN2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksOEJBQUE7QUNBSjtBRENJO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1I7QURBUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ0VaO0FERFk7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0doQjtBRERZO0VBQ0ksaUNBQUE7RUFDQSxnQ0FBQTtBQ0doQjtBREZnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0lwQjtBREhvQjtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNLeEI7QURKd0I7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0osZ0JBQUE7QUNNeEI7QURKd0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ001QjtBRERvQjtFQUNJLE9BQUE7QUNHeEI7QURGd0I7RUFDSSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSTVCO0FERWdCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ0FwQjtBREV3QjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNBNUI7QURFd0I7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0E1QjtBREdvQjtFQUNJLGtCQUFBO0FDRHhCO0FERXdCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQTVCO0FERXdCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQTVCO0FER3dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNENUI7QURHd0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0Q1QjtBRE1ZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNKaEI7QURTSTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQ1BSO0FEUVE7RUFDSSxnQ0FBQTtBQ05aO0FET1k7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDTGhCO0FEUVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNOWjtBRFFnQjtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNOcEI7QURRd0I7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ041QjtBRFNnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDUSxnQkFBQTtBQ1A1QjtBRFdZO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtBQ1RoQjtBRFVnQjtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNScEI7QURTb0I7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDUHhCO0FEUXdCO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNONUI7QURTb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ1EsZ0JBQUE7QUNQaEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93ZWItcnRjdmlldy93ZWItcnRjdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGVuZXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNGNUY1RjU7XHJcbiAgICAuY29uZmVyZW5jZV9saXN0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMS4zcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMS42cmVtO1xyXG4gICAgICAgIC5jb25mZXJlbmNlX2l0ZW1UaXRsZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLmg0e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjhyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMuOHJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbmZlcmVuY2VfaXRlbUNvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAwLjA0cmVtIHNvbGlkIHJnYmEoMjE3LDIxNywyMTcsMSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTcsMjE3LDIxNywxKTtcclxuICAgICAgICAgICAgICAgIC5jb25mZXJlbmNlX2l0ZW1Db250ZW50aW5uZXJoZWFke1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEuMnJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb25mZXJlbmNlX2F2YXRhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDoxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxLjMycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5Ok1pY3Jvc29mdCBZYUhlaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjEuMzJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDg5LDg5LDg5LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbmZlcmVuY2Vfd29yZHN7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6MTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJEOTY3MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbm5lcmNvbntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlX3RleHQsIC5yaV90ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyLjM5cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1mb250LXNpemU6MnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjIuMzlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDg5LDg5LDg5LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjAuMzlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDg5LDg5LDg5LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubWlkX3RleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0LjcxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEuMDRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MC43OXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5Ok1pY3Jvc29mdCBZYUhlaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjEuMDRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpyZ2JhKDQ1LDE1MCwxMTIsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURGQ0Y0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMuMzZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MS4wN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjc5cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6Um9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MC45NnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMjU1LDEwOCw5NiwxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5sZV9iYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjA0cmVtIHNvbGlkIHJnYmEoMjE3LDIxNywyMTcsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yaV9iYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjByZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjA0cmVtIHNvbGlkIHJnYmEoMjE3LDIxNywyMTcsMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogLTNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY29uZmVyZW5jZV9pdGVtRm9vdGVye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbmZlcmVuY2VfcGVvcGV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMjlyZW0gMS40M3JlbTtcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIxNywyMTcsMjE3LDEpO1xyXG4gICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb25mZXJlbmNlX3Blb3BlaXRlbXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEuNHJlbTtcclxuICAgICAgICAgICAgLmFkZHtcclxuICAgICAgICAgICAgICAgIC5hZGRfYm94ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxNywyMTcsMjE3LDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yaWdodF9saXN0X3Blb3Ble1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAucGVvcGVJdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAuYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMy4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMy4zcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufSIsIi5jb250ZW5lciB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0Y1RjVGNTtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMS4zcmVtO1xuICBwYWRkaW5nOiAwIDEuNnJlbTtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9saXN0IC5jb25mZXJlbmNlX2l0ZW1UaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGVuZXIgLmNvbmZlcmVuY2VfbGlzdCAuY29uZmVyZW5jZV9pdGVtVGl0bGUgLmg0IHtcbiAgaGVpZ2h0OiAzLjhyZW07XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDMuOHJlbTtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX2xpc3QgLmNvbmZlcmVuY2VfaXRlbVRpdGxlIC5jb25mZXJlbmNlX2l0ZW1Db250ZW50IHtcbiAgYm9yZGVyLXRvcDogMC4wNHJlbSBzb2xpZCAjZDlkOWQ5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q5ZDlkOTtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9saXN0IC5jb25mZXJlbmNlX2l0ZW1UaXRsZSAuY29uZmVyZW5jZV9pdGVtQ29udGVudCAuY29uZmVyZW5jZV9pdGVtQ29udGVudGlubmVyaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMS43cmVtO1xuICBtYXJnaW46IDEuMnJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGVuZXIgLmNvbmZlcmVuY2VfbGlzdCAuY29uZmVyZW5jZV9pdGVtVGl0bGUgLmNvbmZlcmVuY2VfaXRlbUNvbnRlbnQgLmNvbmZlcmVuY2VfaXRlbUNvbnRlbnRpbm5lcmhlYWQgLmNvbmZlcmVuY2VfYXZhdGFyIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9saXN0IC5jb25mZXJlbmNlX2l0ZW1UaXRsZSAuY29uZmVyZW5jZV9pdGVtQ29udGVudCAuY29uZmVyZW5jZV9pdGVtQ29udGVudGlubmVyaGVhZCAuY29uZmVyZW5jZV9hdmF0YXIgaW1nIHtcbiAgd2lkdGg6IDEuN3JlbTtcbiAgaGVpZ2h0OiAxLjdyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9saXN0IC5jb25mZXJlbmNlX2l0ZW1UaXRsZSAuY29uZmVyZW5jZV9pdGVtQ29udGVudCAuY29uZmVyZW5jZV9pdGVtQ29udGVudGlubmVyaGVhZCAuY29uZmVyZW5jZV9hdmF0YXIgcCB7XG4gIGhlaWdodDogMS4zMnJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtZmFtaWx5OiBNaWNyb3NvZnQgWWFIZWk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjMycmVtO1xuICBjb2xvcjogIzU5NTk1OTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tbGVmdDogMC40cmVtO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX2xpc3QgLmNvbmZlcmVuY2VfaXRlbVRpdGxlIC5jb25mZXJlbmNlX2l0ZW1Db250ZW50IC5jb25mZXJlbmNlX2l0ZW1Db250ZW50aW5uZXJoZWFkIC5jb25mZXJlbmNlX3dvcmRzIHtcbiAgZmxleDogMTtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9saXN0IC5jb25mZXJlbmNlX2l0ZW1UaXRsZSAuY29uZmVyZW5jZV9pdGVtQ29udGVudCAuY29uZmVyZW5jZV9pdGVtQ29udGVudGlubmVyaGVhZCAuY29uZmVyZW5jZV93b3JkcyAucmkge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMyRDk2NzA7XG59XG4uY29udGVuZXIgLmNvbmZlcmVuY2VfbGlzdCAuY29uZmVyZW5jZV9pdGVtVGl0bGUgLmNvbmZlcmVuY2VfaXRlbUNvbnRlbnQgLmlubmVyY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogMC43cmVtO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX2xpc3QgLmNvbmZlcmVuY2VfaXRlbVRpdGxlIC5jb25mZXJlbmNlX2l0ZW1Db250ZW50IC5pbm5lcmNvbiAubGVfdGV4dCBoMiwgLmNvbnRlbmVyIC5jb25mZXJlbmNlX2xpc3QgLmNvbmZlcmVuY2VfaXRlbVRpdGxlIC5jb25mZXJlbmNlX2l0ZW1Db250ZW50IC5pbm5lcmNvbiAucmlfdGV4dCBoMiB7XG4gIGhlaWdodDogMi4zOXJlbTtcbiAgLS1mb250LXNpemU6MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDIuMzlyZW07XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29udGVuZXIgLmNvbmZlcmVuY2VfbGlzdCAuY29uZmVyZW5jZV9pdGVtVGl0bGUgLmNvbmZlcmVuY2VfaXRlbUNvbnRlbnQgLmlubmVyY29uIC5sZV90ZXh0IHAsIC5jb250ZW5lciAuY29uZmVyZW5jZV9saXN0IC5jb25mZXJlbmNlX2l0ZW1UaXRsZSAuY29uZmVyZW5jZV9pdGVtQ29udGVudCAuaW5uZXJjb24gLnJpX3RleHQgcCB7XG4gIGZvbnQtc2l6ZTogMC4zOXJlbTtcbiAgY29sb3I6ICM1OTU5NTk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9saXN0IC5jb25mZXJlbmNlX2l0ZW1UaXRsZSAuY29uZmVyZW5jZV9pdGVtQ29udGVudCAuaW5uZXJjb24gLm1pZF90ZXh0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX2xpc3QgLmNvbmZlcmVuY2VfaXRlbVRpdGxlIC5jb25mZXJlbmNlX2l0ZW1Db250ZW50IC5pbm5lcmNvbiAubWlkX3RleHQgLnRpbWUge1xuICB3aWR0aDogNC43MXJlbTtcbiAgaGVpZ2h0OiAxLjA0cmVtO1xuICBmb250LXNpemU6IDAuNzlyZW07XG4gIGZvbnQtZmFtaWx5OiBNaWNyb3NvZnQgWWFIZWk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjA0cmVtO1xuICBjb2xvcjogIzJkOTY3MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERkNGNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX2xpc3QgLmNvbmZlcmVuY2VfaXRlbVRpdGxlIC5jb25mZXJlbmNlX2l0ZW1Db250ZW50IC5pbm5lcmNvbiAubWlkX3RleHQgLnN0YXJ0IHtcbiAgd2lkdGg6IDMuMzZyZW07XG4gIGhlaWdodDogMS4wN3JlbTtcbiAgZm9udC1zaXplOiAwLjc5cmVtO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMC45NnJlbTtcbiAgY29sb3I6ICNmZjZjNjA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVuZXIgLmNvbmZlcmVuY2VfbGlzdCAuY29uZmVyZW5jZV9pdGVtVGl0bGUgLmNvbmZlcmVuY2VfaXRlbUNvbnRlbnQgLmlubmVyY29uIC5taWRfdGV4dCAubGVfYmFyIHtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMHJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMC4wNHJlbSBzb2xpZCAjZDlkOWQ5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zcmVtO1xuICB0b3A6IDEuMnJlbTtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9saXN0IC5jb25mZXJlbmNlX2l0ZW1UaXRsZSAuY29uZmVyZW5jZV9pdGVtQ29udGVudCAuaW5uZXJjb24gLm1pZF90ZXh0IC5yaV9iYXIge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAwcmVtO1xuICBib3JkZXItYm90dG9tOiAwLjA0cmVtIHNvbGlkICNkOWQ5ZDk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zcmVtO1xuICB0b3A6IDEuMnJlbTtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9saXN0IC5jb25mZXJlbmNlX2l0ZW1UaXRsZSAuY29uZmVyZW5jZV9pdGVtRm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX3Blb3BlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZzogMS4yOXJlbSAxLjQzcmVtO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX3Blb3BlIC50aXRsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkOWQ5O1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX3Blb3BlIC50aXRsZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9wZW9wZSAuY29uZmVyZW5jZV9wZW9wZWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMS40cmVtO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX3Blb3BlIC5jb25mZXJlbmNlX3Blb3BlaXRlbSAuYWRkIC5hZGRfYm94ZXIge1xuICB3aWR0aDogMy4zcmVtO1xuICBoZWlnaHQ6IDMuM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9wZW9wZSAuY29uZmVyZW5jZV9wZW9wZWl0ZW0gLmFkZCAuYWRkX2JveGVyIGltZyB7XG4gIHdpZHRoOiAxLjJyZW07XG4gIGhlaWdodDogMS4ycmVtO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX3Blb3BlIC5jb25mZXJlbmNlX3Blb3BlaXRlbSAuYWRkIHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX3Blb3BlIC5jb25mZXJlbmNlX3Blb3BlaXRlbSAucmlnaHRfbGlzdF9wZW9wZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9wZW9wZSAuY29uZmVyZW5jZV9wZW9wZWl0ZW0gLnJpZ2h0X2xpc3RfcGVvcGUgLnBlb3BlSXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA0cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX3Blb3BlIC5jb25mZXJlbmNlX3Blb3BlaXRlbSAucmlnaHRfbGlzdF9wZW9wZSAucGVvcGVJdGVtIC5hdmF0YXIge1xuICB3aWR0aDogMy4zcmVtO1xuICBoZWlnaHQ6IDMuM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250ZW5lciAuY29uZmVyZW5jZV9wZW9wZSAuY29uZmVyZW5jZV9wZW9wZWl0ZW0gLnJpZ2h0X2xpc3RfcGVvcGUgLnBlb3BlSXRlbSAuYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAzLjNyZW07XG4gIGhlaWdodDogMy4zcmVtO1xufVxuLmNvbnRlbmVyIC5jb25mZXJlbmNlX3Blb3BlIC5jb25mZXJlbmNlX3Blb3BlaXRlbSAucmlnaHRfbGlzdF9wZW9wZSAucGVvcGVJdGVtIHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiAjNTk1OTU5O1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/web-rtcview/web-rtcview.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/web-rtcview/web-rtcview.component.ts ***!
    \************************************************************/

  /*! exports provided: WebRTCViewComponent */

  /***/
  function srcAppPagesWebRtcviewWebRtcviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebRTCViewComponent", function () {
      return WebRTCViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WebRTCViewComponent = /*#__PURE__*/function () {
      function WebRTCViewComponent() {
        _classCallCheck(this, WebRTCViewComponent);

        this.items = [{
          src: './../../../assets/img/user1.png',
          text: 'user1'
        }, {
          src: './../../../assets/img/user1.png',
          text: 'user2'
        }, {
          src: './../../../assets/img/user1.png',
          text: 'user3'
        }, {
          src: './../../../assets/img/user1.png',
          text: 'user4'
        }];
      }

      _createClass(WebRTCViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WebRTCViewComponent;
    }();

    WebRTCViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-web-rtcview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./web-rtcview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/web-rtcview/web-rtcview.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./web-rtcview.component.scss */
      "./src/app/pages/web-rtcview/web-rtcview.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], WebRTCViewComponent);
    /***/
  },

  /***/
  "./src/app/pages/web-rtcview/web-rtcview.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/web-rtcview/web-rtcview.module.ts ***!
    \*********************************************************/

  /*! exports provided: WebRTCViewModule */

  /***/
  function srcAppPagesWebRtcviewWebRtcviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebRTCViewModule", function () {
      return WebRTCViewModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _web_rtcview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./web-rtcview.component */
    "./src/app/pages/web-rtcview/web-rtcview.component.ts");
    /* harmony import */


    var _webrtcview_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./webrtcview-routing.module */
    "./src/app/pages/web-rtcview/webrtcview-routing.module.ts"); // import { PopoverPage } from '../about-popover/about-popover';


    var WebRTCViewModule = function WebRTCViewModule() {
      _classCallCheck(this, WebRTCViewModule);
    };

    WebRTCViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _webrtcview_routing_module__WEBPACK_IMPORTED_MODULE_6__["WebRTCViewRoutingModule"]],
      declarations: [_web_rtcview_component__WEBPACK_IMPORTED_MODULE_5__["WebRTCViewComponent"]],
      //   entryComponents: [PopoverPage],
      bootstrap: [_web_rtcview_component__WEBPACK_IMPORTED_MODULE_5__["WebRTCViewComponent"]]
    })], WebRTCViewModule);
    /***/
  },

  /***/
  "./src/app/pages/web-rtcview/webrtcview-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/web-rtcview/webrtcview-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: WebRTCViewRoutingModule */

  /***/
  function srcAppPagesWebRtcviewWebrtcviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebRTCViewRoutingModule", function () {
      return WebRTCViewRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _web_rtcview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./web-rtcview.component */
    "./src/app/pages/web-rtcview/web-rtcview.component.ts");

    var routes = [{
      path: '',
      component: _web_rtcview_component__WEBPACK_IMPORTED_MODULE_3__["WebRTCViewComponent"]
    }];

    var WebRTCViewRoutingModule = function WebRTCViewRoutingModule() {
      _classCallCheck(this, WebRTCViewRoutingModule);
    };

    WebRTCViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WebRTCViewRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-web-rtcview-web-rtcview-module-es5.js.map