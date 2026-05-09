const questionBank = [
  {
    keywords: ['name', 'who are you', 'who is andrei'],
    answer: "I'm Andrei Takacs, a first-year student and self-taught developer.",
  },
  {
    keywords: ['skills', 'what can you do', 'technologies'],
    answer: 'I work with HTML, CSS, JavaScript, TypeScript, Swift, Unity, Firebase, and design tools.',
  },
  {
    keywords: ['projects', 'work', 'show me projects'],
    answer: 'The site includes projects like GOsphere, Let Them In, Yuno, Fitty, TheVolunteer, and more.',
  },
  {
    keywords: ['contact', 'email', 'how do i reach you'],
    answer: 'You can reach me through the Contact page, or use the email shown there.',
  },
];

const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatFeedback = document.getElementById('chat-feedback');

function appendMessage(type, text) {
  const message = document.createElement('div');
  message.className = `message ${type}`;

  const meta = document.createElement('span');
  meta.className = 'message-meta';
  meta.textContent = type === 'user' ? 'You' : 'Bot';

  const content = document.createElement('p');
  content.textContent = text;

  message.appendChild(meta);
  message.appendChild(content);
  chatWindow.appendChild(message);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function findAnswer(rawInput) {
  const normalized = rawInput.toLowerCase().trim();

  for (const entry of questionBank) {
    if (entry.keywords.some((keyword) => normalized.includes(keyword))) {
      return entry.answer;
    }
  }

  return "I don't have that one yet. Try asking about skills, projects, contact, or name.";
}

appendMessage('bot', "Hi, I'm the site chatbot. Ask me about Andrei's name, skills, projects, or contact info.");

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const userQuestion = chatInput.value.trim();

  if (!userQuestion) {
    chatFeedback.textContent = 'Type a question first.';
    return;
  }

  chatFeedback.textContent = '';
  appendMessage('user', userQuestion);
  appendMessage('bot', findAnswer(userQuestion));
  chatInput.value = '';
  chatInput.focus();
});