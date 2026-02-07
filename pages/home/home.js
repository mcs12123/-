Page({
  data: {
    selectedConcentratedIndex: 0,
    selectedDispersedIndex: 0,

    concentratedTime: {
      morningStart: "08:50",
      morningEnd: "12:00",
      afternoonStart: "14:00",
      afternoonEnd: "17:00"
    },

    dispersedTime: {
      morningStart: "08:50",
      morningEnd: "12:00",
      afternoonStart: "14:50",
      afternoonEnd: "17:00"
    },

    // 集中实训日期
    concentratedDates: [
      { day: "周一", date: "02-16" },
      { day: "周二", date: "02-17" },
      { day: "周三", date: "02-18" },
      { day: "周四", date: "02-19" },
      { day: "周五", date: "02-20" }
    ],

    // 集中实训上午课程
    concentratedMorningCourses: [
      { name: "安全教育", room: "D3-b101" },
      { name: "木工创意", room: "D3-b101" },
      { name: "特种加工", room: "D3-b101" },
      { name: "网联汽车", room: "D3-b101" },
      { name: "人工智能", room: "D3-b101" }
    ],

    // 集中实训下午课程
    concentratedAfternoonCourses: [
      { name: "VR+安全教育", room: "D3-b101" },
      { name: "木工创意", room: "D3-b101" },
      { name: "特种加工", room: "D3-b101" },
      { name: "网联汽车", room: "D3-b101" },
      { name: "人工智能", room: "D3-b101" }
    ],

    // 分散实训日期
    dispersedDates: [
      { day: "周三", date: "03-18" },
      { day: "周三", date: "03-25" },
      { day: "周三", date: "04-01" },
      { day: "周三", date: "04-08" },
      { day: "周三", date: "04-15" }
    ],

    // 分散实训上午课程
    dispersedMorningCourses: [
      { name: "项目介绍", room: "D3-b101" },
      { name: "自由制作", room: "D3-b101" },
      { name: "自由制作", room: "D3-x101" },
      { name: "预验收", room: "D3-b101" },
      { name: "最终考核", room: "D3-b101" }
    ],

    // 分散实训下午教室（仅教室信息）
    dispersedAfternoonRooms: [
      "D3-b101",
      "D3-b101",
      "D3-b101",
      "D1-b101",
      "D3-b101"
    ]
  },

  onLoad() {
    // 页面加载时可执行初始化逻辑
  },

  goToPlaceholder(e) {
    const title = e.currentTarget.dataset.title || "功能";
    wx.navigateTo({
      url: `/pages/placeholder/placeholder?title=${encodeURIComponent(title)}`
    });
  }
});