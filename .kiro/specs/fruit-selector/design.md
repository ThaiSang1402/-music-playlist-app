# Design Document - Fruit Selector

## Overview

Fruit Selector là một ứng dụng React Native đơn giản cho phép người dùng tìm kiếm và chọn trái cây thông qua giao diện trực quan. Ứng dụng sử dụng các thành phần UI hiện đại bao gồm AutoComplete input, Spinner dropdown, và GridView để hiển thị kết quả. Thiết kế tập trung vào tính đơn giản, dễ sử dụng và giao diện đẹp mắt với màu sắc nhẹ nhàng.

## Architecture

### Component Hierarchy

```
FruitSelector (Main Screen)
├── Header (Title)
├── SearchSection
│   ├── AutoComplete Input
│   └── Spinner Dropdown
└── ResultsSection
    └── GridView (FlatList with 2 columns)
        └── FruitCard (Individual fruit items)
```

### Technology Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript
- **UI Components**: 
  - React Native core components (View, Text, TextInput, FlatList)
  - Custom AutoComplete component
  - Picker/Dropdown for Spinner
- **Styling**: StyleSheet API
- **State Management**: React Hooks (useState, useEffect)

## Components and Interfaces

### 1. FruitSelector Component (Main Screen)

**Purpose**: Root component that orchestrates the entire fruit selection interface

**Props**: None (root screen component)

**State**:
```typescript
interface FruitSelectorState {
  searchText: string;           // Current text in AutoComplete
  selectedFruit: string;        // Currently selected fruit from Spinner
  fruits: string[];             // List of all available fruits
  filteredFruits: string[];     // Filtered fruits based on search
  suggestions: string[];        // AutoComplete suggestions
}
```

**Key Methods**:
- `handleSearchChange(text: string)`: Updates search text and filters fruits
- `handleFruitSelect(fruit: string)`: Handles fruit selection from Spinner
- `filterFruits(searchText: string)`: Filters fruit list based on input

### 2. AutoComplete Component

**Purpose**: Text input with autocomplete suggestions

**Props**:
```typescript
interface AutoCompleteProps {
  value: string;
  onChangeText: (text: string) => void;
  suggestions: string[];
  placeholder: string;
  label: string;
}
```

**Features**:
- Real-time filtering as user types
- Dropdown suggestion list
- Keyboard dismissal on selection

### 3. FruitSpinner Component

**Purpose**: Dropdown selector for predefined fruit options

**Props**:
```typescript
interface FruitSpinnerProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
  items: string[];
  label: string;
}
```

**Features**:
- Native picker/dropdown behavior
- Styled to match design
- Displays current selection

### 4. FruitGrid Component

**Purpose**: Grid layout displaying fruit cards

**Props**:
```typescript
interface FruitGridProps {
  fruits: string[];
  numColumns: number;
}
```

**Features**:
- 2-column grid layout using FlatList
- Responsive card sizing
- Consistent spacing

### 5. FruitCard Component

**Purpose**: Individual fruit display card

**Props**:
```typescript
interface FruitCardProps {
  name: string;
}
```

**Features**:
- Pink/purple gradient background
- Centered text
- Rounded corners
- Touch feedback (optional)

## Data Models

### Fruit Data Structure

```typescript
// Simple string array for this implementation
type FruitList = string[];

// Example data
const FRUITS: FruitList = [
  'Apple',
  'Pineapple',
  'Banana',
  'Orange',
  'Mango',
  'Strawberry',
  'Watermelon',
  'Grape',
  'Kiwi',
  'Peach'
];
```

### State Management

