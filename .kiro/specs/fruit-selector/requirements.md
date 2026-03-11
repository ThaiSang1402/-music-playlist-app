# Requirements Document

## Introduction

Ứng dụng Fruit Selector là một màn hình tìm kiếm và hiển thị trái cây sử dụng React Native. Ứng dụng cho phép người dùng tìm kiếm trái cây thông qua AutoComplete, xem gợi ý trong Spinner, và hiển thị kết quả trong GridView với giao diện đẹp mắt.

## Glossary

- **FruitSelector**: Màn hình chính của ứng dụng cho phép tìm kiếm và hiển thị trái cây
- **AutoComplete**: Thành phần nhập liệu tự động gợi ý dựa trên văn bản người dùng nhập
- **Spinner**: Thành phần dropdown cho phép chọn từ danh sách các tùy chọn
- **GridView**: Thành phần hiển thị danh sách items trong dạng lưới (grid layout)
- **StyleSheet**: API của React Native để tạo và quản lý styles
- **FruitItem**: Một đối tượng trái cây với tên và thông tin liên quan

## Requirements

### Requirement 1

**User Story:** As a user, I want to see a clean and organized fruit selector interface, so that I can easily navigate and use the application.

#### Acceptance Criteria

1. WHEN the FruitSelector screen loads THEN the System SHALL display a header with title "Fruit Selector"
2. WHEN the FruitSelector screen renders THEN the System SHALL display an AutoComplete input field labeled "App"
3. WHEN the FruitSelector screen renders THEN the System SHALL display a Spinner dropdown labeled "Apple" and "Pineapple"
4. WHEN the FruitSelector screen renders THEN the System SHALL apply consistent styling using StyleSheet API
5. WHEN the FruitSelector screen renders THEN the System SHALL use a light background color with proper spacing and padding

### Requirement 2

**User Story:** As a user, I want to search for fruits using an autocomplete field, so that I can quickly find fruits without typing the full name.

#### Acceptance Criteria

1. WHEN a user types in the AutoComplete field THEN the System SHALL filter the fruit list based on the input text
2. WHEN a user types in the AutoComplete field THEN the System SHALL display matching suggestions in real-time
3. WHEN the AutoComplete field is empty THEN the System SHALL display all available fruits
4. WHEN a user selects a suggestion from AutoComplete THEN the System SHALL populate the field with the selected fruit name
5. WHEN a user types text that matches no fruits THEN the System SHALL display an empty suggestion list

### Requirement 3

**User Story:** As a user, I want to select fruits from a spinner dropdown, so that I can choose from predefined options easily.

#### Acceptance Criteria

1. WHEN a user taps the Spinner component THEN the System SHALL display a dropdown list of available fruits
2. WHEN the Spinner displays options THEN the System SHALL include "Apple" and "Pineapple" as selectable items
3. WHEN a user selects an item from the Spinner THEN the System SHALL update the displayed value to the selected fruit
4. WHEN the Spinner is closed THEN the System SHALL maintain the last selected value
5. WHEN the Spinner renders THEN the System SHALL apply consistent styling with rounded corners and proper padding

### Requirement 4

**User Story:** As a user, I want to see search results displayed in a grid layout, so that I can view multiple fruits at once in an organized manner.

#### Acceptance Criteria

1. WHEN search results are available THEN the System SHALL display fruits in a GridView with 2 columns
2. WHEN the GridView renders THEN the System SHALL display each fruit in a card with pink/purple background color
3. WHEN the GridView renders THEN the System SHALL apply consistent spacing between grid items
4. WHEN the GridView renders THEN the System SHALL center the fruit name text within each card
5. WHEN the GridView renders THEN the System SHALL apply rounded corners to each fruit card

### Requirement 5

**User Story:** As a user, I want the interface to have proper styling and layout, so that the application looks professional and is easy to use.

#### Acceptance Criteria

1. WHEN any component renders THEN the System SHALL apply styles defined using React Native StyleSheet API
2. WHEN the screen renders THEN the System SHALL use consistent color scheme with pink (#FFB6E1) for buttons
3. WHEN the screen renders THEN the System SHALL apply proper margins and padding to all components
4. WHEN text inputs render THEN the System SHALL display borders and background colors for clear visibility
5. WHEN the screen renders THEN the System SHALL ensure all text is readable with appropriate font sizes

### Requirement 6

**User Story:** As a user, I want the app to handle keyboard interactions properly, so that I can input text without the keyboard covering important UI elements.

#### Acceptance Criteria

1. WHEN the keyboard appears THEN the System SHALL adjust the view to keep input fields visible
2. WHEN a user taps outside input fields THEN the System SHALL dismiss the keyboard
3. WHEN the keyboard is visible THEN the System SHALL not obscure the GridView results
4. WHEN the keyboard dismisses THEN the System SHALL restore the original layout
5. WHEN using KeyboardAvoidingView THEN the System SHALL apply appropriate behavior for the platform

### Requirement 7

**User Story:** As a developer, I want to use proper React Native components and patterns, so that the code is maintainable and follows best practices.

#### Acceptance Criteria

1. WHEN implementing the FruitSelector THEN the System SHALL use functional components with React Hooks
2. WHEN managing state THEN the System SHALL use useState hook for component state
3. WHEN defining styles THEN the System SHALL use StyleSheet.create() for all component styles
4. WHEN implementing the grid THEN the System SHALL use FlatList with numColumns prop for GridView functionality
5. WHEN handling user input THEN the System SHALL properly manage controlled components with state
