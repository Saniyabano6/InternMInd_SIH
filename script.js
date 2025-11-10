
  function adjustSearchForm() {
    const form = document.querySelector('.d-flex');
    const input = document.getElementById('searchBox');
    const button = form.querySelector('button');

    if (window.innerWidth < 576) {
      // Stack vertically on extra-small screens
      form.classList.remove('d-flex');
      form.classList.add('flex-column');

      input.classList.remove('me-2');
      input.style.marginBottom = '10px';
      input.style.width = '100%';
      button.style.width = '100%';
    } else {
      // Restore horizontal layout
      form.classList.remove('flex-column');
      form.classList.add('d-flex');

      input.classList.add('me-2');
      input.style.marginBottom = '';
      input.style.width = '';
      button.style.width = '';
    }
  }

  // Run on page load and window resize
  window.addEventListener('load', adjustSearchForm);
  window.addEventListener('resize', adjustSearchForm);


  // Scroll left by 320px
  function scrollLeft() {
    const container = document.getElementById("scrollContainer");
    if (container) {
      container.scrollBy({
        left: -320,
        behavior: "smooth"
      });
    }
  }

  // Scroll right by 320px
  function scrollRight() {
    const container = document.getElementById("scrollContainer");
    if (container) {
      container.scrollBy({
        left: 320,
        behavior: "smooth"
      });
    }
  }

const feedbacks = document.querySelectorAll('.feedback');

feedbacks.forEach((item, index) => {
  setTimeout(() => {
    item.style.transform = 'translateX(20px)';
  }, index * 3000); // stagger each feedback by 3 seconds
});
// chatbot js 
const chatbotBtn = document.getElementById("chatbotBtn");
const chatWindow = document.getElementById("chatWindow");
const closeChat = document.getElementById("closeChat");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendMsg = document.getElementById("sendMsg");

// Toggle chat window
chatbotBtn.addEventListener("click", () => {
  chatWindow.style.display = "flex";
});

// Close chat window
closeChat.addEventListener("click", () => {
  chatWindow.style.display = "none";
});

// Send message
sendMsg.addEventListener("click", () => {
  const msg = chatInput.value.trim();
  if(msg !== "") {
    // Add user message
    const userMsg = document.createElement("div");
    userMsg.classList.add("text-end", "mb-2");
    userMsg.innerHTML = `<span class="badge bg-primary">${msg}</span>`;
    chatMessages.appendChild(userMsg);

    // Simulate bot reply
    const botMsg = document.createElement("div");
    botMsg.classList.add("text-start", "mb-2");
    botMsg.innerHTML = `<span class="badge bg-secondary">Thanks for your message! We'll get back to you soon.</span>`;
    chatMessages.appendChild(botMsg);

    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = "";
  }
});

// Optional: send message on Enter key
chatInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter") sendMsg.click();
});


// Resume Builder
document.addEventListener("DOMContentLoaded", function () {
    // ---------- Work Experience ----------
    const addExperienceBtn = document.getElementById("addExperience");
    const experienceContainer = document.getElementById("experienceContainer");

    addExperienceBtn.addEventListener("click", () => {
        const div = document.createElement("div");
        div.classList.add("experience-item", "mb-3");
        div.innerHTML = `
            <div class="row g-3 align-items-end">
                <div class="col-md-4">
                    <label class="form-label">Company</label>
                    <input type="text" class="form-control" placeholder="Company Name">
                </div>
                <div class="col-md-4">
                    <label class="form-label">Role</label>
                    <input type="text" class="form-control" placeholder="Job Title">
                </div>
                <div class="col-md-3">
                    <label class="form-label">Duration</label>
                    <input type="text" class="form-control" placeholder="Jan 2023 - Dec 2024">
                </div>
                <div class="col-md-1">
                    <button class="btn btn-danger btn-sm remove-experience">X</button>
                </div>
            </div>`;
        experienceContainer.appendChild(div);

        div.querySelector(".remove-experience").addEventListener("click", () => {
            div.remove();
        });
    });

    // ---------- Qualifications ----------
    const addQualificationBtn = document.getElementById("addQualification");
    const qualificationContainer = document.getElementById("QualificationContainer");

    addQualificationBtn.addEventListener("click", () => {
        const div = document.createElement("div");
        div.classList.add("qualification-item", "mb-3");
        div.innerHTML = `
            <div class="row g-3 align-items-end">
                <div class="col-md-4">
                    <label class="form-label">Degree</label>
                    <input type="text" class="form-control" placeholder="B.Tech, Diploma">
                </div>
                <div class="col-md-4">
                    <label class="form-label">Institute</label>
                    <input type="text" class="form-control" placeholder="University Name">
                </div>
                <div class="col-md-3">
                    <label class="form-label">Year</label>
                    <input type="text" class="form-control" placeholder="2022 - 2026">
                </div>
                <div class="col-md-1">
                    <button class="btn btn-danger btn-sm remove-qualification">X</button>
                </div>
            </div>`;
        qualificationContainer.appendChild(div);

        div.querySelector(".remove-qualification").addEventListener("click", () => {
            div.remove();
        });
    });

    // ---------- Skills ----------
    const skillsInput = document.getElementById("skillsInput");
    const skillsContainer = document.getElementById("skillsContainer");

    skillsInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const value = skillsInput.value.trim();
            if (value) {
                addSkill(value);
                skillsInput.value = "";
            }
        }
    });

    function addSkill(skill) {
        const span = document.createElement("span");
        span.classList.add("badge", "bg-primary", "p-2");
        span.textContent = skill;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("btn-close", "btn-close-white", "ms-2");
        removeBtn.style.fontSize = "0.7rem";
        removeBtn.onclick = () => span.remove();

        span.appendChild(removeBtn);
        skillsContainer.appendChild(span);
    }

    // ---------- Sector Interests ----------
    const sectorCheckboxes = document.querySelectorAll("#sectorInterests input[type='checkbox']");
    const selectedSectors = document.getElementById("selectedSectors");
    const addCustomSectorBtn = document.getElementById("addCustomSector");
    const customSectorInput = document.getElementById("customSector");

    sectorCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            updateSelectedSectors();
        });
    });

    addCustomSectorBtn.addEventListener("click", () => {
        const sector = customSectorInput.value.trim();
        if (sector) {
            createSectorTag(sector);
            customSectorInput.value = "";
        }
    });

    function updateSelectedSectors() {
        selectedSectors.innerHTML = "";
        sectorCheckboxes.forEach(cb => {
            if (cb.checked) {
                createSectorTag(cb.dataset.sector);
            }
        });
    }

    function createSectorTag(sector) {
        const span = document.createElement("span");
        span.classList.add("badge", "bg-success", "p-2");
        span.textContent = sector;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("btn-close", "btn-close-white", "ms-2");
        removeBtn.style.fontSize = "0.7rem";
        removeBtn.onclick = () => span.remove();

        span.appendChild(removeBtn);
        selectedSectors.appendChild(span);
    }

    // ---------- Reset Button ----------
    document.getElementById("resetBtn").addEventListener("click", () => {
        document.querySelector("form")?.reset(); // if wrapped in form
        experienceContainer.innerHTML = "";
        qualificationContainer.innerHTML = "";
        skillsContainer.innerHTML = "";
        selectedSectors.innerHTML = "";
    });

    // ---------- Generate PDF (Dummy) ----------
    document.getElementById("generateBtn").addEventListener("click", () => {
        alert("Here you can generate PDF using jsPDF or another library.");
        // Example: const doc = new jsPDF(); doc.text("Resume Content", 10, 10); doc.save("resume.pdf");
    });
});

