 const internships = [
      { title: "Web Development Intern", company: "TechNova", duration: "2 months", stipend: "₹5000" },
      { title: "Data Science Intern", company: "DataX", duration: "3 months", stipend: "₹7000" },
      { title: "AI/ML Intern", company: "AI Labs", duration: "4 months", stipend: "₹8000" },
      { title: "UI/UX Designer Intern", company: "DesignHub", duration: "2 months", stipend: "₹4000" },
      { title: "Marketing Intern", company: "Brandify", duration: "1 month", stipend: "₹3000" }
    ];

    document.getElementById("getRecommendations").addEventListener("click", () => {
      const section = document.getElementById("recommendationsSection");
      section.classList.remove("hidden");

      const internshipList = document.getElementById("internshipList");
      internshipList.innerHTML = "";

      internships.forEach(intern => {
        const card = document.createElement("div");
        card.classList.add("internship-card");

        card.innerHTML = `
          <h3>${intern.title}</h3>
          <p><b>Company:</b> ${intern.company}</p>
          <p><b>Duration:</b> ${intern.duration}</p>
          <p><b>Stipend:</b> ${intern.stipend}</p>
          <div class="card-actions">
            <button class="apply-btn">Apply Now</button>
            <a href="#" class="view-link">View Description</a>
          </div>
        `;

        internshipList.appendChild(card);
      });
    });

    // Explore More Button (Simulated Payment)
    document.getElementById("exploreBtn").addEventListener("click", () => {
      const paymentStatus = document.getElementById("paymentStatus");
      paymentStatus.classList.remove("hidden");
      paymentStatus.innerText = "✅ Payment Successful! Unlocking more internships...";

      setTimeout(() => {
        alert("Now you have access to the full recommended internships list!");
      }, 2000);
    });
