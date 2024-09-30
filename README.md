Here is a sample `README.md` for your project:


# Investment Calculator

This project is a simple **Investment Calculator** built using **React**. The app allows users to input their investment details, such as initial investment, annual contributions, expected return rate, and investment duration. The app then calculates the results of the investment over time and displays the data in a table, showing the interest earned, the total value of the investment at the end of each year, and the total invested capital.

## Features

- **Initial Investment Input**: Users can specify how much they want to invest initially.
- **Annual Investment Input**: Users can enter an amount they will contribute annually.
- **Expected Return Input**: Users input the expected annual return rate as a percentage.
- **Duration Input**: Users specify the investment duration in years.
- **Table Display**: A table displays the calculated results, including the interest earned, total value at the end of each year, and total invested capital.

## Technologies Used

- **React**: For building the UI and managing the component state.
- **JavaScript**: For handling the investment calculations and logic.
- **HTML**: Markup language.
- **CSS**: For basic styling.

## How It Works

The app takes the user's input for the initial investment, annual investment, expected return, and investment duration. It uses the `calculateInvestmentResults` function to simulate the growth of the investment year by year, calculating the interest earned, total investment value, and invested capital.

The calculated results are then displayed in a table, showing the progress of the investment over the years.

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/investment-calculator.git
   cd investment-calculator
   ```

2. **Install Dependencies**:

   Make sure you have Node.js installed, then run:

   ```bash
   npm install
   ```

3. **Run the App**:

   ```bash
   npm run dev
   ```

   This will start the development server, and you can open the app in your browser at `http://localhost:3000`.

## Components

- **Input**: A component that renders an input field for the user to enter their investment data.
- **WrapperInput**: A wrapper component that groups related input fields together.
- **Table**: A component that renders a table displaying the investment results year by year.
- **TableBody**: A component that renders a table Header.
- **TableHead**: A component that renders a table Body.
- **TableRow**: A component that renders a each row of data.

## Calculation Logic

The `calculateInvestmentResults` function takes the following parameters:

- `initialInvestment`: The amount of money initially invested.
- `annualInvestment`: The amount of money added annually.
- `expectedReturn`: The expected annual return rate as a percentage.
- `duration`: The number of years the investment will last.

This function returns an array of objects, each representing a year's investment data, including:
- The interest earned that year.
- The total value of the investment at the end of that year.
- The total invested capital up to that year.

## Acknowledgments

Special thanks to **Maximilian Schwarzmüller** for his excellent courses and tutorials that helped me learn and build this project. His guidance was instrumental in understanding React and building this investment calculator.

