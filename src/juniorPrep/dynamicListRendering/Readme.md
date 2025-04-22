# React User List with Search, Sort, and Pagination

![Project Preview](../../../public/Screenshot%202025-04-09%20033748.png)

A dynamic user list application built with React that demonstrates:
- Fetching data from an API
- Real-time search filtering
- Sorting by name or ID
- Pagination (5 users per page)

## Features

- **Live Search**: Filter users by name as you type
- **Sorting**: Toggle between alphabetical (A-Z) and ID sorting
- **Pagination**: Browse 5 users at a time with navigation controls
- **Loading States**: Shows loading indicator during API fetch
- **Error Handling**: Displays friendly error messages

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Josh-Alhassan/react-interview-prep.git
```

2. Install dependencies:
```bash
cd react-user-list
npm install
```

3. Run the development server:
```bash
npm start
```

## Usage

1. The app will automatically fetch users from JSONPlaceholder API
2. Use the search box to filter users by name
3. Click "Name (A-Z)" or "ID" buttons to change sorting
4. Navigate through pages using the pagination controls

## Code Structure

```
/src
├── juniorPrep
│   ├── UserList.js       # Main component with all functionality
│   
├── App.js
└── index.js
```

## Dependencies

- React 18+
- React DOM
- JavaScript ES6+

## API Used

This project uses the free [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API:
```
GET https://jsonplaceholder.typicode.com/users
```

## Customization

You can easily modify:
- Number of users per page (change `usersPerPage` constant)
- Sorting methods (add new options to `sortMethod` state)
- Styling (edit inline styles or connect to CSS)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

**Note**: This project was created as part of Junior React Developer interview preparation. It demonstrates core React concepts including:
- useState/useEffect hooks
- API data fetching
- List rendering and manipulation
- Component state management