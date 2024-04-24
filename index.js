// Unit Tests

// multiplication function

test("multiplication returns a number", () => {
    const result = multiplication(2, 3);
    expect(typeof result).toBe("number");
  });
  
  test("multiplication returns the correct product", () => {
    const result = multiplication(2, 3);
    expect(result).toEqual(6);
  });
  
  test("multiplication with zero returns zero", () => {
    const result = multiplication(0, 5);
    expect(result).toEqual(0);
  });
  
  test("multiplication with negative numbers returns correct result", () => {
    const result = multiplication(-2, 3);
    expect(result).toEqual(-6);
  });
  
  test("multiplication with non-numeric input throws an error", () => {
    expect(() => {
      multiplication("a", 3);
    }).toThrow();
  });
  
  // concatOdds function
  
  test("concatOdds returns an array", () => {
    const result = concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]);
    expect(Array.isArray(result)).toBe(true);
  });
  
  test("concatOdds returns array with odd numbers in ascending order", () => {
    const result = concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]);
    expect(result).toEqual([-1, 1, 3, 9, 15]);
  });
  
  test("concatOdds handles arrays with same odd numbers correctly", () => {
    const result = concatOdds([2, 4, 6], [1, 3, 5]);
    expect(result).toEqual([1, 3, 5]);
  });
  
  test("concatOdds handles empty array correctly", () => {
    const result = concatOdds([], [9, 1, 1, 1, 4, 15, -1]);
    expect(result).toEqual([-1, 1, 9, 15]);
  });
  
  test("concatOdds handles both arrays being empty correctly", () => {
    const result = concatOdds([], []);
    expect(result).toEqual([]);
  });
  
  
  // Functional Tests
  
  // Shopping cart checkout 

  describe("Shopping cart checkout feature", () => {
    
    // Test for empty cart
    
    test("Empty cart should display error message", () => {
      const cart = []; 
      // Simulate empty cart
      const result = checkout(cart);
      expect(result).toContain("Your cart is empty. Please add items before checking out.");
    });
  
    // Test for each step of checkout process

    test("Checkout process shows summary and options", () => {
      const cart = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 20 },
      ]; 

      // Simulate cart with items

      const result = checkout(cart);
      expect(result).toContain("Summary:");
      expect(result).toContain("Total Price:");
      expect(result).toContain("Proceed as Guest");
      expect(result).toContain("Log In");
    });
  
    // Test for user creating account during guest checkout

    test("User can create account during guest checkout", () => {
      const result = checkoutGuest(); // Simulate guest checkout process with option to create account
      expect(result).toContain("Would you like to create an account?");
    });
  
    // Test for user leaving checkout process

    test("User can leave checkout process midway", () => {
      const result = leaveCheckout(); // Simulate user leaving checkout process
      expect(result).toContain("Redirecting to home page...");
    });
  });
  
  