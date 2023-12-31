import { getUserData } from './api';

const { title, heading, articleContent } = document.documentElement.dataset;

document.addEventListener('DOMContentLoaded', async () => {
  const greetingElement = document.getElementById('greeting');

  try {
    const user = await getUserData();
    const userName = user.name || 'Visitor';
    greetingElement.textContent = `Hello, ${userName}! Welcome to our AI-powered theme.`;
  } catch (error) {
    console.error('Error fetching user data:', error);
    greetingElement.textContent = 'Hello, Visitor! Welcome to our AI-powered theme.';
  }
});
