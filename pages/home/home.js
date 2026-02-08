const { getSchedule } = require("../../services/schedule");

Page({
  data: {
    selectedConcentratedIndex: 0,
    selectedDispersedIndex: 0,
    concentratedTime: {},
    dispersedTime: {},
    concentratedDates: [],
    concentratedMorningCourses: [],
    concentratedAfternoonCourses: [],
    dispersedDates: [],
    dispersedMorningCourses: [],
    dispersedAfternoonRooms: []
  },

  onLoad() {
    this.loadSchedule();
  },

  loadSchedule() {
    getSchedule()
      .then((schedule) => {
        this.setData(schedule || {});
      })
      .catch(() => {
        this.setData({
          concentratedTime: {},
          dispersedTime: {},
          concentratedDates: [],
          concentratedMorningCourses: [],
          concentratedAfternoonCourses: [],
          dispersedDates: [],
          dispersedMorningCourses: [],
          dispersedAfternoonRooms: []
        });
      });
  },

  goToPlaceholder(e) {
    const title = e.currentTarget.dataset.title || "功能";
    wx.navigateTo({
      url: `/pages/placeholder/placeholder?title=${encodeURIComponent(title)}`
    });
  }
});