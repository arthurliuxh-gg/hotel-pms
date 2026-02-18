-- Seed data for Hotel PMS development

-- Insert default room types
INSERT INTO room_types (name, description, base_price, max_occupancy, amenities) VALUES
('Standard Single', 'Comfortable single room with basic amenities', 89.99, 1, '{"wifi": true, "tv": true, "ac": true}'),
('Standard Double', 'Spacious double room with modern amenities', 129.99, 2, '{"wifi": true, "tv": true, "ac": true, "minibar": true}'),
('Deluxe Suite', 'Luxury suite with separate living area', 249.99, 4, '{"wifi": true, "tv": true, "ac": true, "minibar": true, "jacuzzi": true, "balcony": true}'),
('Executive Suite', 'Premium suite with office space and exclusive amenities', 399.99, 4, '{"wifi": true, "tv": true, "ac": true, "minibar": true, "jacuzzi": true, "balcony": true, "office": true, "butler": true}');

-- Insert sample rooms
INSERT INTO rooms (room_number, room_type_id, floor, status) 
SELECT '10' || n, 
  (SELECT id FROM room_types WHERE name = 'Standard Single' LIMIT 1),
  1,
  'available'
FROM generate_series(1, 5) n;

INSERT INTO rooms (room_number, room_type_id, floor, status) 
SELECT '20' || n, 
  (SELECT id FROM room_types WHERE name = 'Standard Double' LIMIT 1),
  2,
  'available'
FROM generate_series(1, 8) n;

INSERT INTO rooms (room_number, room_type_id, floor, status) 
SELECT '30' || n, 
  (SELECT id FROM room_types WHERE name = 'Deluxe Suite' LIMIT 1),
  3,
  'available'
FROM generate_series(1, 4) n;

INSERT INTO rooms (room_number, room_type_id, floor, status) 
SELECT '40' || n, 
  (SELECT id FROM room_types WHERE name = 'Executive Suite' LIMIT 1),
  4,
  'available'
FROM generate_series(1, 2) n;

-- Insert default admin user (password: admin123)
INSERT INTO users (email, password, first_name, last_name, role) VALUES
('admin@hotelpms.com', '$2a$10$5Qw3Y.xYhKjJ5K.7Xz5Z8e0YK7KZz9K7K7K7K7K7K7K7K7K7K7K7K', 'Admin', 'User', 'admin'),
('frontdesk@hotelpms.com', '$2a$10$5Qw3Y.xYhKjJ5K.7Xz5Z8e0YK7KZz9K7K7K7K7K7K7K7K7K7K7K7K', 'Front', 'Desk', 'front_desk'),
('housekeeping@hotelpms.com', '$2a$10$5Qw3Y.xYhKjJ5K.7Xz5Z8e0YK7KZz9K7K7K7K7K7K7K7K7K7K7K7K', 'House', 'Keeping', 'housekeeping');

-- Note: All demo users have password 'admin123'
-- In production, these should be changed immediately