```typescript
// Main application state
interface AppState {
  searchText: string;
  selectedFruit: string;
  fruits: string[];
  filteredFruits: string[];
}

// Initial state
const initialState: AppState = {
  searchText: '',
  selectedFruit: 'Apple',
  fruits: FRUITS,
  filteredFruits: FRUITS
};
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Search filtering correctness
*For any* search text input, the filtered fruit list should contain only fruits whose names include the search text (case-insensitive), and should include all such matching fruits.
**Validates: Requirements 2.1**

### Property 2: AutoComplete selection updates field
*For any* fruit selected from the AutoComplete suggestions, the input field value should be updated to match the selected fruit name exactly.
**Validates: Requirements 2.4**

### Property 3: Spinner selection persistence
*For any* fruit selected in the Spinner, after closing and reopening the Spinner, the displayed value should remain the selected fruit.
**Validates: Requirements 3.3, 3.4**

## Error Handling

### Input Validation

**Empty Search Handling**:
- When search text is empty, display all fruits
- No error messages needed for empty input
- Gracefully handle whitespace-only input

**No Results Handling**:
- When search yields no results, display empty grid
- Optionally show "No fruits found" message
- Maintain UI structure even with empty results

### Component Error Boundaries

**Rendering Errors**:
- Wrap main component in Error Boundary
- Display fallback UI if component fails to render
- Log errors for debugging

**State Management Errors**:
- Validate state updates before applying
- Ensure state consistency across re-renders
- Handle undefined/null values gracefully

## Testing Strategy

### Unit Testing

**Component Rendering Tests**:
- Verify FruitSelector renders without crashing
- Check that header displays "Fruit Selector" text
- Verify AutoComplete input is present with correct label
- Verify Spinner is present with initial values
- Confirm GridView renders with 2 columns
- Verify fruit cards have correct styling (pink background, rounded corners)

**Interaction Tests**:
- Test search text input updates state
- Test fruit selection from Spinner updates state
- Test keyboard dismissal on outside tap
- Verify FlatList renders correct number of items

**Styling Tests**:
- Verify all styles are defined using StyleSheet.create()
- Check that pink color (#FFB6E1) is used for buttons
- Verify border and background styles are applied to inputs
- Confirm grid spacing and padding styles exist

**Code Structure Tests**:
- Verify component is a functional component
- Confirm useState hooks are used for state management
- Verify FlatList uses numColumns prop set to 2
- Check that controlled components properly connect value and onChange

### Property-Based Testing

We will use **fast-check** library for property-based testing in TypeScript/JavaScript.

**Property Test 1: Search Filtering**
- Generate random search strings
- Generate random fruit lists
- Verify filtered results contain only matching fruits
- Verify all matching fruits are included
- Test case-insensitive matching

**Property Test 2: Selection Updates**
- Generate random fruit selections
- Verify input field updates to selected value
- Verify state consistency after selection

**Property Test 3: State Persistence**
- Generate random fruit selections
- Simulate Spinner open/close cycles
- Verify selected value persists

### Edge Cases

**Empty Input Edge Case**:
- When search text is empty string, all fruits should be displayed
- Validates: Requirements 2.3

**No Matches Edge Case**:
- When search text matches no fruits, empty list should be displayed
- Validates: Requirements 2.5

**Whitespace Handling**:
- Search should handle leading/trailing whitespace
- Empty whitespace-only input should show all fruits

### Integration Testing

**Full User Flow**:
1. App loads with initial state
2. User types in AutoComplete
3. Suggestions appear and filter correctly
4. User selects from Spinner
5. GridView updates with results
6. Keyboard interactions work properly

### Test Configuration

- Minimum 100 iterations for each property-based test
- Use React Native Testing Library for component tests
- Use Jest as test runner
- Configure fast-check for property-based tests

## Implementation Notes

### Styling Approach

All styles will be defined using `StyleSheet.create()` for performance and type safety:

```typescript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFF',
  },
  spinner: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  gridContainer: {
    marginTop: 20,
  },
  fruitCard: {
    flex: 1,
    margin: 8,
    padding: 20,
    backgroundColor: '#FFB6E1',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fruitText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
```

### Performance Considerations

- Use `FlatList` for efficient rendering of large fruit lists
- Implement `keyExtractor` for proper list item identification
- Use `React.memo` for FruitCard if needed
- Avoid inline style objects (use StyleSheet)

### Accessibility

- Add `accessibilityLabel` to interactive components
- Ensure proper contrast ratios for text
- Support screen readers
- Provide keyboard navigation support

### Platform-Specific Considerations

- Use `KeyboardAvoidingView` with platform-specific behavior
- Handle different Picker implementations (iOS vs Android)
- Test on both platforms for consistent experience
