A modern landing page for DigiTools — basically, a marketplace for digital productivity tools. Think AI writing apps, design templates, automation kits, resume builders, stuff like that. Users can browse products, add them to a cart, and even manage that cart right there in the page.

Main features:

- **Responsive Navbar**: The logo, main menu links (Products, Features, Pricing, etc.), cart icon with a count badge, Login button, and a big, colorful Get Started button. On mobile, everything centers nicely; on desktop, it spreads out with justify-between.
- **Banner/Hero Section**: Big headline, some catchy description, two call-to-action buttons, and a slick illustration. It’s what grabs people’s attention right away.
- **Main Interactive Area**: Central buttons/tabs for toggling between viewing the Products and the Cart. When you land, you see products. Click Cart, you switch the view.
- **Products Section**: A grid of 6–10 cards, laid out in three columns. Each card has all the details: name, description, price and billing period, tag badge (like “Popular” or “New”), list of features, an icon, and a “Buy Now” button.
- **Cart Functionality**: Real cart logic. Add stuff with the “Buy Now” button, view all added items in the cart (with remove buttons), see a total, and clear everything with “Proceed to Checkout.” Every action pops a React-Toastify notification (so the user knows what just happened).
  
It’s all built with:

- **React.js** (As main framework)
- **Tailwind CSS** + **DaisyUI** (for styling/components)
- **Font Awesome** (for icons)
- **React-Toastify** (for notifications)
- **JSON** (for product data)
- **JavaScript ES6+** (standard for React logic)
- `useState` hooks (for cart management, switching views, updating counts)

In short, this isn’t just a pretty page. Visitors can actually browse, buy, and manage a cart — kind of like a mini e-commerce site made for digital tools. The design is clean, modern, and purple-gradient themed. Everything is fully responsive, so it looks good and works well whether you’re on phone, tablet, or desktop.
