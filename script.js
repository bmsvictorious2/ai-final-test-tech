function checkAnswers() {
    let totalMarks = 0;

    // Get Student's Name
    const studentName = document.getElementById("studentName").value;

    // Display Student's Name
    document.getElementById("displayName").innerText = studentName
        ? `Student Name: ${studentName}`
        : "Student Name: Not Provided";

    // Question 1: Regression (Predicting the price of a car)
    const q1_price = document.querySelectorAll('input[type="checkbox"]')[0].checked;
    const q1_spam = document.querySelectorAll('input[type="checkbox"]')[1].checked;
    if (q1_spam && !q1_price) totalMarks += 10;

    // Question 2: Classification (Dog or not)
    if (document.getElementById("question2").value === "Weather forecast") totalMarks += 10;

    // Question 3: Image resolution
    const q3 = document.querySelector('input[name="workloadAI"]:checked');
    if (q3 && q3.value === "Regression") totalMarks += 10;

    // Question 4: RGB
    const q4 = document.querySelector('input[name="train"]:checked');
    if (q4 && q4.value === "feature") totalMarks += 10;

    // Question 5: Color range
    if (document.getElementById("question5").value === "Regression") totalMarks += 10;

    // Question 6: Supervised learning types
    if (document.getElementById("typeRegression").checked) totalMarks += 10;
    if (document.getElementById("typeunsupervisedlearning").checked) totalMarks += 10;

    // Question 7: Computer Vision task
    if (document.getElementById("question7").value === "label") totalMarks += 10;

    // Question 8: Image segmentation
    if (document.getElementById("question8").value === "labl") totalMarks += 10;

    // Question 9: Clustering
    const q9 = document.querySelector('input[name="AI"]:checked');
    if (q9 && q9.value === "human") totalMarks += 10;

    // Question 10: Accuracy from image
    const q10 = document.querySelector('input[name="image"]:checked');
    if (q10 && q10.value === "stylr") totalMarks += 5;

    // Question 11: Color range
    if (document.getElementById("question11").value === "Object detection") totalMarks += 5;
 // question 12
    const q12 = document.querySelector('input[name="ty"]:checked');
    if (q12 && q12.value === "dataset") totalMarks += 5;
    // QUESTION 13
    const q13 = document.querySelector('input[name="tiy"]:checked');
    if (q13 && q13.value === "dataset") totalMarks += 5;
    // Question 14: Color range
    if (document.getElementById("question14").value === "Instance segmentation only") totalMarks += 5;
    // Question 15: Color range
    if (document.getElementById("question15").value === "Object detection") totalMarks += 5;
    // question 16
    const q16 = document.querySelector('input[name="tiye"]:checked');
    if (q16 && q16.value === "label") totalMarks += 5;
    // Question 17: Color range
    if (document.getElementById("question17").value === "Instance segmentation only") totalMarks += 5;
    // Question 18: Color range
    if (document.getElementById("question18").value === "Instance segmentation only") totalMarks += 5;
    // question 19
    const q19 = document.querySelector('input[name="tiyer"]:checked');
    if (q19 && q19.value === "feature") totalMarks += 5;
     // question 20
    const q20 = document.querySelector('input[name="tiyerm"]:checked');
    if (q20 && q20.value === "feature") totalMarks += 5;
    // Question 21: Color range
    if (document.getElementById("question21").value === "Object detection") totalMarks += 5;
    // Question 22: Color range
    if (document.getElementById("question22").value === "Instance segmentation only") totalMarks += 5;
     // Question 23: Color range
    if (document.getElementById("question23").value === "Instance segmentation only") totalMarks += 5;
// question 24
    const q24 = document.querySelector('input[name="tiyermt"]:checked');
    if (q24 && q24.value === "dataset") totalMarks += 5;
// question 25
    const q25 = document.querySelector('input[name="tiyermti"]:checked');
    if (q25 && q25.value === "feature") totalMarks += 5;
// question 26
    const q26 = document.querySelector('input[name="tiyermtie"]:checked');
    if (q26 && q26.value === "label") totalMarks += 5;

 // Question 27: Color range
    if (document.getElementById("question27").value === "Object detection") totalMarks += 5;
// Question 28: Color range
    if (document.getElementById("question28").value === "Image classification") totalMarks += 5;
// Question 29: Color range
    if (document.getElementById("question29").value === "Instance segmentation only") totalMarks += 5;
// question 30
    const q30 = document.querySelector('input[name="tiyermtien"]:checked');
    if (q30 && q30.value === "dataset") totalMarks += 5;
    // Redirect to results page
    const resultURL = `result.html?name=${encodeURIComponent(studentName)}&marks=${totalMarks}`;
    window.location.href = resultURL;
}