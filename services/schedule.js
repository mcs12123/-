const mockSchedule = require("../data/schedule.mock.js");

const API_BASE_URL = "";

function requestSchedule() {
    if (!API_BASE_URL) {
        return Promise.resolve(mockSchedule);
    }

    return new Promise((resolve, reject) => {
        wx.request({
            url: `${API_BASE_URL}/api/schedule`,
            method: "GET",
            success: (res) => {
                if (res.statusCode >= 200 && res.statusCode < 300 && res.data) {
                    resolve(res.data);
                    return;
                }
                reject(new Error("Invalid schedule response"));
            },
            fail: (err) => {
                reject(err);
            }
        });
    });
}

function getSchedule() {
    return requestSchedule().catch(() => mockSchedule);
}

module.exports = {
    getSchedule
};
