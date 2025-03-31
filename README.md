# Nirvana - Your Personal Journal

## Overview
Nirvana is a personal journaling app designed to make tracking emotions, thoughts, and daily experiences effortless. With a simple and intuitive interface, users can log their moods, write notes, and save their entries seamlessly. The app is built using React and follows a structured approach to state management and API handling.

## Features
- **Mood Tracking:** Select an emoji to reflect your current emotion.
- **Journal Entries:** Write notes with options like to-do lists and reflections.
- **Photo Uploads:** Attach an image to your journal entry (stored on Cloudinary, with the link saved in a JSON server).
- **Search by Date:** Quickly find past entries based on date.
- **Favorites:** Mark important journal entries for easy access.
- **Remember Feature:** Highlight and save key moments.
- **History Page:** View and manage past entries with a calendar-based UI.
- **Login System:** Basic authentication for personalized experiences (WIP).(future plan)
- **Responsive Design:** Works across different devices.(future plan)

## Tech Stack
- **Frontend:** React (Vite), Axios for API calls.
- **State Management:** React Hooks.
- **Backend (Mock Data):** JSON Server for storing journal entries.
- **Media Storage:** Cloudinary for image hosting.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/RishabhKumarDev/nirvana.git
   ```
2. Navigate to the project folder:
   ```sh
   cd nirvana
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the JSON server (for local data storage):
   ```sh
   json-server --watch data/db.json --port 5000
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```
If you don't want photo upload feature don't follow further step.
## Environment Variables
Create a `.env` file in the root directory and add the following:
```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_CLOUDINARY_UPLOAD_PRESET=your_preset_name
```

## API Endpoints
- `GET /entries` - Fetch all journal entries.
- `POST /entries` - Add a new entry.
- `DELETE /entries/:id` - Remove an entry.

## Known Issues & Future Improvements(All Issues will be gone when I will add a real backend currently i am using .JSON that's why the Issues are.)
- **Image Upload Flow:** Currently, images are uploaded to Cloudinary before clicking save. This might need optimization.
- **Authentication:** Implement a real authentication system instead of mock login.
- **Data Persistence:** Move from JSON Server to a real backend (e.g., Firebase, MongoDB).
- **Voice Notes (Planned):** Adding voice recording as an optional journal input.
- **Enhanced Search:** Implement advanced search options based on tags or keywords.

## Contribution
Feel free to fork the repo and submit pull requests for improvements!

## License
This project is open-source under the MIT license.

---
Built with ❤️ by [Rishabh kumar ( aka- blue)]

