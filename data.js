// data.js - Studygram data repository
// Make sure all data is globally available

// Lecture data (videos only - no PDF materials)
const lectureData = [
    { subject: "Physics First Paper", videoid: "zMWU70G9d50", videotitle: "নিউটনীয় বলবিদ্যা - ০১" },
    { subject: "Physics First Paper", videoid: "okt1XdK3Zr0", videotitle: "নিউটনীয় বলবিদ্যা - ০২" },
    { subject: "Physics Second Paper", videoid: "pNJpXfJu2vQ", videotitle: "Current Electricity" },
    { subject: "Chemistry First Paper", videoid: "tKFft9GcDCo", videotitle: "গুণগত রসায়ন - ০১" },
    { subject: "Chemistry First Paper", videoid: "Xz0vtsBav8o", videotitle: "গুণগত রসায়ন - ০২" },
    { subject: "Chemistry First Paper", videoid: "NKoxQtN419M", videotitle: "গুণগত রসায়ন - ০৩" },
    { subject: "Chemistry First Paper", videoid: "QyXDY92wvxU", videotitle: "গুণগত রসায়ন - ০৪" },
    { subject: "Chemistry First Paper", videoid: "RNBHvNHadDk", videotitle: "গুণগত রসায়ন - ০৫" },
    { subject: "Chemistry First Paper", videoid: "I8oCfEIjmq0", videotitle: "গুণগত রসায়ন - ০১ (Sanjay Chakraborty)" },
    { subject: "Chemistry First Paper", videoid: "LYLcb7Rc22g", videotitle: "গুণগত রসায়ন - ০২ (Sanjay Chakraborty)" },
    { subject: "Chemistry First Paper", videoid: "UaRVoFNBfxw", videotitle: "গুণগত রসায়ন - ০৩ (Sanjay Chakraborty)" },
    { subject: "Chemistry First Paper", videoid: "M2y2BRPNIaQ", videotitle: "গুণগত রসায়ন - ০৪ (Sanjay Chakraborty)" },
    { subject: "Chemistry First Paper", videoid: "EjgO_wpze00", videotitle: "গুণগত রসায়ন - ০৫ (Sanjay Chakraborty)" },
    { subject: "Chemistry First Paper", videoid: "VHQUizzQyek", videotitle: "গুণগত রসায়ন - ০৬ (Sanjay Chakraborty)" },
    { subject: "Chemistry First Paper", videoid: "LMpF0XlG7Tc", videotitle: "গুণগত রসায়ন - ০৭ (Sanjay Chakraborty)" },
    { subject: "Chemistry Second Paper", videoid: "pNJpXfJu2vQ", videotitle: "Organic Chemistry" },
    { subject: "Mathematics First Paper", videoid: "pNJpXfJu2vQ", videotitle: "Differentiation" },
    { subject: "Mathematics Second Paper", videoid: "pNJpXfJu2vQ", videotitle: "Integration" },
    { subject: "Physics Second Paper", videoid: "pNJpXfJu2vQ", videotitle: "Magnetic Effect" },
    { subject: "Chemistry Second Paper", videoid: "pNJpXfJu2vQ", videotitle: "Electrochemistry" }
];

// Subject images mapping
const subjectImage = {
    "Physics First Paper": "phy1.png",
    "Physics Second Paper": "phy2.png",
    "Chemistry First Paper": "chem1.png",
    "Chemistry Second Paper": "chem2.png",
    "Mathematics First Paper": "math1.png",
    "Mathematics Second Paper": "math2.png",
    "English Second Paper": "eng2.png",
};

// Explicitly attach to window object for global access
window.lectureData = lectureData;
window.subjectImage = subjectImage;

// Optional: Log to confirm loading
console.log('data.js loaded successfully');
console.log('Lectures:', window.lectureData.length);


