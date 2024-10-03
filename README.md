# Kari Shop Project

## Project Overview
Kari Shop is a full-featured e-commerce platform where artists can showcase their shops and sell products, both physical and digital. Clients can browse shops, add products to wishlists or carts, and place orders. Admins oversee user and shop management, ensuring smooth operation across the platform.

This project involves two main parts:
- **Frontend:** Built with Vite, React.js, and Tailwind CSS for a responsive, dynamic, and modern user experience.
- **Backend:** Implements RESTful APIs for handling CRUD operations, user authentication (JWT), role-based access control, and product management.

---

## Frontend Technologies
- **Vite**: Provides fast build times and a modern development environment for React.js.
- **React.js**: The main framework for building reusable and scalable user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI design and responsiveness.

### Key Frontend Features:
1. **Dynamic User Interface**: Tailored for different user roles (artist, client, admin).
2. **E-commerce Functionality**: Includes shopping cart, wishlist, and checkout flows.
3. **Responsive Design**: Optimized for all screen sizes and devices.
4. **Role-based Dashboards**: Separate views and functionalities for artists, clients, and admins.
5. **Content Management**: Artists can upload and manage products, while clients browse and purchase items.

---

## Entity Relationship Diagram (ERD) Summary

The platform’s data model follows a well-organized ERD, breaking down into the following core entities:

### 1. **User**
- **Attributes**: `user_id`, `name`, `email`, `password`, `phone_number`, `address`, `role` (artist, client, admin), `profile_picture`, `gender`.
- **Relationships**:
  - A user can own multiple shops (if they are an artist).
  - Users can manage orders, wishlists, and carts.

### 2. **Shop**
- **Attributes**: `shop_id`, `shop_name`, `icon`, `description`, `category_id`, `artist_id`.
- **Relationships**:
  - A shop belongs to a single artist.
  - A shop contains multiple products.

### 3. **Category**
- **Attributes**: `category_id`, `category_name`.
- **Relationships**:
  - Categories contain multiple products.
  - Categories can be linked to multiple shops.

### 4. **Product**
- **Attributes**: `product_id`, `name`, `description`, `gallery`, `sales_price`, `regular_price`, `quantity`, `tags`, `category_id`, `shop_id`.
- **Relationships**:
  - Products belong to one category and one shop.
  - Products can appear in multiple orders, wishlists, and carts.

### 5. **Order**
- **Attributes**: `order_id`, `user_id`, `order_date`, `status`, `delivery_info`, `payment_info`, `total_price`.
- **Relationships**:
  - Orders are placed by users and contain multiple order items.

### 6. **Order Item**
- **Attributes**: `order_item_id`, `order_id`, `product_id`, `quantity`, `price`.
- **Relationships**:
  - Links products to orders.

### 7. **Wishlist**
- **Attributes**: `wishlist_id`, `user_id`.
- **Relationships**:
  - A user can manage multiple products in their wishlist.

### 8. **Cart**
- **Attributes**: `cart_id`, `user_id`.
- **Relationships**:
  - A user can add multiple products to their cart.

### Additional Entities (Enhancements):
- **Transaction**: Tracks payments, donations, and refunds.
- **Review**: Allows clients to review and rate products.
- **Notification**: Stores system notifications for users.

---

## Frontend Features Based on Entities

### 1. **User Registration and Profile Management**
- **Artist-Specific Fields**: Name, profile picture, biography, genres, etc.
- **Client-Specific Fields**: Name, email, phone, gender, address, etc.

### 2. **Shop Management**
- Artists can create and manage shops.
- Shops will include fields for shop name, description, categories, and banners.

### 3. **Product Management**
- Artists can add, edit, or remove products.
- Product features include images, sales price, regular price, stock quantity, and optional digital rights management (DRM) for digital products.

### 4. **Shopping Cart and Wishlist**
- **Cart**: Clients can add products, adjust quantities, and apply coupons.
- **Wishlist**: Clients can save products for future reference.

### 5. **Order Processing**
- Clients can view their order history and track order statuses.
- Artists and admins can manage order details, including shipment status and delivery dates.

### 6. **Admin Panel**
- Admins can manage all users, shops, products, and categories.
- Features include approving shops, overseeing order transactions, and generating sales reports.

---

## Suggested Enhancements

### 1. **Digital Content Protection**
- Implement DRM protection for digital products such as music or videos, with download limits.

### 2. **Product Variants**
- Add variations for products like size and color for categories like Fashion and Beauty.

### 3. **SEO Enhancements**
- Ensure SEO meta tags for products and shops to improve visibility on search engines.

### 4. **Real-Time Dashboards**
- Admins and artists will have access to sales and product performance dashboards.

---

## Future Enhancements
- **Two-Factor Authentication**: Secure user accounts using 2FA.
- **Social Media Integration**: Allow users to log in via Facebook, Google, or other social platforms.
- **Push Notifications**: Inform users of updates, order statuses, or new product launches.

---

## How to Run the Frontend

1. Clone the repository:
   ```bash
   git clonehttps://github.com/Karizm-Karishop/ShopFront.git
   ```
2. Navigate to the frontend directory:
   ```bash
   cd ShopFront
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.

---

This README provides a high-level summary of the Kari Shop project's frontend and entity structure, as well as some future directions for enhancement.
