# Discord Status API

## Overview

The Discord Status API is a simple service that allows you to fetch the online status of a specific Discord user. The API integrates with the Discord API to track and report the presence status of a designated user.

## Features

- Provides the online status of a specific Discord user.
- Tracks changes in user presence and activity.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/discord-status-api.git
   cd discord-status-api
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   DISCORD_BOT_TOKEN=your_discord_bot_token
   DISCORD_USER_ID=your_discord_user_id
   ```

   Replace `your_discord_bot_token` with your bot’s token and `your_discord_user_id` with the Discord user ID you want to track.

### Running the Application

To start the server:

```bash
npm start
```

For development with live reloading:

```bash
npm run dev
```

### API Endpoints

- **GET /api/status**

  Fetches the current online status of the configured Discord user.

  **Response:**

  ```json
  {
    "status": "Online - 0: Visual Studio Code"
  }
  ```

### Example Usage

To test the API, you can use tools like `curl` or Postman, or make requests directly from your frontend application.

**Example Request Using Fetch API:**

```javascript
const fetchStatus = async () => {
  try {
    const response = await fetch('https://discord-status-api.onrender.com/api/status');
    const data = await response.json();
    console.log(data.status);
  } catch (error) {
    console.error('Error fetching Discord status:', error);
  }
};

fetchStatus();
```

### Deployment

You can deploy this API to a hosting service like [Render](https://render.com) or [Fly.io](https://fly.io). Make sure to configure the environment variables on your hosting platform.

### Contributing

If you’d like to contribute to this project, please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the existing style and passes all tests.

### License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

### Acknowledgments

- [Discord.js](https://discord.js.org/) - A powerful library for interacting with the Discord API.
- [Express](https://expressjs.com/) - A minimal and flexible Node.js web application framework.
