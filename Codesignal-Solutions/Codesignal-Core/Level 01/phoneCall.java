/*
 * CODEFIGTHS - ARCADE - CORE - PHONE CALL
 *
 * Some phone usage rate may be described as follows:

first minute of a call costs min1 cents,
each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
each minute after 10th costs min11 cents.
You have s cents on your account before the call. What is the duration of the longest call 
(in minutes rounded down to the nearest integer) you can have?

Example

For min1 = 3, min2_10 = 1, min11 = 2 and s = 20, the output should be
phoneCall(min1, min2_10, min11, s) = 14.

Here's why:

the first minute costs 3 cents, which leaves you with 20 - 3 = 17 cents;
the total cost of minutes 2 through 10 is 1 * 9 = 9, so you can talk 9 more minutes and still have 17 - 9 = 8 cents;
each next minute costs 2 cents, which means that you can talk 8 / 2 = 4 more minutes.
Thus, the longest call you can make is 1 + 9 + 4 = 14 minutes long.

Input/Output

[execution time limit] 3 seconds (java)

[input] integer min1

Guaranteed constraints:
1 = min1 = 10.

[input] integer min2_10

Guaranteed constraints:
1 = min2_10 = 10.

[input] integer min11

Guaranteed constraints:
1 = min11 = 10.

[input] integer s

Guaranteed constraints:
2 = s = 60.

[output] integer

[Java] Syntax Tips

// Prints help message to the console
// Returns a string
// 
// Globals declared here will cause a compilation error,
// declare variables inside the function instead!
String helloWorld(String name) {
    System.out.println("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
 *
 *
 *
 */
 
public class phoneCall {
    
    static int phoneCallMethod(int min1, int min2_10, int min11, int s) {
		
		int minutes = 60;
		int cents = s;
		
		while(cents >= 0){
			minutes = minutes + min1; 
		}
		
		return minutes;
	}
    
    public static void main(String[] args) {
	
	System.out.println(phoneCallMethod(3, 1, 2, 20)); // 14m => 20c
	System.out.println(phoneCallMethod(2,2,1,2)); // 1m = > 2c
	System.out.println(phoneCallMethod(10,1,2,22)); // 11m => 22c
	System.out.println(phoneCallMethod(2,2,1,24)); // 14m => 24c
	System.out.println(phoneCallMethod(1,2,1,6)); // 3m => 6c
    }
}
