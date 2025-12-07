let currentTranscript = "";
  let currentLectureId = null;
  let isGenerating = false;
  let isChatting = false;

  const audioInput = document.getElementById("audio-input");
  const uploadArea = document.getElementById("upload-area");
  const fileNameLabel = document.getElementById("file-name");
  const transcriptInput = document.getElementById("transcript-input");
  const transcriptBox = document.getElementById("transcript-box");
  const generateBtn = document.getElementById("generate-btn");
  const statusText = document.getElementById("status-text");
  const statusPill = document.getElementById("status-pill");

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  const summaryShort = document.getElementById("summary-short");
  const summaryMedium = document.getElementById("summary-medium");
  const summaryDetailed = document.getElementById("summary-detailed");
  const notesBody = document.getElementById("notes-body");

  const qMcq = document.getElementById("questions-mcq");
  const qShort = document.getElementById("questions-short");
  const qLong = document.getElementById("questions-long");
  const qExpected = document.getElementById("questions-expected");

  const chatMessages = document.getElementById("chat-messages");
  const chatInput = document.getElementById("chat-input");
  const chatSend = document.getElementById("chat-send");

  // -----------------------------
  // File input
  // -----------------------------
  uploadArea.addEventListener("click", () => {
    audioInput.click();
  });

  audioInput.addEventListener("change", () => {
    const file = audioInput.files?.[0];
    if (file) {
      fileNameLabel.textContent = `Selected: ${file.name}`;
    } else {
      fileNameLabel.textContent = "No file selected.";
    }
  });

  // -----------------------------
  // Tabs
  // -----------------------------
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      tabButtons.forEach((b) => b.classList.toggle("active", b === btn));
      tabPanels.forEach((panel) =>
        panel.classList.toggle("active", panel.id === "tab-" + tab)
      );
    });
  });

  // -----------------------------
  // Status management
  // -----------------------------
  function setStatus(msg, type) {
    statusText.textContent = msg;
    statusPill.className = "pill";
    
    switch(type) {
      case "processing":
        statusPill.classList.add("processing");
        statusPill.textContent = "Processing";
        break;
      case "success":
        statusPill.classList.add("success");
        statusPill.textContent = "Ready";
        break;
      case "error":
        statusPill.classList.add("error");
        statusPill.textContent = "Error";
        break;
      default:
        statusPill.textContent = "Idle";
    }
  }

  // -----------------------------
  // Generate Exam Pack (DEMO MODE)
  // -----------------------------
  generateBtn.addEventListener("click", async () => {
    if (isGenerating) return;

    const file = audioInput.files?.[0] || null;
    const manualTranscript = transcriptInput.value.trim();

    if (!file && !manualTranscript) {
      alert("Please choose an audio file or paste a transcript.");
      return;
    }

    isGenerating = true;
    setStatus("Generating exam pack… this may take a few seconds.", "processing");
    generateBtn.disabled = true;

    try {
      // DEMO MODE: Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Use manual transcript or generate sample
      currentTranscript = manualTranscript || generateSampleTranscript(file?.name);
      
      const mockData = generateMockExamPack(currentTranscript);
      
      // Transcript
      renderTranscript(currentTranscript);

      // Summary
      summaryShort.textContent = mockData.summary.short;
      summaryMedium.textContent = mockData.summary.medium;
      summaryDetailed.textContent = mockData.summary.detailed;

      // Notes
      notesBody.textContent = mockData.notes;

      // Questions
      renderQuestionsList(qMcq, mockData.questions.mcq);
      renderQuestionsList(qShort, mockData.questions.short);
      renderQuestionsList(qLong, mockData.questions.long);
      renderQuestionsList(qExpected, mockData.questions.expected);

      setStatus("Exam pack ready.", "success");
      
      // Switch to summary tab
      tabButtons[0].click();
      
    } catch (err) {
      console.error(err);
      setStatus("Failed to generate exam pack.", "error");
      alert("Failed to generate exam pack: " + err.message);
    } finally {
      isGenerating = false;
      generateBtn.disabled = false;
    }
  });

  function generateSampleTranscript(filename) {
    return `This is a sample transcript for ${filename || "your lecture"}.

In this lecture, we covered fundamental concepts of machine learning including supervised learning, unsupervised learning, and reinforcement learning. 

Supervised learning involves training models on labeled data where we know the correct outputs. Common algorithms include linear regression for continuous outputs and logistic regression for classification tasks.

Unsupervised learning deals with unlabeled data, finding patterns and structures within the data itself. Clustering algorithms like K-means and hierarchical clustering are popular examples.

Reinforcement learning is about agents learning to make decisions through trial and error, receiving rewards or penalties based on their actions. This is commonly used in game AI and robotics.

Key concepts include overfitting, underfitting, bias-variance tradeoff, cross-validation, and regularization techniques. Understanding these fundamentals is crucial for building effective machine learning models.`;
  }

  function generateMockExamPack(transcript) {
    return {
      summary: {
        short: "Machine learning fundamentals covering supervised, unsupervised, and reinforcement learning approaches.",
        medium: "This lecture introduces three main paradigms of machine learning: supervised learning (training on labeled data), unsupervised learning (finding patterns in unlabeled data), and reinforcement learning (agents learning through rewards). Key concepts include overfitting, bias-variance tradeoff, and regularization techniques.",
        detailed: "The lecture provides a comprehensive overview of machine learning fundamentals. It begins with supervised learning, where models are trained on labeled datasets with known outputs, exemplified by linear regression for continuous predictions and logistic regression for classification. The discussion then moves to unsupervised learning, which focuses on discovering hidden patterns in unlabeled data through techniques like K-means and hierarchical clustering. Reinforcement learning is introduced as a paradigm where agents learn optimal decision-making through trial and error, receiving feedback in the form of rewards or penalties. The lecture emphasizes critical concepts such as overfitting (when models memorize training data), underfitting (when models are too simple), the bias-variance tradeoff, cross-validation for model evaluation, and regularization techniques to prevent overfitting. These foundational concepts are essential for anyone building practical machine learning systems."
      },
      notes: `• Three main ML paradigms: Supervised, Unsupervised, Reinforcement Learning

• Supervised Learning:
  - Training on labeled data with known outputs
  - Linear regression for continuous predictions
  - Logistic regression for classification
  
• Unsupervised Learning:
  - Finding patterns in unlabeled data
  - K-means clustering
  - Hierarchical clustering
  
• Reinforcement Learning:
  - Agents learning through trial and error
  - Reward/penalty feedback system
  - Applications: game AI, robotics
  
• Key Concepts:
  - Overfitting: model memorizes training data
  - Underfitting: model too simple
  - Bias-variance tradeoff
  - Cross-validation for evaluation
  - Regularization to prevent overfitting`,
      questions: {
        mcq: [
          "What type of learning uses labeled data? (a) Unsupervised (b) Supervised (c) Reinforcement (d) None",
          "K-means is an example of: (a) Supervised learning (b) Classification (c) Unsupervised learning (d) Regression",
          "Which learning paradigm uses rewards and penalties? (a) Supervised (b) Unsupervised (c) Reinforcement (d) Semi-supervised"
        ],
        short: [
          "Explain the difference between supervised and unsupervised learning.",
          "What is overfitting and how can it be prevented?",
          "Describe the bias-variance tradeoff in machine learning."
        ],
        long: [
          "Compare and contrast supervised, unsupervised, and reinforcement learning. Provide examples of real-world applications for each paradigm.",
          "Discuss the concept of overfitting in detail. What causes it, how can it be detected, and what techniques can be used to prevent it?"
        ],
        expected: [
          "Explain supervised learning with examples of algorithms and their use cases.",
          "What is the bias-variance tradeoff and why is it important in model selection?",
          "Describe reinforcement learning and provide at least two practical applications."
        ]
      }
    };
  }

  function renderTranscript(text) {
    if (!text) {
      transcriptBox.textContent = "Transcript is empty.";
      transcriptBox.classList.add("transcript-empty");
      return;
    }
    transcriptBox.textContent = text;
    transcriptBox.classList.remove("transcript-empty");
  }

  function renderQuestionsList(container, list) {
    container.innerHTML = "";
    if (!list || list.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No questions.";
      li.classList.add("hint");
      container.appendChild(li);
      return;
    }
    list.forEach((q) => {
      const li = document.createElement("li");
      li.textContent = q;
      container.appendChild(li);
    });
  }

  // -----------------------------
  // Chat functionality
  // -----------------------------
  function addChatMessage(text, isUser) {
    const msg = document.createElement("div");
    msg.className = `chat-message ${isUser ? "user" : "bot"}`;
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  async function sendChatMessage() {
    if (isChatting) return;
    
    const question = chatInput.value.trim();
    if (!question) return;
    
    if (!currentTranscript) {
      addChatMessage("Please generate an exam pack first before asking questions.", false);
      return;
    }

    addChatMessage(question, true);
    chatInput.value = "";
    
    isChatting = true;
    chatSend.disabled = true;
    
    // Show typing indicator
    const typingMsg = document.createElement("div");
    typingMsg.className = "chat-message bot";
    typingMsg.textContent = "Thinking...";
    typingMsg
}
