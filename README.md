# Blocket - Enhanced Car Search

Welcome to **Blocket - Enhanced Car Search**! This is a Next.js application designed to help users effortlessly search and preview car listings, featuring an interactive chat UI and rich listing previews.

---

## Features

- ⚡ **Chat-Based Car Search:** Communicate with an intelligent assistant to browse car listings.
- 🖼️ **Listing Previews:** Message bubbles can render inline listing previews, showing key details and images.
- 🔗 **Direct Listing Links:** Get direct links to all listings matching your criteria.
- 💎 **Modern UI:** Built with [Next.js](https://nextjs.org/), Tailwind CSS, Framer Motion, and modern web standards.
- 🚀 Smart Filters Beyond Blocket: Intelligent techniques to filter listings even when Blocket doesn’t offer specific filter options.

---

## Top Filtering Enhancements

Blocket doesn’t always provide the most precise filters, so this app includes workarounds to help you target exactly what you’re looking for:

### 1. **Filter for Cupra Models (e.g., Seat Leon Cupra)**  
Blocket lacks direct filters for certain performance submodels like the **Cupra**, but we can infer them using horsepower ranges.

**Example filter:**  
'''
brand: "Seat",
model: "Leon",
engineEffect: { start: 270, end: 320 }
'''

We apply a small **error margin** to capture real-world listing variations. This helps surface **Seat Leon Cupra** models even though "Cupra" isn’t a selectable model.

---

### 2. **Search by Model Codes (e.g., BMW F10 / F30)**  
You can also search using **chassis/model codes**, like "BMW F10" or "BMW F30".

This automatically translates into a filtered query based on **model year ranges** for those specific generations.

For example:  
'''
query: "BMW F30"
→ translates to: modelYear: { start: 2012, end: 2019 }
'''

This allows deeper filtering even when Blocket doesn't offer model-code-based search.

---

## Project Structure

    src/
    │
    ├── app/
    │   ├── chat/
    │   │   └── page.tsx               # Chat page rendering the chat UI
    │   └── layout.tsx                 # Root-level layout & global styles
    │
    ├── components/
    │   ├── atoms/
    │   │   └── MessageBubble.tsx      # Displays a single message; can show links or listing previews
    │   ├── molecules/
    │   │   └── ListingLinkPreview.tsx # Card for a single car listing preview
    │   └── molecules/
    │       └── ChatView.tsx           # (Not shown, but used in chat page)
    │
    ├── utils/
    │   └── types/
    │       └── exampleListing.ts      # (Type definition for listings)
    │
    └── globals.css                    # Global CSS styles

---

## Getting Started

1. **Install Dependencies**

       npm install
       # or
       yarn

2. **Run the Development Server**

       npm run dev
       # or
       yarn dev

   Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Components Overview

- **ChatView** (likely in `src/components/molecules/ChatView.tsx`)  
  The main interactive chat component users interact with.

- **MessageBubble** (`src/components/atoms/MessageBubble.tsx`)  
  Renders each message in the chat. May display:
  - Plain system/user messages
  - Rich previews (using ListingLinkPreview)
  - Links to collections of listings

- **ListingLinkPreview** (`src/components/molecules/ListingLinkPreview.tsx`)  
  Shows a snapshot of a car listing: image, title, preview info, and price.

---

## Styling

- Uses **Tailwind CSS** classes throughout for rapid and responsive UI development.
- **Custom fonts** via Google Fonts and local fonts (set in `src/app/layout.tsx`).

---

## Extending & Customization

- Listing object types are likely defined in `src/utils/types/exampleListing.ts`.
- Adjust themes or global styles in `src/app/globals.css`.
- Top-level page layouts are managed in `src/app/layout.tsx`.

---

## License

This project is for demonstration purposes. For production, please add licensing information and necessary legal documents.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to help improve this project.

---

## Questions?

If you have questions about how the chat logic works or want to adapt the listing preview to your own data, check:
- The `src/components/molecules/ChatView.tsx` file (not shown here), as it orchestrates the chat flow.
- The type definitions for listings in `src/utils/types/exampleListing.ts`.

---
