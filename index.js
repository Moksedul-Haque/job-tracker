const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const jobCards = document.querySelectorAll(".job-card");
const jobsContainer = document.querySelector(".jobs-container");

// Initial Total Count
totalCount.innerText = jobCards.length;

jobCards.forEach(card => {
    const interviewBtn = card.querySelector(".interviewBtn");
    const rejectedBtn = card.querySelector(".rejectedBtn");
    const delBtn = card.querySelector(".fa-trash-can");

    // Interview Button Click
    interviewBtn.addEventListener("click", function () {
        if (!card.classList.contains('is-interview')) {
            // যদি আগে রিজেক্টেড থাকে সেটা কমানো
            if (card.classList.contains('is-rejected')) {
                rejectedCount.innerText = parseInt(rejectedCount.innerText) - 1;
                card.classList.remove('is-rejected');
            }
            
            card.classList.add('is-interview');
            interviewCount.innerText = parseInt(interviewCount.innerText) + 1;
            
            // UI Feedback: বাটন কালার চেঞ্জ (ঐচ্ছিক)
            interviewBtn.classList.add('bg-green-500', 'text-white');
            rejectedBtn.classList.remove('bg-red-500', 'text-white');
        }
    });

    // Rejected Button Click
    rejectedBtn.addEventListener("click", function () {
        if (!card.classList.contains('is-rejected')) {
            // যদি আগে ইন্টারভিউ থাকে সেটা কমানো
            if (card.classList.contains('is-interview')) {
                interviewCount.innerText = parseInt(interviewCount.innerText) - 1;
                card.classList.remove('is-interview');
            }

            card.classList.add('is-rejected');
            rejectedCount.innerText = parseInt(rejectedCount.innerText) + 1;
            
            // UI Feedback: বাটন কালার চেঞ্জ (ঐচ্ছিক)
            rejectedBtn.classList.add('bg-red-500', 'text-white');
            interviewBtn.classList.remove('bg-green-500', 'text-white');
        }
    });

    // Delete Button Click
    delBtn.addEventListener("click", function () {
        // ডিলিট করার সময় কাউন্ট কমানো
        if (card.classList.contains('is-interview')) {
            interviewCount.innerText = parseInt(interviewCount.innerText) - 1;
        }
        if (card.classList.contains('is-rejected')) {
            rejectedCount.innerText = parseInt(rejectedCount.innerText) - 1;
        }
        
        card.remove();
        totalCount.innerText = parseInt(totalCount.innerText) - 1;
    });
});

// --- Filtering Logic ---

const filterAll = document.querySelector(".flex.gap-5 div:nth-child(1)"); // All button
const filterInterviewBtns = document.querySelectorAll(".interview-btn");
const filterRejectedBtns = document.querySelectorAll(".rejected-btn");

// Filter: All
filterAll.addEventListener("click", () => {
    jobCards.forEach(card => card.style.display = "block");
});

// Filter: Interview
filterInterviewBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        jobCards.forEach(card => {
            if (card.classList.contains('is-interview')) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// Filter: Rejected
filterRejectedBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        jobCards.forEach(card => {
            if (card.classList.contains('is-rejected')) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});