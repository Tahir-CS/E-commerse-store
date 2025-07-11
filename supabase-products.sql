-- Insert sample products (migrating from products.json)

INSERT INTO products (name, description, price, image, features, category_id, stock_quantity) VALUES 
(
    'UltraComfort Chair',
    'A supremely comfy chair for your modern home or office.',
    129.99,
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80',
    '["Ergonomic design for all-day comfort", "Adjustable height and tilt", "Premium leatherette upholstery", "Supports up to 250 lbs"]',
    2, -- Furniture
    25
),
(
    'Zenith Laptop',
    'Fast, reliable, and stylish. Everything you want in a laptop.',
    1499.00,
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
    '["Intel Core i9 13th Gen Processor", "16GB DDR5 RAM, 1TB SSD", "16\" Retina display with 120Hz refresh", "Thunderbolt 4, HDMI, USB-C", "14-hour battery life", "Ultra-thin aluminum chassis", "Fingerprint reader & FHD webcam"]',
    1, -- Electronics
    15
),
(
    'AeroFlex Sneakers',
    'Lightweight, breathable sneakers perfect for any activity.',
    89.99,
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80',
    '["Breathable mesh upper", "Memory foam insole", "Lightweight EVA midsole", "Durable rubber outsole", "Available in multiple colors"]',
    3, -- Clothing
    50
),
(
    'Essential Productivity Guide',
    'Transform your daily routine with proven productivity strategies.',
    19.99,
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
    '["250+ pages of actionable advice", "Time management techniques", "Goal-setting frameworks", "Digital and physical formats available"]',
    4, -- Books
    100
),
(
    'PowerMax Blender',
    'Professional-grade blender for smoothies, soups, and more.',
    199.99,
    'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80',
    '["1500W motor for tough ingredients", "Variable speed control", "Self-cleaning function", "BPA-free pitcher", "Recipe book included"]',
    1, -- Electronics
    30
),
(
    'Modern Coffee Table',
    'Sleek and functional coffee table for contemporary living spaces.',
    299.99,
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    '["Solid wood construction", "Hidden storage compartment", "Minimalist design", "Easy assembly", "Scratch-resistant finish"]',
    2, -- Furniture
    20
)
ON CONFLICT DO NOTHING;
