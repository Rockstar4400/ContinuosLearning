/**
 * 
 *Source help:
 * http://www.baeldung.com/java-math-pow 
 *
 *
 *
 */
 
import java.util.*;
 
public class JAVALOOP2 {
    public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
        int result = a;   
        for(int j = 0; j< n; j++){
       	int intResult = (int) Math.pow(2, j);
    	result += intResult * b;    	
    	System.out.print(result + "");    	
    	}
    	System.out.print("\n");
        }
        in.close();
         	
    }
}
