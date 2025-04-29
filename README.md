# JSON to CSV Converter for blomgram.com Waitlist Data

This repository provides a simple tool to export the blomgram.com waitlist stored in MongoDB as a CSV file. It includes both:

- **Backend API** (Node.js) that fetches data from MongoDB, converts it to CSV, and serves it as an endpoint.
- **Frontend** (Next.js TypeScript + TSX) with a polished UI for initiating the download, featuring loading states and toast notifications.

The entire application is deployed on Vercel for seamless hosting and continuous deployment.

---

## 🚀 Features

- **One-click CSV export** of waitlist data
- **Loading spinner** while fetching
- **User feedback** via Sonner toasts (success, empty data, and errors)
- **Clean UI** built with Shadcn/UI and Framer Motion animations
- **Automatic deployment** on Vercel with zero-config

---

## 🛠️ Technology Stack

- **Node.js**: Backend runtime
- **MongoDB**: Waitlist data storage
- **json2csv**: JSON-to-CSV conversion
- **Next.js (App Router)**: Frontend framework (TypeScript / TSX)
- **Shadcn/UI**: Component library (Button, Toaster)
- **Framer Motion**: UI animations
- **Axios**: HTTP client
- **Sonner**: Toast notifications
- **Vercel**: Hosting & CI/CD

---

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/) v14+ installed
- MongoDB Atlas connection URI with a `waitlists` collection
- [Vercel CLI](https://vercel.com/download) for local and production deployments (optional)

---

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/json-to-csv-waitlist.git
   cd json-to-csv-waitlist
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env.local` file in the project root:
   ```bash
   MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/test"
   ```
   Add any other custom settings as needed.

---

## ⚙️ Running Locally

Start the Next.js development server (serves both frontend and API):
```bash
npm run dev
# or
yarn dev
```

- **Frontend** available at `http://localhost:3000/export`
- **API endpoint** available at `http://localhost:3000/api/export`

Click the **Download CSV** button to fetch and download `waitlist.csv`.

---

## 📦 Project Structure

```
json-to-csv-waitlist/
├── app/
│   ├── api/export/route.ts     # Next.js App Router API for CSV export
│   └── export/page.tsx         # Frontend UI for triggering CSV download
├── components/
│   └── ui/                     # Shadcn/UI components (Button, Toaster)
├── scripts/                    # (Optional) standalone Node.js scripts
├── public/                     # Static assets
├── .env.local                  # Environment variables
├── next.config.js              # Next.js configuration
├── package.json
└── README.md
```

---

## 🚀 Deployment to Vercel

1. **Push** your changes to a GitHub/GitLab/Bitbucket repository.
2. **Import** the project in the Vercel dashboard.
3. Vercel automatically detects Next.js and sets up CI/CD.
4. Configure the `MONGODB_URI` environment variable in Vercel’s settings.
5. Click **Deploy**, and your app will be live at `https://<your-app>.vercel.app/export`.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "feat: add ..."`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

Please follow the existing code style and include tests or examples where appropriate.

---

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

