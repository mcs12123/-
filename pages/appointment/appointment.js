// pages/appointment/appointment.js
const DEFAULT_SLOTS = [
  { status: "busy" },
  { status: "busy" },
  { status: "mid" },
  { status: "free" },
  { status: "free" },
  { status: "busy" },
  { status: "busy" },
  { status: "free" }
];

Page({
  data: {
    categories: [
      { name: "激光切割" },
      { name: "3D打印" },
      { name: "电子工艺" },
      { name: "基础实训" }
    ],
    selectedCategoryIndex: 0,
    deviceOptions: ["全部设备", "激光切割机", "3D打印机", "电子工艺", "基础实训"],
    selectedDeviceIndex: 0,
    weekDates: [
      { date: "03.16", day: "周一" },
      { date: "03.17", day: "周二" },
      { date: "03.18", day: "周三" },
      { date: "03.19", day: "周四" },
      { date: "03.20", day: "周五" },
      { date: "03.21", day: "周六" },
      { date: "03.22", day: "周日" }
    ],
    selectedDateIndex: 0,
    timeLabels: ["9", "10", "11", "12", "14", "15", "16", "17"],
    machines: [
      { name: "激光切割机 1", slots: DEFAULT_SLOTS },
      { name: "激光切割机 1", slots: DEFAULT_SLOTS },
      { name: "激光切割机 1", slots: DEFAULT_SLOTS },
      { name: "激光切割机 1", slots: DEFAULT_SLOTS }
    ],
    myBooking: {
      name: "激光切割机1",
      date: "3月16日",
      time: "早上 10:00 - 11:00",
      room: "D3-b101"
    }
  },

  onCategoryTap(e) {
    const index = Number(e.currentTarget.dataset.index || 0);
    this.setData({ selectedCategoryIndex: index });
  },

  onDateTap(e) {
    const index = Number(e.currentTarget.dataset.index || 0);
    this.setData({ selectedDateIndex: index });
  },

  onDeviceChange(e) {
    this.setData({ selectedDeviceIndex: Number(e.detail.value || 0) });
  },

  onReserveTap() {
    wx.showToast({
      title: "预约功能待接入",
      icon: "none"
    });
  },

  onMyActionTap(e) {
    const action = e.currentTarget.dataset.action || "";
    const titleMap = {
      edit: "加工文件修改功能待接入",
      checkin: "报道功能待接入"
    };

    wx.showToast({
      title: titleMap[action] || "功能待接入",
      icon: "none"
    });
  }
});