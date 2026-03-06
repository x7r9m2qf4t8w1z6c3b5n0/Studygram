// data.js - Studygram data repository
// Make sure all data is globally available

// Extra materials (PDF only items)
const extraMaterials = [
    { title: "রাসায়নিক পরিবর্তন (Practice Sheet)", pdfUrl: "https://drive.google.com/file/d/143KDS1k5hgA_aiVfjgnax3969364Bsxn/view", subject: "Chemistry" },
    { title: "রাসায়নিক পরিবর্তন (Solution Sheet)", pdfUrl: "https://drive.google.com/file/d/1E7mnYZghOXWhGlV1QtbY20LccThmp720/view", subject: "Chemistry" },
    { title: "সরলরেখা (Practice Sheet)", pdfUrl: "https://drive.google.com/file/d/143KDS1k5hgA_aiVfjgnax3969364Bsxn/view", subject: "Mathematics" },
    { title: "সরলরেখা (Solution Sheet)", pdfUrl: "https://drive.google.com/file/d/1E7mnYZghOXWhGlV1QtbY20LccThmp720/view", subject: "Mathematics" },
    { title: "ভেক্টর (Practice Sheet)", pdfUrl: "https://drive.google.com/file/d/1fW5COMCOS4E171Xg0sPrKetusN6acz5j/view", subject: "Physics" },
    { title: "ভেক্টর (Solution Sheet)", pdfUrl: "https://drive.google.com/file/d/1nzWXum-E_2AWiY3OyttHtbZTtMylN08h/view", subject: "Physics" },
];

// Lecture data (videos)
const lectureData = [
    { subject: "Physics First Paper", videoid: "zMWU70G9d50", videotitle: "নিউটনীয় বলবিদ্যা - ০১", videopdf: "https://drive.google.com/file/d/1AXtkdF2ey0AFz2JCtBcKNKB0F7cjPyyO/view" },
    { subject: "Physics First Paper", videoid: "okt1XdK3Zr0", videotitle: "নিউটনীয় বলবিদ্যা - ০২", videopdf: "https://drive.google.com/file/d/1GKlJA-Qno20dPsl4__pLZJ9mHaMFDaxk/view" },
    { subject: "Physics Second Paper", videoid: "pNJpXfJu2vQ", videotitle: "Current Electricity", videopdf: "https://drive.google.com/drive/folders/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9" },
    { subject: "Chemistry First Paper", videoid: "tKFft9GcDCo", videotitle: "গুণগত রসায়ন - ০১", videopdf: "" },
    { subject: "Chemistry First Paper", videoid: "Xz0vtsBav8o", videotitle: "গুণগত রসায়ন - ০২", videopdf: "" },
    { subject: "Chemistry First Paper", videoid: "NKoxQtN419M", videotitle: "গুণগত রসায়ন - ০৩", videopdf: "" },
    { subject: "Chemistry First Paper", videoid: "QyXDY92wvxU", videotitle: "গুণগত রসায়ন - ০৪", videopdf: "" },
    { subject: "Chemistry First Paper", videoid: "RNBHvNHadDk", videotitle: "গুণগত রসায়ন - ০৫", videopdf: "" },
    { subject: "Chemistry First Paper", videoid: "I8oCfEIjmq0", videotitle: "গুণগত রসায়ন - ০১ (Sanjay Chakraborty)", videopdf: "" },
    { subject: "Chemistry First Paper", videoid: "LYLcb7Rc22g", videotitle: "গুণগত রসায়ন - ০২ (Sanjay Chakraborty)", videopdf: "" },
    { subject: "Chemistry First Paper", videoid: "UaRVoFNBfxw", videotitle: "গুণগত রসায়ন - ০৩ (Sanjay Chakraborty)", videopdf: "" },
    { subject: "Chemistry First Paper", videoid: "M2y2BRPNIaQ", videotitle: "গুণগত রসায়ন - ০৪ (Sanjay Chakraborty)", videopdf: "" },
    { subject: "Chemistry First Paper", videoid: "EjgO_wpze00", videotitle: "গুণগত রসায়ন - ০৫ (Sanjay Chakraborty)", videopdf: "" },
    { subject: "Chemistry First Paper", videoid: "VHQUizzQyek", videotitle: "গুণগত রসায়ন - ০৬ (Sanjay Chakraborty)", videopdf: "" },
    { subject: "Chemistry First Paper", videoid: "LMpF0XlG7Tc", videotitle: "গুণগত রসায়ন - ০৭ (Sanjay Chakraborty)", videopdf: "" },
    { subject: "Chemistry Second Paper", videoid: "pNJpXfJu2vQ", videotitle: "Organic Chemistry", videopdf: "https://drive.google.com/drive/folders/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9" },
    { subject: "Mathematics First Paper", videoid: "pNJpXfJu2vQ", videotitle: "Differentiation", videopdf: "https://drive.google.com/drive/folders/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9" },
    { subject: "Mathematics Second Paper", videoid: "pNJpXfJu2vQ", videotitle: "Integration", videopdf: "https://drive.google.com/drive/folders/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9" },
    { subject: "Physics Second Paper", videoid: "pNJpXfJu2vQ", videotitle: "Magnetic Effect", videopdf: "https://drive.google.com/drive/folders/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9" },
    { subject: "Chemistry Second Paper", videoid: "pNJpXfJu2vQ", videotitle: "Electrochemistry", videopdf: "https://drive.google.com/drive/folders/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9" }
];

// Subject images mapping
const subjectImage = {
    "Physics First Paper": "phy1.png",
    "Physics Second Paper": "phy2.png",
    "Chemistry First Paper": "chem1.png",
    "Chemistry Second Paper": "chem2.png",
    "Mathematics First Paper": "math1.png",
    "Mathematics Second Paper": "math2.png"
};

// Explicitly attach to window object for global access
window.lectureData = lectureData;
window.extraMaterials = extraMaterials;
window.subjectImage = subjectImage;

// Optional: Log to confirm loading
console.log('data.js loaded successfully');
console.log('Lectures:', window.lectureData.length);

console.log('Extra Materials:', window.extraMaterials.length);



