/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-11-21
 * @fileoverview This program outputs a table showing the balance in the account at the end of each year for 10 years.
 */

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	// Declaring variables
	var principalAsString string
	var principal int

	var interestRateAsString string
	var interestRate int

	// Input
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter a number of dollars: ")
	principalAsString, _ = reader.ReadString('\n')
	principalAsString = strings.TrimSpace(principalAsString)
	principal, _ = strconv.Atoi(principalAsString)

	fmt.Print("Enter a percentage interest rate: ")
	interestRateAsString, _ = reader.ReadString('\n')
	interestRateAsString = strings.TrimSpace(interestRateAsString)
	interestRate, _ = strconv.Atoi(interestRateAsString)

	// Calculation
	var interestMultiplier float64 = float64(interestRate) / 100.0

	var interestYear1 float64 = float64(principal) * interestMultiplier
	var currentValueYear1 float64 = float64(principal) + interestYear1

	var interestYear2 float64 = currentValueYear1 * interestMultiplier
	var currentValueYear2 float64 = currentValueYear1 + interestYear2

	var interestYear3 float64 = currentValueYear2 * interestMultiplier
	var currentValueYear3 float64 = currentValueYear2 + interestYear3

	var interestYear4 float64 = currentValueYear3 * interestMultiplier
	var currentValueYear4 float64 = currentValueYear3 + interestYear4

	var interestYear5 float64 = currentValueYear4 * interestMultiplier
	var currentValueYear5 float64 = currentValueYear4 + interestYear5

	var interestYear6 float64 = currentValueYear5 * interestMultiplier
	var currentValueYear6 float64 = currentValueYear5 + interestYear6

	var interestYear7 float64 = currentValueYear6 * interestMultiplier
	var currentValueYear7 float64 = currentValueYear6 + interestYear7

	var interestYear8 float64 = currentValueYear7 * interestMultiplier
	var currentValueYear8 float64 = currentValueYear7 + interestYear8

	var interestYear9 float64 = currentValueYear8 * interestMultiplier
	var currentValueYear9 float64 = currentValueYear8 + interestYear9

	var interestYear10 float64 = currentValueYear9 * interestMultiplier
	var currentValueYear10 float64 = currentValueYear9 + interestYear10

	// Printing
	fmt.Println("Year      Initial Value       Interest Gained     Current Value")
	fmt.Printf("%-10d%-20.2f%-20.2f%-20.2f\n", 2, float64(principal), interestYear2, currentValueYear2)
	fmt.Printf("%-10d%-20.2f%-20.2f%-20.2f\n", 3, float64(principal), interestYear3, currentValueYear3)
	fmt.Printf("%-10d%-20.2f%-20.2f%-20.2f\n", 4, float64(principal), interestYear4, currentValueYear4)
	fmt.Printf("%-10d%-20.2f%-20.2f%-20.2f\n", 5, float64(principal), interestYear5, currentValueYear5)
	fmt.Printf("%-10d%-20.2f%-20.2f%-20.2f\n", 6, float64(principal), interestYear6, currentValueYear6)
	fmt.Printf("%-10d%-20.2f%-20.2f%-20.2f\n", 7, float64(principal), interestYear7, currentValueYear7)
	fmt.Printf("%-10d%-20.2f%-20.2f%-20.2f\n", 8, float64(principal), interestYear8, currentValueYear8)
	fmt.Printf("%-10d%-20.2f%-20.2f%-20.2f\n", 9, float64(principal), interestYear9, currentValueYear9)
	fmt.Printf("%-10d%-20.2f%-20.2f%-20.2f\n", 10, float64(principal), interestYear10, currentValueYear10)
}
