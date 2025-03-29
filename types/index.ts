export interface SocialMedia {
    _id?: string;
    media?: string; // Optional social platform name
    profileUrl?: string; // Optional profile URL
}

export interface Outlet {
    _id?: string
    name: string; // Name of the outlet
    address: string; // Address of the outlet
    city: string; // City of the outlet
    pin: string; // 6-digit PIN code
    contact: string; // 10-digit phone number
    alternateContact?: string; // Optional alternate contact number
    socialMedia?: SocialMedia; // Optional social media details
}

export interface UserStaff {
    _id: string
    staffid: number; // 6-digit numeric staff ID
    name: string; // Name of the staff member
    password: string; // Encrypted password
    department:
      | "executive"
      | "admin"
      | "sales"
      | "accounts"
      | "humanresource"
      | "housekeeping"
      | "kitchen"
      | "delivery partner"; // Allowed department values
    level: string; // Level of the staff member
    outlet: string; // Reference to the Outlet (ObjectId as a string)
    address1: string; // Primary address
    address2: string; // Secondary address
    contact: string; // 10-digit phone number
    alternateContact?: string; // Optional 10-digit alternate contact number
    email?: string; // Optional email address
  }

  export interface MenuDetails {
    item: string; // Reference to the Item model (ObjectId as a string)
    price: number; // Price of the menu item
    isAvailable: boolean; // Availability status of the menu item
  }
  
  export interface Menu {
    _id?: string; // Optional ObjectId for the menu (used for existing menus)
    name: string; // Name of the menu
    outlet: string; // Reference to the Outlet model (ObjectId as a string)
    labels?: string[]; // Optional array of labels
    menuDetails: MenuDetails[]; // Array of menu details
  }

  export interface Category {
    _id: string; // MongoDB ID for the category
    name: string; // Name of the category
  }
  export interface Label {
    _id: string;
    name: string;
  }
  

  export interface MenuItem {
    _id?: string; // Optional ObjectId for existing items
    name: string; // Name of the menu item
    description: string; // Description of the menu item
    ingrediants: string; // Ingredients of the menu item
    isVeg: boolean; // Whether the item is vegetarian
    price: number; // Price of the menu item
    imageUrl: string; // URL of the item's image
    category: string; // Category ID (from the Category interface)
    labels?: string[]; // Optional labels
    createdAt?: Date; // Optional creation timestamp
    availableAt?: string[]; // Optional array of outlet IDs where the item is available
  }