# LemmaIoT - Modern Digital Solutions Website

![LemmaIoT Hero Section](./public/images/screenshot.png) <!-- It's highly recommended to add a screenshot of your project here. -->

A redesigned, modern, and interactive website for LemmaIoT, a digital solutions provider in Nigeria. This project features a clean UI, dynamic components, and is supercharged with two distinct AI-powered features using the Google Gemini API to provide immediate value to potential customers.

**Live Demo:** [https://your-live-site-url.netlify.app](https://your-live-site-url.netlify.app) <!-- Replace with your actual live URL -->

---

## ✨ Key Features

-   **Modern & Responsive UI:** Built with React, TypeScript, and styled with Tailwind CSS for a beautiful experience on any device.
-   **AI Business Advisor:** An innovative hero section component that instantly generates a tailored digital strategy for a user's business based on a short description.
-   **Interactive AI Assistant:** A conversational modal that guides users through their needs, asks clarifying questions, and concludes with a pre-filled WhatsApp link to connect them directly with the sales team.
-   **Dynamic Services Section:** A filterable grid showcasing the company's core services, allowing users to easily navigate between "Development" and "Business Growth" categories.
-   **Serverless Contact Form:** Seamlessly integrated with Netlify Forms, allowing the company to receive customer inquiries via their Netlify dashboard and email without needing a backend server or database.
-   **Performance Optimized:** Built with best practices, including preconnect hints and an efficient component structure for fast load times.
-   **SEO Ready:** Comprehensive meta tags (`title`, `description`, `keywords`, Open Graph, Twitter Cards) are configured in `index.html` for optimal search engine ranking and social media sharing.

---

## 🚀 Tech Stack

-   **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **AI Integration:** [Google Gemini API](https://ai.google.dev/) via `@google/genai`
-   **Hosting & Forms:** [Netlify](https://www.netlify.com/)

---

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or later)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/lemmaiot-website.git
    cd lemmaiot-website
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of your project and add your Google Gemini API key.
    ```
    API_KEY=your_gemini_api_key_here
    ```
    You can get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

4.  **Run the development server:**
    ```sh
    npm start
    # or
    yarn start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 🌐 Deployment

This project is optimized for deployment on **Netlify**.

1.  **Push your code to a GitHub repository.**
2.  **Connect your repository to Netlify:** Log in to Netlify and select "Add new site" -> "Import an existing project".
3.  **Configure build settings:** Netlify should automatically detect the correct settings. If not, use the following:
    -   **Build command:** `npm run build` or `yarn build`
    -   **Publish directory:** `dist` or `build` (depending on your build tool configuration)
4.  **Add Environment Variable:**
    -   In your Netlify site's settings, go to "Site configuration" -> "Environment variables".
    -   Add a new variable with the key `API_KEY` and paste your Google Gemini API key as the value.
5.  **Deploy!**

Netlify will automatically build and deploy your site. The contact form will work out-of-the-box thanks to the `data-netlify="true"` attribute in `Footer.tsx`.

---

## 📂 Project Structure

```
/
├── components/         # Reusable React components
│   ├── AIAgentModal.tsx
│   ├── AIBusinessAdvisor.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── ...
├── hooks/              # Custom React Hooks
│   └── useAIAgent.ts   # Logic for the AI Assistant
├── services/           # API interaction logic
│   └── geminiService.ts# Functions to call the Gemini API
├── App.tsx             # Main application component
├── constants.tsx       # Static data (services, pricing, etc.)
├── index.html          # HTML entry point with SEO tags
├── index.tsx           # React root renderer
└── ...
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
