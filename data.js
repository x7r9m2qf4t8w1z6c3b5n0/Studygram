// data.js - Studygram data repository
// Make sure all data is globally available

// Extra materials (PDF only items)
const extraMaterials = [
    { title: "Physics Formula Sheet", pdfUrl: "https://drive.google.com/file/d/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9/view", subject: "Physics" },
    { title: "Organic Chemistry Mindmap", pdfUrl: "https://drive.google.com/file/d/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9/view", subject: "Chemistry" },
    { title: "Calculus Cheat Sheet", pdfUrl: "https://drive.google.com/file/d/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9/view", subject: "Mathematics" },
    { title: "Periodic Table Summary", pdfUrl: "https://drive.google.com/file/d/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9/view", subject: "Chemistry" },
    { title: "Vector Analysis Notes", pdfUrl: "https://drive.google.com/file/d/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9/view", subject: "Physics" }
];

// Lecture data (videos)
const lectureData = [
    { subject: "Physics First Paper", videoid: "pNJpXfJu2vQ", videotitle: "Vector Class (Physics 1st)", videopdf: "https://drive.google.com/drive/folders/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9" },
    { subject: "Physics First Paper", videoid: "pNJpXfJu2vQ", videotitle: "Measurement & Error", videopdf: "https://drive.google.com/drive/folders/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9" },
    { subject: "Physics Second Paper", videoid: "pNJpXfJu2vQ", videotitle: "Current Electricity", videopdf: "https://drive.google.com/drive/folders/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9" },
    { subject: "Chemistry First Paper", videoid: "pNJpXfJu2vQ", videotitle: "Periodic Table", videopdf: "https://drive.google.com/drive/folders/1u6tNg26MhpnOBFhR817tI7tFq2m2xt-9" },
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
